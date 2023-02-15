import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { COINMARKETCAP_API } from 'react-native-dotenv';
import store, { persistor } from './redux/store';
import MainScreen from './screens/MainScreen';

const App = () => {

  console.log(COINMARKETCAP_API, 'sdfsdfasfd');

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <MainScreen/>
      </PersistGate>
    </Provider>
  );

};

export default App;
