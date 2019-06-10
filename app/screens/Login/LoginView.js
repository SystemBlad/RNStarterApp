import React, { Component } from 'react'

import styles from './styles'
import {
  Keyboard,
  Text,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native'
import { Button, TextInput } from '../../components'

export default class LoginScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text onPress={() => this.onLoginPress()} style={styles.logoText}>
                SystemBlad
              </Text>
              <TextInput
                placeholder="Username"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
              />
              <TextInput
                placeholder="Password"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
              />
              <Button buttonStyle={styles.loginButton} onPress={() => this.onLoginPress()}>
                Login
              </Button>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }

  componentDidMount() {
  }

  componentWillUnmount() {}

  onLoginPress() {
    this.props.onLogin('username', 'password')
  }
}
