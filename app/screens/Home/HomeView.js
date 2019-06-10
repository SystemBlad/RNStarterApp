import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import Button from '../../components/Button'

class HomeView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button icon="add-a-photo">
          Press me
        </Button>
      </View>
    )
  }
}

export default HomeView
