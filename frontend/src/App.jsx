import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-3xl font-bold">TaskFlow</h1>
          <p>Project Management Made Simple</p>
        </header>
        
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Dashboard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Welcome to TaskFlow</h2>
      <p className="text-gray-700">Manage your projects and tasks efficiently.</p>
    </div>
  );
}

function Projects() {
  return <div className="bg-white p-6 rounded-lg shadow-md"><h2>Projects</h2></div>;
}

function Tasks() {
  return <div className="bg-white p-6 rounded-lg shadow-md"><h2>Tasks</h2></div>;
}

export default App;
