import React, { Component } from 'react'
import CreateAccountView from './CreateAccountView'
import { connect } from 'react-redux'
import * as loginActions from 'app/actions/loginActions'
import { ScrollView } from 'react-native'
import { MainContainer } from '../../components'
import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions'
import styles from './styles'

class LoginContainer extends Component {
  render() {
    return (
      <MainContainer>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <Transition appear='right' Disappear='flip'>
          <CreateAccountView {...this.props} />
          </Transition>
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
