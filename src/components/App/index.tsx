import { Routes, Route } from 'react-router-dom';
import React, { createContext, useReducer, useContext } from 'react';

import { Layout } from '../layout';
import { NotFoundPage } from '../pages/NotFoundPage';
import { About } from '../pages/About';
import { Games } from '../pages/Games';
import { UserForms } from '../pages/UserForms';
import { Game } from '../pages/Game';

// import { ISearchAction, IGameState } from '../../types';
// import { searchReducer } from 'reducer';

// start code for GlobalState
// const defaultGameState: IGameState = {
//   newSearchValue: '',
//   gamesCards: [],
//   ordering: '-rating',
//   page: '1',
//   pageSize: '15',
//   count: '1',
//   chosenGame: null,
//   isLoaded: 'NOT_LOADED',
// };

// type GlobalContent = {
//   gamesState: IGameState;
//   gameDispatch: (obj: ISearchAction) => void;
// };

// const AppContext = createContext<GlobalContent>({
//   gamesState: defaultGameState,
//   gameDispatch: () => {},
// });

// export const useGlobalContext = () => useContext(AppContext);
// end code for GlobalState

function App() {
  // const [gamesState, gameDispatch] = useReducer(searchReducer, defaultGameState);

  return (
    // <AppContext.Provider value={{ gamesState, gameDispatch }}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Games />} />
        <Route path="game/:id" element={<Game />} />
        <Route path="forms" element={<UserForms />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
    // </AppContext.Provider>
  );
}

export default App;
