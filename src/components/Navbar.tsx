import { ReactElement } from "react";
import './Navbar.css';

export function Navbar(): ReactElement {
  return (
    <nav className="navbar">
      <div className="nav-controls">
        <span className="material-symbols-outlined">chevron_left</span>
        <span className="material-symbols-outlined">chevron_right</span>
      </div>
      <div className="search-bar">
        <span className="material-symbols-outlined">search</span>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-profile">
        <img src="/path-to-user-avatar.jpg" alt="User Avatar" />
        <span>User Name</span>
      </div>
    </nav>
  );
}
