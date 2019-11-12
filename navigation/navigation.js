import React from 'react'
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import incidentOverview from "../components/Incidents/incidentOverview";
import Insights from "../components/Insights/Insights";
import TeamAlerts from "../components/TeamAlerts";
import Addhazard from "../components/hazard/AddHazard";
import CreateNewTeam from '../components/NewTeam/CreateNewTeam'
import CreateNewTeamDetails from '../components/NewTeam/CreateNewTeamDetails';
import More from '../components/More/More'
import YourTeam from '../components/More/YourTeam'
import IncidentSettings from '../components/More/IncidentSettings'
import SwitchTeam from '../components/More/SwitchTeam'
import HelpAndSupport from '../components/More/HelpAndSupport'
import Settings from '../components/More/Settings'
import NewHazardIsBeingAdded from '../components/hazard/NewHazardIsBeingAdded';
import NewHazardInformationDetails from '../components/hazard/newHazardInformationDetails';
import SideMenu from './customNavigation/SideMenu'
import Icon from 'react-native-vector-icons/FontAwesome';

// load the font befor calling it. 
Icon.loadFont();

const addingHazardStack = createStackNavigator({
  'add a new hazard': {screen: Addhazard},
  addingNewHazard: {
    screen: NewHazardIsBeingAdded,
    navigationOptions: {header: null}
  },
  newHazardInformationDetails: {
    screen: NewHazardInformationDetails,
    navigationOptions: {header: null}
  }
})

const createMoreStack = createStackNavigator({
  More: {screen: More},
  YourTeam: {
    screen: YourTeam,
    navigationOptions: {
      title: 'Your team'}
  },
  'Incident settings': {
    screen: IncidentSettings,
    navigationOptions: {title: 'Incident Settings'}
  },
  'Switch Team': {
    screen: SwitchTeam,
    navigationOptions: {title: 'Switch Team'}
  },
  'Help & support': {
    screen: HelpAndSupport,
    navigationOptions: {title: 'Help & support'}

  },'Settings': {
    screen: Settings,
    navigationOptions: {title: 'Settings'}
  }
})
const incidentStack = createStackNavigator({
  'incident Overview': {
    screen: incidentOverview,
    navigationOptions: {
      title: 'Pointbreak',
      headerLeft: () => 
      <TouchableOpacity onPress ={() => this.navigation.openDrawer()}><Image style={{marginLeft: 10}} source={require('../img/menu.png')}></Image></TouchableOpacity>}
  }
})
const InsightsStack = createStackNavigator({
  'Insights': {
    screen: Insights,
    navigationOptions: {
      title: 'Pointbreak', 
      headerLeft: () =>
      <View><Image style={{marginLeft: 10}} source={require('../img/menu.png')}></Image></View>}
  }
})
const TeamAlertsStack = createStackNavigator({
  'Team Alerts': {
    screen: TeamAlerts,
    navigationOptions: {
      title: 'Pointbreak', 
      headerLeft: ({navigation}) => 
      <View onPress={() => alert('i have been touched')}><Image style={{marginLeft: 10}} source={require('../img/menu.png')}></Image></View>}
  }
})

const AppNavigator = createBottomTabNavigator(
    {
      Incidents: {
        screen: incidentStack,
        navigationOptions: {
          tabBarIcon: () => (
            <Icon name='home' size={30} color='#900' />
          )
        }
      },
      Insights: {screen: InsightsStack},
      Plus: {screen: addingHazardStack},
      'Team alerts': {screen: TeamAlertsStack},
      More: {screen: createMoreStack}
    },
    {
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
    },
  }
);
const createNewTeamStack = createStackNavigator({
  createTeam: {screen: CreateNewTeam},
  createTeamDetails: {screen:CreateNewTeamDetails}
})

const Drawernavigator = createDrawerNavigator({
    Pointbreak: {screen: AppNavigator},
    '+ Create new team': {screen: createNewTeamStack}
});

const startingNavigation = createStackNavigator({
  startScreen: {
    screen: Drawernavigator,
    navigationOptions:{
      header: null
    }}
})
const AppContainer = createAppContainer(startingNavigation);

const mapStateToProps = (state) => {
  return {
      amountOfIncidents: state.AddIncidentIncrease.amountOfIncidents,
      modalVisible: state.changeVisibleState.modalVisible,
  }
}

export default connect(
  mapStateToProps,
  null,
  )(AppContainer)