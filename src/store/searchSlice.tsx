import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IGameState, IGameAPIResponse } from 'types';
import { axiosGet } from 'services';

export const fetchUsers = createAsyncThunk<
  IGameAPIResponse,
  undefined,
  { rejectValue: string; state: { search: IGameState } }
>('search/fetchSearch', async function (_, { rejectWithValue, getState }) {
  const state = getState().search;

  try {
    const response = await axiosGet(
      state.newSearchValue,
      state.page,
      state.pageSize,
      state.ordering
    );

    return response;
  } catch (error) {
    return rejectWithValue('Something was wrong');
  }
});

const searchInitialState: IGameState = {
  newSearchValue: '',
  gamesCards: [],
  ordering: '-rating',
  page: '1',
  pageSize: '15',
  count: '1',
  chosenGame: null,
  isLoaded: 'NOT_LOADED',
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: {
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
    choseGame(state, action) {
      state.chosenGame = action.payload.chosenGame;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoaded = 'LOADING';
        state.gamesCards = [];
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoaded = 'LOADED';
        state.chosenGame = null;
        state.gamesCards = action.payload.results;
        state.count = String(action.payload.count);
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.isLoaded = 'REJECTED';
        state.error = 'Something was wrong. Please, try again.';
      });
  },
});

export const { changeOrdering, changePageSize, changePage, changeSearchWord, choseGame } =
  searchSlice.actions;

export default searchSlice.reducer;
