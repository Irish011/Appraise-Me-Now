import React from 'react';
import '../Styles/Sidebar.css';

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
