
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/HomePage';

function App() {
  return (
    <Router>
    <div>
      <Routes>
      <Route path="/" element={<Homepage />} />
     </Routes>
    </div>
    </Router>
  );
}

export default App;
