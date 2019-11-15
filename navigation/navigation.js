import React from 'react'
import PropTypes from 'prop-types'
import {View, Image, TouchableOpacity, Text} from 'react-native';
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
import HelpAndSupport from '../components/More/Help-and-support/HelpAndSupport'
import Settings from '../components/More/Settings'
import NewHazardIsBeingAdded from '../components/hazard/NewHazardIsBeingAdded';
import NewHazardInformationDetails from '../components/hazard/newHazardInformationDetails';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InsightDetailAdjustment from '../components/Insights/InsightDetailAdjustment'
import HeaderTitleInsightDetailAdjustment from './HeaderTitleInsightDetailAdjustment'

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
  More: {
    screen: More,
    navigationOptions: ({navigation}) => ({
      title: null,
      headerLeft: ( 
      <TouchableOpacity onPress ={() => navigation.openDrawer()}>
        <Image style={{marginLeft: 10}} source={require('../img/menu.png')}></Image>
      </TouchableOpacity>
      ),
    })
  },
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
  },
  
})
const incidentStack = createStackNavigator({
  'incident Overview': {
    screen: incidentOverview,
    navigationOptions: ({navigation}) => ({
      title: 'Pointbreak',
      headerLeft: ( 
      <TouchableOpacity onPress ={() => navigation.openDrawer()}>
        <Image style={{marginLeft: 10}} source={require('../img/menu.png')}></Image>
      </TouchableOpacity>
      )
    })
  },
  'insight detail adjustment': {
      screen: InsightDetailAdjustment,
      navigationOptions: () => ({
          headerTitle: (
            <HeaderTitleInsightDetailAdjustment />
          )
      })
  }
})
// class Details extends React.Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//     console.log(this.props.amountOfIncidents, 'testing')
//     return(
//       <Text>{this.props.amountOfIncidents}</Text>
//     )
//   }
// }
incidentStack.PropTypes = {
  amountOfIncidents: PropTypes.object,
}

const InsightsStack = createStackNavigator({
  'Insights': {
    screen: Insights,
    navigationOptions: ({navigation}) => ({
      title: 'Pointbreak',
      headerLeft: ( 
      <TouchableOpacity onPress ={() => navigation.openDrawer()}>
        <Image style={{marginLeft: 10}} source={require('../img/menu.png')}></Image>
      </TouchableOpacity>
      )
    })
  },
})
const TeamAlertsStack = createStackNavigator({
  'Team Alerts': {
    screen: TeamAlerts,
    navigationOptions: ({navigation}) => ({
      title: 'Pointbreak',
      headerLeft: ( 
      <TouchableOpacity onPress ={() => navigation.openDrawer()}>
        <Image style={{marginLeft: 10}} source={require('../img/menu.png')}></Image>
      </TouchableOpacity>
      )
    })
  }
})

const AppNavigator = createBottomTabNavigator(
    {
      Incidents: {
        screen: incidentStack,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name='bullhorn-outline' size={30} color={tintColor}/>
          )
        }
      },
      Insights: {
        screen: InsightsStack,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name='chart-line-variant' size={30} color={tintColor}/>
          ),
        }
      },
      Plus: {
        screen: addingHazardStack,
        navigationOptions: ({navigation}) => ({
          tabBarLabel: ' ',
          tabBarIcon: () => (
            <View style={{zIndex: 10000, position: 'absolute', top: -20}}>
              <Icon name='plus-circle' size={60} color='#6ab865'onPress={() => navigation.navigate('add a new hazard')}/>
            </View>
          ),
        })
      },
      'Team alerts': {
        screen: TeamAlertsStack,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name='bell-outline' size={30} color={tintColor}/>
          )
        }
      },
      More: {
        screen: createMoreStack,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
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