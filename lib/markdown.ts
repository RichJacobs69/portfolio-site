import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const writingDirectory = path.join(process.cwd(), 'content/writing');

// Component data definitions
const componentRegistry: Record<string, any> = {
  'framework-table': {
    rows: [
      { dimension: 'User Impact', description: 'Does this solve a real user need?', maxPoints: 15 },
      { dimension: 'Adoption', description: 'Will users actually use it?', maxPoints: 15 },
      { dimension: 'Company Impact', description: 'Does this move company metrics?', maxPoints: 50 },
      { dimension: 'Natural Ownership', description: 'Who maintains this long-term?', maxPoints: 20 },
      { dimension: 'Effort (inverse)', description: 'How much work is required?', maxPoints: 100 },
      { dimension: 'TOTAL', description: '', maxPoints: 200 },
    ],
    total: 200,
  },
  'project-comparison': {
    rows: [
      {
        dimension: 'User Impact',
        benchmarking: 'Customer-facing product solving critical competitive need',
        benchmarkingScore: '14/15',
        sales: 'Internal tool, marginal improvement over existing tools',
        salesScore: '6/15',
      },
      {
        dimension: 'Adoption',
        benchmarking: 'Differentiated feature expanding addressable market',
        benchmarkingScore: '12/15',
        sales: 'Compatible with general AI assistants, requires behavior change',
        salesScore: '8/15',
      },
      {
        dimension: 'Company Impact',
        benchmarking: 'Direct revenue stream (ARR) & strategic competitive advantage',
        benchmarkingScore: '48/50',
        sales: 'Zero revenue, internal enablement only',
        salesScore: '15/50',
      },
      {
        dimension: 'Natural Ownership',
        benchmarking: 'Clear data team ownership, productized infrastructure',
        benchmarkingScore: '17/20',
        sales: 'Soft to product team as an experiment, prototype not production',
        salesScore: '8/20',
      },
      {
        dimension: 'Effort (inverse)',
        benchmarking: '12 weeks, 10 people, enterprise-grade development',
        benchmarkingScore: '65/100',
        sales: '1 week, solo build, no-code platform',
        salesScore: '92/100',
      },
      {
        dimension: 'TOTAL',
        benchmarking: '',
        benchmarkingScore: '156/200',
        sales: '',
        salesScore: '127/200',
      },
    ],
  },
};

// Get a single markdown file by slug
export async function getWritingBySlug(slug: string) {
  try {
    const fullPath = path.join(writingDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Parse frontmatter and content
    const { data, content } = matter(fileContents);

    // Replace component markers with component metadata
    // Use a special marker that won't be stripped by remark
    const componentRegex = /<!-- component: ([\w-]+) -->/g;
    let componentIndex = 0;
    const componentMap = new Map<string, any>();

    let processedMarkdown = content.replace(componentRegex, (match, componentName) => {
      const componentData = componentRegistry[componentName];
      if (!componentData) {
        console.warn(`Component ${componentName} not found in registry`);
        return match;
      }
      const placeholder = `COMPONENT_PLACEHOLDER_${componentIndex}`;
      componentMap.set(placeholder, { name: componentName, data: componentData });
      componentIndex++;
      return placeholder;
    });

    // Now convert the modified markdown to HTML
    const processedContent = await remark()
      .use(html)
      .process(processedMarkdown);
    let contentHtml = processedContent.toString();

    // Replace the text placeholders with component divs
    componentMap.forEach((component, placeholder) => {
      const componentDiv = `<div class="component-placeholder" data-component="${component.name}" data-component-data="${Buffer.from(JSON.stringify(component.data)).toString('base64')}"></div>`;
      contentHtml = contentHtml.replace(`<p>${placeholder}</p>`, componentDiv);
    });

    return {
      slug,
      contentHtml,
      ...data,
    };
  } catch (error) {
    console.error(`Error reading markdown file for slug: ${slug}`, error);
    return null;
  }
}

// Get all markdown files (for generating static paths)
export function getAllWritingSlugs() {
  try {
    // Check if directory exists first
    if (!fs.existsSync(writingDirectory)) {
      console.warn('Writing directory does not exist yet');
      return [];
    }
    
    const fileNames = fs.readdirSync(writingDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => ({
        slug: fileName.replace(/\.md$/, ''),
      }));
  } catch (error) {
    console.error('Error reading writing directory:', error);
    return [];
  }
}

// Check if a markdown file exists for a given slug
export function writingExists(slug: string): boolean {
  try {
    const fullPath = path.join(writingDirectory, `${slug}.md`);
    return fs.existsSync(fullPath);
  } catch {
    return false;
  }
}