/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {persistor, store} from './src/app/store';
import { PersistGate } from 'redux-persist/integration/react';

const ReduxApp = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
