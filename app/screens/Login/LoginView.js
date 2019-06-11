import React, { Component } from 'react'

import styles from './styles'
import { Alert, Keyboard, KeyboardAvoidingView, Text, View } from 'react-native'
import { Button, TextInput } from '../../components'
import { Formik } from 'formik'

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.contentContainer}>
        <KeyboardAvoidingView contentContainerStyle={styles.loginContainer} behavior="position">
          <Text onPress={() => this.onLoginPress()} style={styles.logoText}>
            Company Logo
          </Text>
          <Formik
            initialValues={{ firstName: 'Test', Password: '' }}
            onSubmit={(values) => {
              Alert.alert(JSON.stringify(values, null, 2))
              Keyboard.dismiss()
              this.onLoginPress()
            }}
          >
            {({ handleChange, handleSubmit, values }) => (
              <View style={styles.formContainer}>
                <TextInput
                  onChangeText={handleChange('firstName')}
                  value={values.firstName}
                  label="Username"
                  placeholder="Username!"
                  style={styles.inputContainerStyle}
                />
                <TextInput
                  onChangeText={handleChange('Password')}
                  value={values.firstName}
                  label="Password"
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
