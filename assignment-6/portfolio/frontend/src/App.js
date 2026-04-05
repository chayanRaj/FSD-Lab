import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddStudent   from './components/AddStudent';
import ViewStudents from './components/ViewStudents';
import EditStudent  from './components/EditStudent';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h1>🎓 Student Portfolio</h1>
          <div className="nav-links">
            <Link to="/">View Students</Link>
            <Link to="/add">Add Student</Link>
          </div>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/"         element={<ViewStudents />} />
            <Route path="/add"      element={<AddStudent />} />
            <Route path="/edit/:id" element={<EditStudent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
