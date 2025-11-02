import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const writingDirectory = path.join(process.cwd(), 'content/writing');
// Get a single markdown file by slug
export async function getWritingBySlug(slug: string) {
  try {
    const fullPath = path.join(writingDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Parse frontmatter and content
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = await remark()
      .use(html)
      .process(content);
    const contentHtml = processedContent.toString();

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