const env = process.env.NODE_ENV;
const BASE_URL = env === 'development' || env === 'test' ? 'http://localhost:4000' : '';

export function apiUrl(path: string): string {
  return `${BASE_URL}/${path}`;
}
