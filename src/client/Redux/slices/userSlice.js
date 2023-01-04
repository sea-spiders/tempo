import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPicture: (state, action) => {
      state.picture = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEmail, setPicture } = userSlice.actions;

export default userSlice.reducer;
