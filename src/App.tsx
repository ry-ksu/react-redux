import { Routes, Route } from 'react-router-dom';
import React from 'react';

import { NotFoundPage } from 'components/pages/NotFoundPage';
import { About } from 'components/pages/About';
import { Layout } from 'components/layout';
import { Home } from 'components/pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
