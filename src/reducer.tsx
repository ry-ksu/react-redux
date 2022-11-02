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
        gamesCards: payload.gamesCards,
        ordering: payload.ordering,
        page: payload.page,
        page_size: payload.page_size,
        chosenGame: payload.chosenGame,
        isLoaded: payload.isLoaded,
      };
    case 'pick game':
      return {
        gamesCards: state.gamesCards,
        ordering: state.ordering,
        page: state.page,
        page_size: state.page_size,
        chosenGame: payload.chosenGame,
        isLoaded: payload.isLoaded,
      };
    case 'loading':
      return {
        gamesCards: payload.gamesCards,
        ordering: payload.ordering,
        page: payload.page,
        page_size: payload.page_size,
        chosenGame: payload.chosenGame,
        isLoaded: payload.isLoaded,
      };
    default:
      return state;
  }
}
