// @flow
import React from 'react'
import HomeView from './HomeView'
import { connect } from 'react-redux'
import { MainContainer } from '../../components'
import { Appbar } from 'react-native-paper'
import styles from '../CreateAccount/styles'
import NavigationService from '../../navigation/NavigationService'
import { Transition } from 'react-navigation-fluid-transitions'
import { ScrollView } from 'react-native'
import * as productsActions from '../../actions/productsActions'

function HomeContainer(props: Object) {
  return (
    <MainContainer>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Transition appear="top">
          <Appbar.Header>
            <Appbar.Content title="Home Screen" />
            <Appbar.BackAction onPress={() => NavigationService.goBack(null)} />
          </Appbar.Header>
        </Transition>
        <Transition appear="right">
          <HomeView {...props} />
        </Transition>
      </ScrollView>
    </MainContainer>
  )
}

const mapStateToProps = (state) => ({
  loggedUser: state.loginReducer.loggedUser,
  // products: state.productsReducer.products,
  isLoadingProducts: state.loadingReducer.isLoadingProducts,
})

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (un, pwd) => dispatch(productsActions.requestGetProducts()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
