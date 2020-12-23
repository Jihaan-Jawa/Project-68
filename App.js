import * as React from 'react';
import { View } from 'react-native';
import InstagramScreen from './Screens/in'
import FacebookScreen from './Screens/fb'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AppHeader from './AppHeader'
export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createBottomTabNavigator({
Instagram:{screen:InstagramScreen},
Facebook:{screen:FacebookScreen}
})

const AppContainer = createAppContainer(AppNavigator)