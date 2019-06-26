import React from 'react';
import {Icon} from 'native-base';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import Login from './Screens/Login';
import Signup from './Screens/Signup';

const Tabs = createBottomTabNavigator({
  Login : {
    screen : Login,
    navigationOptions:{
      tabBarLabel:'Login',
      tabBarIcon:
      <Icon name="md-person" size={24}/>
    }
  },
  Signup : {screen : Signup,
  navigationOptions:{
    tabBarLabel:'Sign Up',
    tabBarIcon:<Icon name="log-in" size={24}></Icon>
  }}
},
{
  tabBarOptions:{
    activeBackgroundColor:'#ecf0f1',
    labelStyle:{
      color:'black',
      fontSize:14,
      fontWeight:'bold'
    },
    style:{
      backgroundColor:'#fff'
    },
    inactiveTintColor:'blue',
    keyboardHidesTabBar: true
  }
})

const App = createAppContainer(Tabs)
export default App;