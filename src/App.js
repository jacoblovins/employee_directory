import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Project from './components/Project/Project';

// Main app component rendering header and project components
function App() {
  return (
    <div className="App">
      <Header />
      <Project />
    </div>
  );
}

export default App;
