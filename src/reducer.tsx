import { IFormAction, ISearchAction, IGameState, IUserState } from './types';

export function formReducer(state: IUserState, action: IFormAction) {
  const { type, payload } = action;
  switch (type) {
    case 'add':
      return { userCards: [...state.users, payload] };
    default:
      return state;
  }
}

export const CHOSE_GAME = 'CHOSE_GAME';
export const ADD_NEW_CARDS = 'ADD_NEW_CARDS';
export const CHANGE_LOADING = 'CHANGE_LOADING';
export const CHANGE_SEARCH_WORD = 'CHANGE_SEARCH_WORD';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const CHANGE_PAGE_SIZE = 'CHANGE_PAGE_SIZE';
export const CHANGE_ORDERING = 'CHANGE_ORDERING';
export const CHANGE_COUNT = 'CHANGE_COUNT';

export function searchReducer(state: IGameState, action: ISearchAction) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_COUNT:
      return { ...state, count: payload.count };

    case CHANGE_ORDERING:
      return { ...state, ordering: payload.ordering };

    case CHANGE_PAGE_SIZE:
      return { ...state, pageSize: payload.pageSize };

    case CHANGE_PAGE:
      return { ...state, page: payload.page };

    case CHANGE_SEARCH_WORD:
      return {
        ...state,
        newSearchValue: payload.newSearchValue,
        page: '1',
        count: '1',
      };

    case ADD_NEW_CARDS:
      return {
        ...state,
        gamesCards: payload.gamesCards,
        chosenGame: null,
        isLoaded: payload.isLoaded,
      };

    case CHOSE_GAME:
      return { ...state, chosenGame: payload.chosenGame };

    case CHANGE_LOADING:
      return { ...state, isLoaded: payload.isLoaded };

    default:
      return state;
  }
}
