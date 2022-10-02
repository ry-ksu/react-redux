import { Routes, Route } from 'react-router-dom';
import React from 'react';

import { NotFoundPage } from 'components/pages/NotFoundPage';
import { About } from 'components/pages/About';
import { Layout } from 'components/layout';
import { Games } from 'components/pages/Games';

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
