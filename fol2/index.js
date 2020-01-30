import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import App from './src/App';

class Nuland extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Nuland02', () => Nuland);