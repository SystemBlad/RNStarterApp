/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React, { Component } from 'react'
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Navigator from 'app/navigation'
import configureStore from 'app/store/configureStore'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import AppStyles from './config/styles'
import * as RNLocalize from 'react-native-localize'
import { displayLog } from './utils/helpers'

const { persistor, store } = configureStore()

const theme = {
  ...DefaultTheme,
  roundness: 5,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: AppStyles.colors.primary,
    // accent: AppStyles.colors.accent,
    background: AppStyles.colors.background,
    placeholder: AppStyles.colors.placeholder,
    text: AppStyles.colors.text,
    underlineColor: AppStyles.colors.underlineColor,
  },
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: AppStyles.colors.appBackgroundColor,
    height: getStatusBarHeight(true),
  },
})

export default class Entrypoint extends Component {
  componentDidMount() {
    displayLog('RNLocalize.getLocales', RNLocalize.getLocales())
    displayLog('RNLocalize.getCurrencies', RNLocalize.getCurrencies())
    displayLog('RNLocalize.getNumberFormatSettings', RNLocalize.getNumberFormatSettings())
    displayLog('RNLocalize.getCountry', RNLocalize.getCountry())
    displayLog('RNLocalize.getCalendar', RNLocalize.getCalendar())
    displayLog('RNLocalize.getTemperatureUnit', RNLocalize.getTemperatureUnit())
    displayLog('RNLocalize.getTimeZone', RNLocalize.getTimeZone())
    displayLog('RNLocalize.uses24HourClock', RNLocalize.uses24HourClock())
    displayLog('RNLocalize.usesMetricSystem', RNLocalize.usesMetricSystem())
    RNLocalize.addEventListener('change', this._handleLocalizationChange)
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this._handleLocalizationChange)
  }

  _handleLocalizationChange() {
    displayLog('RNLocalize.Change.getLocales', RNLocalize.getLocales())
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <PaperProvider theme={theme}>
            <View style={styles.statusBar}>
              <StatusBar barStyle="light-content" backgroundColor="#384862" />
            </View>
            <Navigator />
          </PaperProvider>
        </PersistGate>
      </Provider>
    )
  }
}
