import { IFormData, IAction } from './types';

type IState = {
  userCards: IFormData[];
};

export function formState(state: IState, action: IAction) {
  const { type, payload } = action;
  switch (type) {
    case 'add':
      return { userCards: [...state.userCards, payload] };
    default:
      return state;
  }
}
