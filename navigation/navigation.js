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

const AppNavigator = createBottomTabNavigator(
    {
      Incidents: {screen: incidentOverview},
      Insights: {screen: Insights},
      Plus: {screen: addingHazardStack},
      'Team alerts': {screen: TeamAlerts},
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


export default AppContainer;