import { ReactElement } from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { MediaList } from './MediaList';
import { MediaPlayer } from './MediaPlayer';
import { CurrentTrack } from './CurrentTrack';
import { Footer } from './Footer';
import './App.css';

export function App(): ReactElement {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="media-content">
          <MediaList />
          <CurrentTrack />  
        </div>
      </div>
      <MediaPlayer />
      <Footer />
    </div>
  );
}