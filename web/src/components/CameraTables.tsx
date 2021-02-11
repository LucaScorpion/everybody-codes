import React, { useEffect, useState } from 'react';
import './CameraTables.scss';
import { Camera } from '../api/cameras';
import { CameraTable } from './CameraTable';

export interface Props {
  cameras: Camera[];
}

export const CameraTables: React.FC<Props> = ({ cameras }) => {
  const [cameras3, setCameras3] = useState<Camera[]>([]);
  const [cameras5, setCameras5] = useState<Camera[]>([]);
  const [cameras3And5, setCameras3And5] = useState<Camera[]>([]);
  const [camerasOther, setCamerasOther] = useState<Camera[]>([]);

  useEffect(() => {
    setCameras3(cameras.filter((c) => c.num % 3 === 0 && c.num % 5 !== 0));
    setCameras5(cameras.filter((c) => c.num % 3 !== 0 && c.num % 5 === 0));
    setCameras3And5(cameras.filter((c) => c.num % 3 === 0 && c.num % 5 === 0));
    setCamerasOther(cameras.filter((c) => c.num % 3 !== 0 && c.num % 5 !== 0));
  }, [cameras]);

  return (
    <table id="cameraTableContainer">
      <tbody>
        <tr>
          <td>
            <CameraTable className="column3" header="Cameras 3" cameras={cameras3} />
          </td>
          <td>
            <CameraTable className="column5" header="Cameras 5" cameras={cameras5} />
          </td>
          <td>
            <CameraTable className="column15" header="Cameras 3 & 5" cameras={cameras3And5} />
          </td>
          <td>
            <CameraTable className="columnOther" header="Cameras Overig" cameras={camerasOther} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
