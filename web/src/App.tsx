import React from 'react';
import { DataSource } from './components/DataSource';

export const App: React.FC = () => (
  <div className="App">
    <h1 className="title">Security cameras Utrecht</h1>
    <div id="mapid" />
    <DataSource />
  </div>
);
