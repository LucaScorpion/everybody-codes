export interface Camera {
  name: string;
  num: number;
  latitude: string;
  longitude: string;
}

export function cameraToString({ name, num, latitude, longitude }: Camera): string {
  return `${num} | ${name} | ${latitude} | ${longitude}`;
}
