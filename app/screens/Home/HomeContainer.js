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

function mapStateToProps() {
  return {}
}

function mapDispatchToProps() {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
