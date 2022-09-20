import React from 'react';
// import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<h1>Movies</h1>} />
      <Route path="/profile/:id" element={<h1>Profile</h1>} />
      <Route path="/movie/:id" element={<h1>Movie Information</h1>} />
      <Route path="/actors/:id" element={<h1>Actor Information</h1>} />
    </Routes>
  </div>
);

export default App;
