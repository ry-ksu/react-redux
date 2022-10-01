import { Routes, Route } from 'react-router-dom';
import React from 'react';

import NotFoundPage from 'components/pages/NotFoundPage';
import About from 'components/pages/About';
import AllCards from './components/Card';
import Layout from 'components/Layout';

import { gameList } from 'components/gameList';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllCards gameList={gameList} />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
