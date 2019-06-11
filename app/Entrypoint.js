/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React, { Component } from 'react'
import { ActivityIndicator, StatusBar, View } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import Navigator from 'app/navigation'
import configureStore from 'app/store/configureStore'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const { persistor, store } = configureStore()

const theme = {
  ...DefaultTheme,
  roundness: 5,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0aa4b7',
    accent: 'tomato',
    background: 'transparent',
    placeholder: '#8a98a8',
    text: '#aebed3',
  },
}

export default class Entrypoint extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <PaperProvider theme={theme}>
            <View
              style={{
                backgroundColor: '#384862',
                height: getStatusBarHeight(true),
              }}
            >
              <StatusBar barStyle="light-content" backgroundColor="#384862" />
            </View>
            <Navigator />
          </PaperProvider>
        </PersistGate>
      </Provider>
    )
  }
}
