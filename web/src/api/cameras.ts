export interface Camera {
  name: string;
  num: number;
  latitude: number;
  longitude: number;
}

export async function listCameras(): Promise<Camera[]> {
  return (await fetch('http://localhost:4000/api/cameras')).json();
}
