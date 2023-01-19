import { Routes, Route } from 'react-router-dom';
import React from 'react';

import { Layout } from '../layout';
import { NotFoundPage } from '../pages/NotFoundPage';
import { About } from '../pages/About';
import { Games } from '../pages/Games';
import { UserForms } from '../pages/UserForms';
import { Game } from '../pages/Game';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Games />} />
        <Route path="game/:id" element={<Game />} />
        <Route path="forms" element={<UserForms />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
