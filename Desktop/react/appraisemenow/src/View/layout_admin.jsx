
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/style_dashboard_admin.css';

const Layout = ({ children }) => {
  return (
    <div className="dashboard-container" style={{ display: 'flex', alignItems: 'flex-start' }}>
      <nav className="vertical-navbar">
        <Link to="/">Dashboard</Link>
        <Link to="/Employees_admin">Employees</Link>
        <Link to="/">Noticeboard</Link>
        <Link to="/">Generate Report</Link>
      </nav>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
