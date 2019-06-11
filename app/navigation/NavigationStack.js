import { createStackNavigator, createAppContainer } from 'react-navigation'

import Login from 'app/screens/Login'
import Home from 'app/screens/Home'

const RNApp = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: { header: null, gesturesEnabled: false },
    },
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'Login',
    cardStyle: { backgroundColor: '#384862' },
  }
)

export default createAppContainer(RNApp)
