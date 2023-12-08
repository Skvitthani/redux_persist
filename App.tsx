import React from 'react';
import {Provider} from 'react-redux';
import {persistor, Store} from './src/redux/store/Store';
import StackNavigate from './src/navigation/StackNavigate';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <StackNavigate />
      </PersistGate>
    </Provider>
  );
};

export default App;
