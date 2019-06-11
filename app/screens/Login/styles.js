const React = require('react-native')

const { StyleSheet } = React

export default {
  containerView: {
    flex: 1,
    verticalAlign: 'center',
    justifyContent: 'center',
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 80,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    margin: 20,
    padding: 20,
  },
  loginFormTextInput: {
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  loginChild: {
    margin: 5,
  },
  loginButton: {
    marginTop: 20,
    height: 45,
  },

  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    // flex: 0,
  },
  container: {
    flex: 1,
    paddingBottom: 40,
  },
  formContainer: {
    width: 300,
  },

  inputContainerStyle: {
    margin: 3,
  },
}
