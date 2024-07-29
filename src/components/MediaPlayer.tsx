import { ReactElement } from 'react';
import { CurrentMediaInfo } from './CurrentMediaInfo';
import './MediaPlayer.css';

export function MediaPlayer(): ReactElement {
    return (
      <div className="media-player">
        <CurrentMediaInfo />
        <div className="player-controls">
          <span className="material-symbols-outlined">shuffle</span>
          <span className="material-symbols-outlined">skip_previous</span>
          <span className="material-symbols-outlined play-pause">play_circle</span>
          <span className="material-symbols-outlined">skip_next</span>
          <span className="material-symbols-outlined">repeat</span>
        </div>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <div className="volume-control">
          <span className="material-symbols-outlined">volume_up</span>
          <input type="range" min="0" max="100" />
        </div>
      </div>
    );
  }