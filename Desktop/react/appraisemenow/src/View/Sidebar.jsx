import React from 'react';
import './SideBar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Messages</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
