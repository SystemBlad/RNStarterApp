// @flow
import React, { Component } from 'react'
import { Text, withTheme, type Theme } from 'react-native-paper'
import styles from './styles'
import { Alert, Keyboard, KeyboardAvoidingView, View } from 'react-native'
import { Button, TextInput } from '../../components'
import { Formik } from 'formik'
import Icon from 'react-native-vector-icons/FontAwesome'

type Props = {
  theme: Theme,
  onLogin: Function,
}

class LoginScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.contentContainer}>
        <View
          style={styles.logoContainer}
        >
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
                  label="Username"
                  placeholder="Username!"
                  style={styles.inputContainerStyle}
                />
                <TextInput
                  onChangeText={handleChange('password')}
                  value={values.password}
                  label="Password"
                  secureTextEntry={true}
                  placeholder="Password"
                  style={styles.inputContainerStyle}
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
