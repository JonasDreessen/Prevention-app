import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux'

class HeaderTitleInsightDetailAdjustment extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.location, 'testing header')
    return(
        <View>
            <Text style={{fontSize: 20, fontWeight: '600', letterSpacing: 0.5}}>{this.props.amountOfIncidents.typeOfIncident}</Text>
        </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        location: state.addNewLocation,
        amountOfIncidents: state.AddIncidentIncrease,

    }
  }
  
  export default connect(
    mapStateToProps,
    null,
    )(HeaderTitleInsightDetailAdjustment)
