import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './View/Dashboard';
import Login from './View/Login';
import Task from './View/Task';

// const jwt = require('jsonwebtoken')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Router>
    <App />
    <Routes>
    
      <Route path="/" element={<Navigate to="/login" replace/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/tasks" element={<Task />} />
      </Routes>
    
  </Router>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
