import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Sidebar.css';
import Login from './Login';

function Sidebar() {
  const navigate = useNavigate(); 

  const handleLogout = () => {

    navigate('/login');
  };

  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        {/* <li><Link to="/tasks">Assign Tasks</Link></li> */}
        <li><Link to="/settings">Settings</Link></li>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <li><a href="#" onClick={handleLogout} style={{ border: "solid white", padding: '10px', borderRadius: '15px' }}>Logout</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
