import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResezyLanding from './pages/LandingPage';
import TemplatesPage from './pages/Templates'; 

const App = () => {
  return (
    <Routes>
      <Route path ="/" element={<ResezyLanding/>}/>
      <Route path="/templates" element={<TemplatesPage />} />
    </Routes>
  );
};

export default App;
