import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Loading from './src/screens/Loading';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Messaging from './src/screens/Messaging';

const App = createSwitchNavigator(
  {
    Loading: Loading,
    Home: Home,
    SignUp: SignUp,
    Login: Login,
    Messaging: Messaging,
  },
  {
    initialRouteName: 'Messaging',
  },
);

export default createAppContainer(App);
