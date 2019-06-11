import React, { Component } from 'react'
import LoginView from './LoginView'
import { connect } from 'react-redux'
import * as loginActions from 'app/actions/loginActions'
import { ScrollView, StyleSheet } from 'react-native';
import styles from './styles'
class LoginContainer extends Component {
  constructor(props) {
    super(props)
  }

  // render() {
  //   return <LoginView {...this.props} />
  // }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <LoginView {...this.props} />
      </ScrollView>
    );
  }

}

function mapStateToProps() {
  return {}
}
function mapDispatchToProps(dispatch) {
  return {
    onLogin: (un, pwd) => dispatch(loginActions.requestLogin(un, pwd)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
