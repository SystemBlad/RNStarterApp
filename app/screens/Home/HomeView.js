// @flow
import React, { useEffect } from 'react'
import { View, FlatList } from 'react-native'
import styles from './styles'
import { Button, Text } from '../../components'
// import { displayLog } from '../../utils/helpers'
type Props = {
  loggedUser: Object,
  requestGetProducts: Function,
  products: Object,
  isLoadingProducts: boolean,
}
function HomeView(props: Props) {
  useEffect(() => {
    // displayLog('useEffect')
    // props.requestGetProducts()
  })
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
        Press me. To load products
      </Button>
      <FlatList data={props.products} renderItem={({ item }) => <Text>{item.name}</Text>} />
    </View>
  )
}

export default HomeView
