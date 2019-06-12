// @flow
import * as React from 'react'
import { type Theme, withTheme } from 'react-native-paper'
import styles from './styles'
import { Alert, Keyboard, View } from 'react-native'
import { Button, LogoContainer, TextInput } from '../../components'
import { Formik } from 'formik'

type Props = {
  theme: Theme,
  onLogin: Function,
}

class CreateAccountView extends React.Component<Props> {
  userNameRef = React.createRef()
  passwordRef = React.createRef()

  render() {
    return (
      <View style={styles.contentContainer}>
        <LogoContainer />
        <Formik
          initialValues={{ userName: 'Test', password: '', repeatPassword: '' }}
          onSubmit={(values) => {
            Alert.alert(JSON.stringify(values, null, 2))
            Keyboard.dismiss()
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

              <TextInput
                onChangeText={handleChange('repeatPassword')}
                value={values.repeatPassword}
                label="repeatPassword"
                returnKeyType="done"
                secureTextEntry={true}
                ref={this.repeatPasswordRef}
                style={styles.inputContainerStyle}
                onSubmitEditing={handleSubmit}
              />
              <Button onPress={handleSubmit} style={styles.loginButton}>
                Create Account
              </Button>
            </View>
          )}
        </Formik>
      </View>
    )
  }

  componentDidMount() {}

  componentWillUnmount() {}

}

export default withTheme(CreateAccountView)
