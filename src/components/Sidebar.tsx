import { ReactElement } from 'react';
import { ISidebarItem } from '../interfaces';
import { sidebarItems } from '../data';
import './Sidebar.css';

export function Sidebar(): ReactElement {
  return (
    <aside className="sidebar">
      <ul>
        {sidebarItems.map((item: ISidebarItem) => (
          <li key={item.id}>
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
