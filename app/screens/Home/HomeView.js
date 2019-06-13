import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import Button from '../../components/Button'

function HomeView() {
  return (
    <View style={styles.contentContainer}>
      <Text>Home</Text>
      <Button icon="add-a-photo">Press me</Button>
    </View>
  )
}

export default HomeView
