// redux/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  name: '',
  lastName: '',
  phoneNumber: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setLastName(state, action) {
      state.lastName = action.payload;
    },
    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    resetForm(state) {
      Object.assign(state, initialState);
    },
  },
});

export const { setEmail, setPassword, setName, setLastName, setPhoneNumber, resetForm } = formSlice.actions;
export default formSlice.reducer;
