import { apiUrl } from './apiUrl';

export interface Camera {
  name: string;
  num: number;
  latitude: number;
  longitude: number;
}

export async function listCameras(): Promise<Camera[]> {
  return (await fetch(apiUrl('api/cameras'))).json();
}
