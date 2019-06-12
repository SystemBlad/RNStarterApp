// @flow
import * as React from 'react'
import { type Theme, withTheme } from 'react-native-paper'
import styles from './styles'
import { Alert, Keyboard, View } from 'react-native'
import { Button, TextInput, LogoContainer } from '../../components'
import { Formik } from 'formik'
import NavigationService from 'app/navigation/NavigationService'

type Props = {
  theme: Theme,
  onLogin: Function,
}

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
          Create New Account
        </Button>
        <Button mode="outlined" style={styles.loginButton}>
          Forgot Password?
        </Button>
      </View>
    )
  }

  componentDidMount() {}

  componentWillUnmount() {}

  onLoginPress() {
    this.props.onLogin('username', 'password')
  }

  navigate = () => {
    NavigationService.navigate('CreateAccount')
  }
}

export default withTheme(LoginScreen)
