import { createStackNavigator, createAppContainer } from 'react-navigation'
import AppStyles from '../Config/styles'
import Login from 'app/screens/Login'
import CreateAccount from 'app/screens/CreateAccount'
import Home from 'app/screens/Home'

const RNApp = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: { header: null, gesturesEnabled: false },
    },
    CreateAccount: {
      screen: CreateAccount,
      navigationOptions: { header: null, gesturesEnabled: false },
    },
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'Login',
    cardStyle: { backgroundColor: AppStyles.colors.appBackgroundColor },
  }
)

export default createAppContainer(RNApp)
