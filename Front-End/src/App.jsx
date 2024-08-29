import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './component/Sidebar'; // Adjust the path as necessary
import Module1 from './component/Module1'; // Ensure these paths are correct
import Module2 from './component/Module2';
import Module3 from './component/Module3';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/module1" element={<Module1 />} />
            <Route path="/module2" element={<Module2 />} />
            <Route path="/module3" element={<Module3 />} />
            {/* You can add a default route or a 404 page here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
