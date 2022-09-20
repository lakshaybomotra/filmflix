import React from 'react';
// import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';

const App = () => (
  <div>
    <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/movie/:id" element={<MovieInformation />} />
        <Route path="/actors/:id" element={<Actors />} />
      </Routes>
    </main>
  </div>
);

export default App;
