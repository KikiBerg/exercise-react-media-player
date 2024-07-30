import { ReactElement } from 'react';
import { IMediaCardProps } from '../interfaces';
import './MediaCard.css';

export function MediaCard({ track }: IMediaCardProps): ReactElement {
  return (
    <div className="media-card">
      <img src={track.coverArt} alt={track.title} />
      <h3>{track.title}</h3>
      <p>{track.artist}</p>
      <span className="material-symbols-outlined play-icon">play_arrow</span>
    </div>
  );
}