//app.js

import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import FloatingActionButton from './components/FloatingActionButton';
import LoginScreen from './components/LoginScreen';
import { name as appName } from './app.json';
import Toast from 'react-native-toast-message';

const AppContent = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? <FloatingActionButton /> : <LoginScreen />}
    </View>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => App);

export default App;




