import React from 'react';
import { Camera } from '../api/cameras';

export interface Props {
  cameras: Camera[];
  className: string;
  header: string;
}

export const CameraTable: React.FC<Props> = ({ cameras, className, header }) => (
  <table className={`camera-table ${className}`}>
    <thead>
      <tr>
        <th colSpan={4}>{header}</th>
      </tr>
      <tr>
        <th>Number</th>
        <th>Name</th>
        <th>Latitude</th>
        <th>Longitude</th>
      </tr>
    </thead>
    <tbody>
      {cameras.map((c, i) => (
        <tr key={i}>
          <td>{c.num}</td>
          <td>{c.name}</td>
          <td>{c.latitude}</td>
          <td>{c.longitude}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
