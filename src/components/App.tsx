import { ReactElement } from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { MediaList } from './MediaList';
import { MediaPlayer } from './MediaPlayer';
import './App.css';

export function App(): ReactElement {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <MediaList />
      </div>
      <MediaPlayer />
    </div>
  );
}
