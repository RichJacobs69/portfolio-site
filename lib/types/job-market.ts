// Shared types for Job Market Dashboard API

export interface ApiResponse<T> {
  data: T;
  meta: {
    last_updated: string;
    total_records: number;
    source: 'all' | 'greenhouse' | 'adzuna';
  };
  error?: string;
}

export interface TestConnectionData {
  enriched_jobs_count: number;
  raw_jobs_count: number;
  greenhouse_count: number;
  cities: string[];
}

export interface RoleDemandData {
  city_code: string;
  job_subfamily: string;
  count: number;
}

export interface SkillDemandData {
  skill: string;
  count: number;
  percentage: number;
}

export interface WorkingArrangementData {
  working_arrangement: string;
  count: number;
  percentage: number;
}

export interface TopCompanyData {
  company_name: string;
  count: number;
}

export interface ExperienceDistributionData {
  seniority: string;
  count: number;
  percentage: number;
}
