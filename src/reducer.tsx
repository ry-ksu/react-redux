import { IFormAction, ISearchAction, IGameState, IUserState } from './types';

export function formState(state: IUserState, action: IFormAction) {
  const { type, payload } = action;
  switch (type) {
    case 'add':
      return { userCards: [...state.userCards, payload] };
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

export function searchState(state: IGameState, action: ISearchAction) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_ORDERING:
      return Object.assign({}, state, {
        ordering: payload.ordering,
      });
    case CHANGE_PAGE_SIZE:
      return Object.assign({}, state, {
        pageSize: payload.pageSize,
      });
    case CHANGE_PAGE:
      return Object.assign({}, state, {
        page: payload.page,
      });
    case CHANGE_SEARCH_WORD:
      return Object.assign({}, state, {
        newSearchValue: payload.newSearchValue,
      });
    case ADD_NEW_CARDS:
      return Object.assign({}, state, {
        page: payload.page,
        gamesCards: payload.gamesCards,
        count: payload.count,
        chosenGame: null,
        isLoaded: 'LOADED',
      });
    case CHOSE_GAME:
      return Object.assign({}, state, {
        chosenGame: payload.chosenGame,
      });
    case CHANGE_LOADING:
      return Object.assign({}, state, {
        isLoaded: payload.isLoaded,
      });
    default:
      return state;
  }
}
