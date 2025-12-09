// Shared utilities for Hiring Market API endpoints

/**
 * Normalizes a string to lowercase and trims whitespace
 * Used to make API parameters case-insensitive while matching DB format
 *
 * @example
 * normalizeString("  LONDON  ") => "london"
 * normalizeString("Data") => "data"
 */
export function normalizeString(str: string): string {
  return str.trim().toLowerCase();
}

/**
 * Normalizes an array of strings (e.g., comma-separated query param values)
 *
 * @example
 * normalizeStringArray(["LON", "NYC ", " denver"]) => ["lon", "nyc", "denver"]
 */
export function normalizeStringArray(arr: string[]): string[] {
  return arr.map((s) => normalizeString(s));
}

/**
 * Parses a comma-separated query parameter and normalizes values
 * Returns null if param is not provided
 *
 * @example
 * parseCommaSeparatedParam("LON, NYC,denver") => ["lon", "nyc", "denver"]
 * parseCommaSeparatedParam(null) => null
 */
export function parseCommaSeparatedParam(param: string | null): string[] | null {
  if (!param) return null;
  return normalizeStringArray(param.split(','));
}

/**
 * Valid database column values for filtering
 * Based on enriched_jobs schema
 */
export const VALID_FILTERS = {
  job_family: ['product', 'data', 'engineering', 'design', 'marketing'], // Add more as needed
  seniority: ['junior', 'mid', 'senior', 'staff', 'principal', 'lead'],
  track: ['ic', 'manager'],
  working_arrangement: ['remote', 'hybrid', 'onsite'],
  data_source: ['adzuna', 'greenhouse'],
  position_type: ['full_time', 'part_time', 'contract', 'temporary'],
};
