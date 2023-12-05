import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EmployeeList from './View/Employees_admin';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './View/Dashboard';
import Login from './View/Login';
import DashboardAdmin from './View/Dashboard_admin';

// const jwt = require('jsonwebtoken')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
    <Routes>
      <Route path="/" element={<DashboardAdmin/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/employees_admin" element={<EmployeeList />} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
