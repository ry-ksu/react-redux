import { Routes, Route } from 'react-router-dom';
import React, { createContext, useReducer } from 'react';

import { NotFoundPage } from '../pages/NotFoundPage';
import { About } from '../pages/About';
import { Layout } from '../layout';
import { Games } from '../pages/Games';
import { UserForms } from '../pages/UserForms';

import { IFormData } from '../../types';
import { formState } from 'reducer';

type IState = {
  userCards: IFormData[];
};

export const defaultState: IState = {
  userCards: [],
};

export const AppContext = createContext({ defaultState, dispatch: function () {} });

function App() {
  const [state, dispatch] = useReducer(formState, defaultState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Games />} />
          <Route path="forms" element={<UserForms />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
