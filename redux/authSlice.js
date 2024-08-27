import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    users: [],
  },
  reducers: {
    register: (state, action) => {
      state.users.push(action.payload);
      AsyncStorage.setItem('users', JSON.stringify(state.users));
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      const foundUser = state.users.find(
        (user) => user.email === email && user.password === password
      );
      if (foundUser) {
        state.isLoggedIn = true;
        state.user = foundUser;
      } else {
        state.isLoggedIn = false;
        state.user = null;
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    loadUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { register, login, logout, loadUsers } = authSlice.actions;

export const loadUsersFromStorage = () => async (dispatch) => {
  try {
    const users = await AsyncStorage.getItem('users');
    if (users) {
      dispatch(loadUsers(JSON.parse(users)));
    }
  } catch (error) {
    console.error('Failed to load users from storage:', error);
  }
};

export default authSlice.reducer;
