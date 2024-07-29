import { ReactElement } from 'react';
import './ProgressBar.css';

export function ProgressBar(): ReactElement {
  return (
    <div className="progress-bar">
      <div className="progress"></div>
    </div>
  );
}