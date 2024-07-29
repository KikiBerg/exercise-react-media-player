import { ReactElement } from 'react';
import './CurrentTrack.css';

export function CurrentTrack(): ReactElement {
  return (
    <div className="current-track">
      <img src="/assets/on_your_side.jpg" alt="Current Track" />
      <div className="track-info">
        <h4>Like we used to</h4>
        <p>A Rocket to the Moon</p>
      </div>
      <span className="material-symbols-outlined">favorite</span>
    </div>
  );
}