/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import Navigator from 'app/navigation'
import configureStore from 'app/store/configureStore'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

const { persistor, store } = configureStore()

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0BB7CD',
    accent: 'tomato',
  },
}

export default class Entrypoint extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <PaperProvider theme={theme}>
            <Navigator />
          </PaperProvider>
        </PersistGate>
      </Provider>
    )
  }
}
