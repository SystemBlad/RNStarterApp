// @flow
import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import { Button, Text } from '../../components'
type Props = {
  loggedUser: Object,
}
function HomeView(props: Props) {
  return (
    <View style={styles.contentContainer}>
      <Text>Welcome:</Text>
      <Text>{`${props.loggedUser.firstName}${' '}${props.loggedUser.lastName}`}</Text>
      <Button icon="add-a-photo">Press me. To take a picture of you</Button>
    </View>
  )
}

export default HomeView
