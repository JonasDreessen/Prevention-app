import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import {View, Image, TouchableOpacity, Text} from 'react-native';
import More from '../../components/More/More'
import YourTeam from '../../components/More/YourTeam'
import IncidentSettings from '../../components/More/IncidentSettings'
import SwitchTeam from '../../components/More/YourTeam'
import HelpAndSupport from '../../components/More/Help-and-support/HelpAndSupport'
import Settings from '../../components/More/Settings'


const AddMoreNavigation = createStackNavigator({
    More: {
      screen: More,
      navigationOptions: ({navigation}) => ({
        title: null,
        headerLeft: ( 
        <TouchableOpacity onPress ={() => navigation.openDrawer()}>
          <Image style={{marginLeft: 10}} source={require('../../img/menu.png')}></Image>
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

  export default AddMoreNavigation