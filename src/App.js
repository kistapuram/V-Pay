import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';
import './App.css'; // Make sure to import your CSS file for styling

const App = () => {
  const [token, setToken] = useState('');

  return (
    <Router>
      <nav className="nav-buttons">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/dashboard">
          <button>Dashboard</button>
        </Link>
        <Link to="/transactions">
          <button>Transactions</button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions token={token} />} />
      </Routes>
    </Router>
  );
};

export default App;

