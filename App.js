/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  Text
} from 'react-native';
import Main from './Main';
import store from './src/services/store.jsx'
import { Provider } from 'react-redux'

const App = () => {

  return (
    <SafeAreaView >
      <Provider store={store}>
        <Main />
      </Provider>
    </SafeAreaView>
  );
};


export default App;
