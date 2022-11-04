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
export function searchState(state: IGameState, action: ISearchAction) {
  const { type, payload } = action;
  switch (type) {
    case 'search':
      return {
        newSearchValue: payload.newSearchValue,
        oldSearchValue: payload.oldSearchValue,
        gamesCards: payload.gamesCards,
        ordering: payload.ordering,
        page: payload.page,
        pageSize: payload.pageSize,
        count: payload.count,
        chosenGame: payload.chosenGame,
        isLoaded: payload.isLoaded,
      };
    case 'pick game':
      return {
        newSearchValue: payload.newSearchValue,
        oldSearchValue: payload.oldSearchValue,
        gamesCards: state.gamesCards,
        ordering: state.ordering,
        page: state.page,
        pageSize: state.pageSize,
        count: payload.count,
        chosenGame: payload.chosenGame,
        isLoaded: payload.isLoaded,
      };
    case 'loading':
      return {
        newSearchValue: payload.newSearchValue,
        oldSearchValue: payload.oldSearchValue,
        gamesCards: payload.gamesCards,
        ordering: payload.ordering,
        page: payload.page,
        pageSize: payload.pageSize,
        count: payload.count,
        chosenGame: payload.chosenGame,
        isLoaded: payload.isLoaded,
      };
    default:
      return state;
  }
}
