import { ReactElement } from 'react';
import './VolumeControl.css';

export function VolumeControl(): ReactElement {
  return (
    <div className="volume-control">
      <span className="material-symbols-outlined">volume_up</span>
      <input type="range" min="0" max="100" />
    </div>
  );
}