import { ReactElement } from 'react';
import { CurrentTrack } from './CurrentTrack';
import { PlaybackControls } from './PlaybackControls';
import { ProgressBar } from './ProgressBar';
import { VolumeControl } from './VolumeControl';
import './MediaPlayer.css';

export function MediaPlayer(): ReactElement {
  return (
    <div className="media-player">
      <CurrentTrack />
      <div className="player-main">
        <PlaybackControls />
        <ProgressBar />
      </div>
      <VolumeControl />
    </div>
  );
}