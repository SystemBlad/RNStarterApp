// @flow
import * as React from 'react'
import { type Theme, withTheme } from 'react-native-paper'
import styles from './styles'
import { Alert, Keyboard, Linking, View } from 'react-native'
import { Button, LogoContainer, TextInput } from '../../components'
import { Formik } from 'formik'
import NavigationService from 'app/navigation/NavigationService'
import { displayLog } from '../../utils/helpers'
import i18n from 'i18next'
import en from '../../assets/locales/en'

type Props = {
  theme: Theme,
  onLogin: Function,
}

const resources = {
  en: en,
  sv: {
    translation: {
      hello: 'Hej världen',
      new_account: '----',
    },
  },
}

i18n.init({
  resources,
  lng: 'en',
})

class LoginScreen extends React.Component<Props> {
  userNameRef = React.createRef()
  passwordRef = React.createRef()

  render() {
    return (
      <View style={styles.contentContainer}>
        <LogoContainer />
        <Formik
          initialValues={{ firstName: 'Test', userName: '' }}
          onSubmit={(values) => {
            Alert.alert(JSON.stringify(values, null, 2))
            Keyboard.dismiss()
            this.onLoginPress()
          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <View style={styles.formContainer}>
              <TextInput
                onChangeText={handleChange('userName')}
                value={values.userName}
                label="User Name"
                returnKeyType="next"
                ref={this.userNameRef}
                style={styles.inputContainerStyle}
                onSubmitEditing={(event) => {
                  this.passwordRef.current.focus()
                }}
              />
              <TextInput
                onChangeText={handleChange('password')}
                value={values.password}
                label="Password"
                returnKeyType="done"
                secureTextEntry={true}
                ref={this.passwordRef}
                style={styles.inputContainerStyle}
                onSubmitEditing={handleSubmit}
              />

              <Button onPress={handleSubmit} style={styles.loginButton}>
                Login
              </Button>
            </View>
          )}
        </Formik>
        <Button mode="outlined" onPress={this.navigate} style={styles.loginButton}>
          {i18n.t('new_account')}
        </Button>
        <Button mode="outlined" style={styles.loginButton}>
          Forgot Password?
        </Button>
        <Button mode="outlined" style={styles.loginButton} onPress={this.goToURL}>
          Facebook
        </Button>
      </View>
    )
  }

  componentDidMount() {}

  componentWillUnmount() {}

  onLoginPress() {
    // this.props.onLogin('username', 'password')

    i18n.changeLanguage(i18n.language === 'sv' ? 'en' : 'sv')
  }

  navigate = () => {
    NavigationService.navigate('CreateAccount')
  }

  goToURL = () => {
    // let url = 'https://www.facebook.com/elcomerciocom'
    // let url = 'https://www.youtube.com/user/TecnonautaTV'
    // let url = 'https://www.instagram.com/natgeo/?hl=en'
    let url = 'https://dearmoon.earth/'
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          displayLog("Can't handle url: ", url)
        } else {
          return Linking.openURL(url)
        }
      })
      .catch((err) => displayLog('An error occurred', err))
  }
}

export default withTheme(LoginScreen)
