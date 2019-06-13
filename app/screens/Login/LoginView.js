// @flow
import * as React from 'react'
import { type Theme } from 'react-native-paper'
import styles from './styles'
import { Keyboard, View } from 'react-native'
import { Button, LogoContainer, TextInput } from '../../components'
import { Formik } from 'formik'
import NavigationService from 'app/navigation/NavigationService'
import { useTranslation } from 'react-i18next'

type Props = {
  theme: Theme,
  onLogin: Function,
}

function LoginScreen(props: Props) {
  const userNameRef = React.createRef()
  const passwordRef = React.createRef()

  function onLoginPress() {
    props.onLogin('username', 'password')
  }

  const navigate = () => {
    NavigationService.navigate('CreateAccount')
  }
  const { t } = useTranslation()
  return (
    <View style={styles.contentContainer}>
      <LogoContainer />
      <Formik
        initialValues={{ firstName: 'Test', userName: '' }}
        onSubmit={(values) => {
          // Alert.alert(JSON.stringify(values, null, 2))
          Keyboard.dismiss()
          onLoginPress()
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.formContainer}>
            <TextInput
              onChangeText={handleChange('userName')}
              value={values.userName}
              label={t('user_name')}
              returnKeyType="next"
              ref={userNameRef}
              style={styles.inputContainerStyle}
              onSubmitEditing={(event) => {
                if (passwordRef.current) {
                  passwordRef.current.focus()
                }
              }}
            />
            <TextInput
              onChangeText={handleChange('password')}
              value={values.password}
              label={t('password')}
              returnKeyType="done"
              secureTextEntry={true}
              ref={passwordRef}
              style={styles.inputContainerStyle}
              onSubmitEditing={handleSubmit}
            />

            <Button onPress={handleSubmit} style={styles.loginButton}>
              Login
            </Button>
          </View>
        )}
      </Formik>
      <Button mode="outlined" onPress={navigate} style={styles.loginButton}>
        {t('new_account')}
      </Button>
      <Button mode="outlined" style={styles.loginButton}>
        Forgot Password?
      </Button>
    </View>
  )
}

export default LoginScreen
