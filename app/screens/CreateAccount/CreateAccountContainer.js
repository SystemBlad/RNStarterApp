import React, { Component } from 'react'
import CreateAccountView from './CreateAccountView'
import { connect } from 'react-redux'
import * as loginActions from 'app/actions/loginActions'
import { ScrollView } from 'react-native'
import { MainContainer } from '../../components'
import styles from './styles'

class LoginContainer extends Component {
  render() {
    return (
      <MainContainer>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <CreateAccountView {...this.props} />
        </ScrollView>
      </MainContainer>
    )
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
