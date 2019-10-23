import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import googleMapsImages from "../components/GoogleMapsImage";
import Insights from "../components/Insights/Insights";
import TeamAlerts from "../components/TeamAlerts";
import Addhazard from "../components/hazard/AddHazard";
import CreateNewTeam from '../components/CreateNewTeam'
import More from '../components/More'
import NewHazardScreen from '../components/NewHazardScreen';


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

const createNewTeamStack = createStackNavigator({createTeam: CreateNewTeam})
const Drawernavigator = createDrawerNavigator({

    Pointbreak: {screen: AppNavigator},
   '+ Create new team': createNewTeamStack

});
const AppContainer = createAppContainer(Drawernavigator);


export default AppContainer;