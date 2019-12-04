import React from 'react'
import {View, Image, TouchableOpacity, Text} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import incidentOverview from '../../components/Incidents/incidentOverview'
import InsightDetailAdjustment from '../../components/Insights/InsightDetailAdjustment'
import HeaderTitleInsightDetailAdjustment from '../Headers/HeaderTitleInsightDetailAdjustment'

const AddIncidentNavigation = createStackNavigator({
    'incident Overview': {
      screen: incidentOverview,
      navigationOptions: ({navigation}) => ({
        title: 'Pointbreak',
        headerLeft: ( 
        <TouchableOpacity onPress ={() => navigation.openDrawer()}>
          <Image style={{marginLeft: 10}} source={require('../../img/menu.png')}></Image>
        </TouchableOpacity>
        )
      })
    },
    'insight detail adjustment': {
        screen: InsightDetailAdjustment,
        navigationOptions: ({navigation}) => ({
            header: (
              <HeaderTitleInsightDetailAdjustment navigation={navigation}/>
            ),
            bottomTabs: {
              visible: false
            }
        })
    }
  })

  export default AddIncidentNavigation