import { createStackNavigator, createAppContainer } from 'react-navigation'

import Login from 'app/screens/Login'
import Home from 'app/screens/Home'

const RNApp = createStackNavigator(
  {
    Login: {
      screen: Login,
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
