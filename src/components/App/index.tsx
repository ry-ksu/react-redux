import { Routes, Route } from 'react-router-dom';
import React, { createContext, useReducer, useContext } from 'react';

import { NotFoundPage } from '../pages/NotFoundPage';
import { About } from '../pages/About';
import { Layout } from '../layout';
import { Games } from '../pages/Games';
import { UserForms } from '../pages/UserForms';

import { IFormData, IAction } from '../../types';
import { formState } from 'reducer';

type GlobalContent = {
  state: IState;
  dispatch: (obj: IAction) => void;
};

type IState = {
  userCards: IFormData[];
};

export const defaultState: IState = {
  userCards: [],
};

export const AppContext = createContext<GlobalContent>({
  state: {
    userCards: [],
  },
  dispatch: () => {},
});

export const useGlobalContext = () => useContext(AppContext);

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
