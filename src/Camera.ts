export interface Camera {
  name: string;
  num: number;
  latitude: number;
  longitude: number;
}

export function cameraToString({ name, num, latitude, longitude }: Camera): string {
  return `${num} | ${name} | ${latitude} | ${longitude}`;
}
