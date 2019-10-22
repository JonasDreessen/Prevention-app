/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react";
import {
  StyleSheet,
  View,
} from "react-native";

import {createAppContainer, StackRouter } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import googleMapsImages from "./components/GoogleMapsImage";
import Insights from "./components/Insights";
import TeamAlerts from "./components/TeamAlerts";
import Addhazard from "./components/AddHazard";
import CreateNewTeam from './components/CreateNewTeam'
import More from './components/More'
import { createStore } from 'redux'
import counter from './redux/reducer/counter'
import { Provider } from 'react-redux';
import Newhazardscreen from './components/AddHazardComponents/NewHazardScreen'
import AddHazard from "./components/AddHazard";


const store = createStore(counter)


const AppNavigator = createBottomTabNavigator(
    {
      Insights: {screen: Insights},
      Incidents: {screen: googleMapsImages},
      Plus: {screen: Addhazard},
      'Team alerts': {screen: TeamAlerts},
      More: {screen: More}
    },
    {
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
    },
  }
  
);
const createNewTeamStack = createStackNavigator({
  createTeam: CreateNewTeam
})
const Drawernavigator = createDrawerNavigator(
  {
    Pointbreak: {screen: AppNavigator},
    '+ Create new team': createNewTeamStack
  }
);
const AppContainer = createAppContainer(Drawernavigator);


class App extends Component {
  render(){
    return (
    <Provider store={store}>
        <View style={styles.container}>
          <AppContainer counterState={this.state}/> 
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleText: {
    textAlign: 'center',
    fontSize: 22,
    color: 'red',
    flex: 1,
    justifyContent: 'space-around'
  }
})

export default App

