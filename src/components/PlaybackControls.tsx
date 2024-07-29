import { ReactElement } from 'react';
import './PlaybackControls.css';

export function PlaybackControls(): ReactElement {
  return (
    <div className="playback-controls">
      <span className="material-symbols-outlined">shuffle</span>
      <span className="material-symbols-outlined">skip_previous</span>
      <span className="material-symbols-outlined play-pause">play_circle</span>
      <span className="material-symbols-outlined">skip_next</span>
      <span className="material-symbols-outlined">repeat</span>
    </div>
  );
}