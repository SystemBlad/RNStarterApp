// @flow
import * as React from 'react'
import { Text, type Theme, withTheme } from 'react-native-paper'
import styles from './styles'
import { Alert, Keyboard, KeyboardAvoidingView, View } from 'react-native'
import { Button, TextInput } from '../../components'
import { Formik } from 'formik'
import Icon from 'react-native-vector-icons/FontAwesome'

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
        <View style={styles.logoContainer}>
          <Icon name="rocket" size={80} color={this.props.theme.colors.primary} />
          <Text onPress={() => this.onLoginPress()} style={styles.logoText}>
            Company Logo
          </Text>
        </View>
        <KeyboardAvoidingView behavior="position">
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
        </KeyboardAvoidingView>
      </View>
    )
  }

  componentDidMount() {}

  componentWillUnmount() {}

  onLoginPress() {
    this.props.onLogin('username', 'password')
  }
}

export default withTheme(LoginScreen)
