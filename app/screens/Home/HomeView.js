// @flow
import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import Button from '../../components/Button'
type Props = {
  loggedUser: Object,
}
function HomeView(props: Props) {
  return (
    <View style={styles.contentContainer}>
      <Text>Welcome:</Text>
      <Text>{`${props.loggedUser.firstName}${' '}${props.loggedUser.lastName}`}</Text>
      <Button icon="add-a-photo">Press me</Button>
    </View>
  )
}

export default HomeView
