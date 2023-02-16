import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import store, {persistor} from './redux/store';
import MainScreen from './screens/MainScreen';

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <MainScreen/>
      </PersistGate>
    </Provider>
  );

};

export default App;
