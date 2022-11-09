import { createSlice } from '@reduxjs/toolkit';
import { IGameState } from 'types';

const searchInitialState: IGameState = {
  newSearchValue: '',
  gamesCards: [],
  ordering: '-rating',
  page: '1',
  pageSize: '15',
  count: '1',
  chosenGame: null,
  isLoaded: 'NOT_LOADED',
};

const searchSlice = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: {
    changeCount(state, action) {
      state.count = action.payload.count;
    },
    changeOrdering(state, action) {
      state.ordering = action.payload.ordering;
    },
    changePageSize(state, action) {
      state.pageSize = action.payload.pageSize;
    },
    changePage(state, action) {
      state.page = action.payload.page;
    },
    changeSearchWord(state, action) {
      state.newSearchValue = action.payload.newSearchValue;
      state.page = '1';
      state.count = '1';
    },
    addNewGames(state, action) {
      state.gamesCards = action.payload.gamesCards;
      state.chosenGame = null;
      state.isLoaded = action.payload.isLoaded;
    },
    choseGame(state, action) {
      state.chosenGame = action.payload.chosenGame;
    },
    changeLoading(state, action) {
      state.isLoaded = action.payload.isLoaded;
    },
  },
});

export const {
  changeCount,
  changeOrdering,
  changePageSize,
  changePage,
  changeSearchWord,
  addNewGames,
  choseGame,
  changeLoading,
} = searchSlice.actions;

export default searchSlice.reducer;
