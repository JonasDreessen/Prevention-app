import React from 'react'
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {t} from 'react-native-tailwindcss'
import { connect } from 'react-redux'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import TeamAlerts from "../components/TeamAlerts";
import CreateNewTeam from '../components/NewTeam/CreateNewTeam'
import CreateNewTeamDetails from '../components/NewTeam/CreateNewTeamDetails';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginFirstScreen from './loginscreens/LoginFirstScreen'
import LoginSecondScreen from './loginscreens/LoginSecondScreen'
import LoginThirdScreen from './loginscreens/LoginThirdScreen'
import LoginFourthScreen from './loginscreens/LoginFourthScreen'
import RegistrationScreen from './registration/registration'
import LoginScreen from './loginscreens/LoginScreen'
import AuthLoadingScreen from './AuthLoadingScreen'
import AddHazardNavigation from './addHazardNavigation/AddHazardNavigation'
import AddMoreNavigation from './addMoreNavigation/addMoreNavigation' 
import AddIncidentNavigation from './AddIncidentNavigation/AddIncidentNavigation'
import AddInsightNavigation from './AddInsightNavigation/AddInsightNavigation'
import AddTeamAlertNavigation from './AddTeamAlertNavigation/AddTeamAlertNavigation'
// load the font befor calling it. 
Icon.loadFont();
// hazard adding flow
const addingHazardStack = AddHazardNavigation
// More flow
const createMoreStack = AddMoreNavigation
// Incident flow
const incidentStack = AddIncidentNavigation
// this hides the bottom tabs inside the incidents detail adjustment stack
incidentStack.navigationOptions = ({ navigation }) => {
  // hides tabNavigation starting from 2 screen deep in news Stack
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

// Insight flow
const InsightsStack = AddInsightNavigation
// TeamAlert flow
const TeamAlertsStack = AddTeamAlertNavigation


const AppNavigator = createBottomTabNavigator(
    {
      Insights: {screen: InsightsStack, navigationOptions: {tabBarIcon: ({tintColor}) => (
            <Icon name='chart-line-variant' size={30} color={tintColor}/>
          ),
        }
      },
      Incidents: {screen: incidentStack, navigationOptions: ({navigation}) => ({
          tabBarIcon: ({tintColor}) => (
            <Icon name='bullhorn-outline' size={30} color={tintColor}/>
          ),
        })
      },
      Plus: {screen: addingHazardStack, navigationOptions: ({navigation}) => ({
          tabBarLabel: ' ',
          tabBarIcon: () => (
            <View style={{zIndex: 10000, position: 'absolute', top: -20}}>
              <Icon name='plus-circle' size={60} color='#6ab865'onPress={() => navigation.navigate('add a new hazard')}/>
            </View>
          ),
        })
      },
      'Team alerts': {screen: TeamAlertsStack, navigationOptions: { tabBarIcon: ({tintColor}) => (
            <Icon name='bell-outline' size={30} color={tintColor}/>
          ),
        }
      },
      More: {screen: createMoreStack, navigationOptions: {tabBarIcon: ({tintColor}) => (
            <Icon name='dots-horizontal' size={30} color={tintColor}/>
          )
        }
      }
    },
    {
    tabBarOptions: {
      activeTintColor: '#6ab865',
      inactiveTintColor: 'gray',
      style: {
        height: 60,
        paddingTop: 5
      }
    },
  },
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
const loginSecondPhase = createStackNavigator({
  insertNumber: {
    screen: LoginFourthScreen,
    navigationOptions:
    {
      header: null
    }
},goToApp: {
  screen: startingNavigation,
  navigationOptions:
  {
    header: null
  }
}
},{
  
})

const loginNavigation = createMaterialTopTabNavigator({
  firstLogin: LoginScreen,
  secondLogin: LoginSecondScreen,
  thirdLogin: LoginThirdScreen, 
  fourthLogin: {screen: loginSecondPhase},
},{
    swipeEnabled: true,
    tabBarOptions: {
      style: {display: "none"}
    }
  })

const loginVSregistration = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Register: RegistrationScreen,
  Login: loginNavigation,
},{
  initialRouteName: 'AuthLoading'
})


const AppContainer = createAppContainer(loginVSregistration)
const mapStateToProps = (state) => {
  return {
      amountOfIncidents: state.AddIncidentIncrease.amountOfIncidents,
      modalVisible: state.changeVisibleState.modalVisible,
      loginStatus: state.addLoginVSregister
  }
}

export default connect(
  mapStateToProps,
  null,
  )(AppContainer)