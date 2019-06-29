// @flow
import React from 'react'
import { View, FlatList, Image, StyleSheet } from 'react-native'
import styles from './styles'
import { Avatar, Card, Title, Paragraph } from 'react-native-paper'
import { Button, Text } from '../../components'

type Props = {
  loggedUser: Object,
  requestGetProducts: Function,
  products: Object,
  isLoadingProducts: boolean,
}

function HomeView(props: Props) {
  const _keyExtractor = (item) => (item.productId ? item.productId.toString() : '')
  return (
    <View style={styles.contentContainer}>
      <Button
        mode="outlined"
        loading={props.isLoadingProducts}
        onPress={() => {
          props.requestGetProducts()
        }}
        icon="add-a-photo"
      >
        Press me. To reload products
      </Button>
      <FlatList
        data={props.products}
        keyExtractor={_keyExtractor}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Cover source={{ uri: item.imageUrl }} />
            <Card.Title
              title={item.productName}
              subtitle={item.price}
              left={(props: any) => <Avatar.Icon {...props} icon="folder" />}
            />
            <Card.Content>
              <Paragraph>{item.description}</Paragraph>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  )
}

const localStyles = StyleSheet.create({
  stretch: {
    height: 200,
    width: '80%',
  },
})

export default HomeView
