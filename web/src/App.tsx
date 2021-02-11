import React, { useEffect, useState } from 'react';
import { DataSource } from './components/DataSource';
import { CameraTables } from './components/CameraTables';
import { Camera, listCameras } from './api/cameras';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [cameras, setCameras] = useState<Camera[]>([]);

  useEffect(() => {
    listCameras().then((c) => {
      setCameras(c);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="title">Security cameras Utrecht</h1>
      <div id="mapid" />
      <DataSource />
      {loading && <h2>Loading cameras...</h2> || <CameraTables cameras={cameras} />}
    </div>
  );
};
