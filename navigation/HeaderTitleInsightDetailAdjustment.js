import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux'

class HeaderTitleInsightDetailAdjustment extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.typeOfIncident, 'testing header')
    return(
        <View>
            <Text style={{fontSize: 20, fontWeight: '600', letterSpacing: 0.5}}>{this.props.typeOfIncident.incident}</Text>
        </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        location: state.addNewLocation,
        amountOfIncidents: state.AddIncidentIncrease,
        typeOfIncident: state.changeTypeOfIncidentForInsightDetailHeader

    }
  }
  
  export default connect(
    mapStateToProps,
    null,
    )(HeaderTitleInsightDetailAdjustment)
