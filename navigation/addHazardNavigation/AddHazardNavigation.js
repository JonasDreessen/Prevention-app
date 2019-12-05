import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import ModalHazard from '../customNavigation/ModalHazard'
import NewHazardIsBeingAdded from '../../components/hazard/NewHazardIsBeingAdded'
import NewHazardInformationDetails from '../../components/hazard/newHazardInformationDetails'
import NewHazardInformationDetailsHeader from '../Headers/newHazardInformationDetailsHeader'

const AddHazardNavigation = createStackNavigator({
    'add a new hazard': {screen: ModalHazard},
    addingNewHazard: {
      screen: NewHazardIsBeingAdded,
      navigationOptions: {header: null, tabBarVisible: false}
    },
    newHazardInformationDetails: {
      screen: NewHazardInformationDetails,
      navigationOptions: ({navigation}) => ({
        header:(
       <NewHazardInformationDetailsHeader navigation={navigation}/>
      )
      })
    }
  })
  

  export default AddHazardNavigation