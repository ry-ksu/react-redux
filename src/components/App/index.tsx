import { Routes, Route } from 'react-router-dom';
import React from 'react';

import { NotFoundPage } from '../pages/NotFoundPage';
import { About } from '../pages/About';
import { Layout } from '../layout';
import { Games } from '../pages/Games';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Games />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
