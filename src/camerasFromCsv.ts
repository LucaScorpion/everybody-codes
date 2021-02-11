import { promises as fs } from 'fs';
import { Camera } from './Camera';

export async function camerasFromCsv(): Promise<Camera[]> {
  const text = (await fs.readFile('data/cameras-defb.csv')).toString().trim();
  const [, ...lines] = text.split(/\r?\n/);
  return lines.map(parseCamera).filter((c) => !!c) as Camera[];
}

function parseCamera(line: string): Camera | null {
  const [name, latitude, longitude] = line.split(';');

  // Check for errors.
  if (!name || !latitude || !longitude) {
    return null;
  }

  // Get the number from the name.
  const nameParts = name.split(/[- ]/, 4);
  const num = parseInt(nameParts[2], 10);

  return {
    name,
    num,
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude),
  };
}
