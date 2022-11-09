import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState, IFormData } from 'types';

const userInitialState: IUserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState: userInitialState,
  reducers: {
    addUser(state, action: PayloadAction<IFormData>) {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
