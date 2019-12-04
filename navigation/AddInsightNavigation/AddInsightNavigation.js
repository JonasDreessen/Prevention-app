import React from 'react'
import {View, Image, TouchableOpacity, Text} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import Insights from '../../components/Insights/Insights'

const AddInsightNavigation = createStackNavigator({
    'Insights': {
      screen: Insights,
      navigationOptions: ({navigation}) => ({
        title: 'Pointbreak',
        headerLeft: ( 
        <TouchableOpacity onPress ={() => navigation.openDrawer()}>
          <Image style={{marginLeft: 10}} source={require('../../img/menu.png')}></Image>
        </TouchableOpacity>
        )
      })
    },
  })

  export default AddInsightNavigation