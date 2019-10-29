import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  })
);
