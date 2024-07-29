import { ReactElement } from 'react';
import { MediaCard } from './MediaCard';
import { ITrack } from '../interfaces';
import { tracks } from '../data';
import './MediaList.css';

export function MediaList(): ReactElement {
  return (
    <div className="media-list">
      <h2>Your Library</h2>
      <div className="media-grid">
        {tracks.map((track: ITrack) => (
          <MediaCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
}
