import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import KitchenStaffInterface from './components/KitchenStaffInterface';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KitchenStaffInterface />} />
      </Routes>
    </Router>
  );
}

export default App;
