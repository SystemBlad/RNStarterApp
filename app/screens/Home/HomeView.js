// @flow
import React from 'react'
import { View, FlatList, Image, StyleSheet } from 'react-native'
import styles from './styles'
import { Button, Text } from '../../components'
type Props = {
  loggedUser: Object,
  requestGetProducts: Function,
  products: Object,
  isLoadingProducts: boolean,
}
function HomeView(props: Props) {
  const _keyExtractor = (item, index) => item.productId.toString()
  return (
    <View style={styles.contentContainer}>
      <Text>Welcome:</Text>
      <Text>{`${props.loggedUser.firstName}${' '}${props.loggedUser.lastName}`}</Text>
      <Button
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
          <View>
            <Text>{item.productName}</Text>
            <Image style={localStyles.stretch} source={{ uri: item.imageUrl }} />
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
          </View>
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
