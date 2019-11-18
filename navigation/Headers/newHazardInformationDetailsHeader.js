import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'
import {t} from 'react-native-tailwindcss'

class NewHazardInformationDetailsHeader extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const arraylength = this.props.location.userLocation.length - 1
        let city = this.props.location.userLocation[arraylength].city
        console.log(this.props.navigation)
    return(
        <View style={[t.borderB, t.wFull, t.bgWhite, t.pX2, t.pB4, t.borderGray400]}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('incident Overview')}>
            <Image style={[t.h6, t.w6, t.objectContain, t.mT10, t.mB2]}source={require('../../img/left-arrow.png')}></Image>
        </TouchableOpacity>
            <Text style={[t.textXl, t.fontSemibold, t.mB2, t.trackingWide, t.mB4]}>{this.props.incidentType.typeOfIncident} at {city}</Text>
            <View style={[t.bgGray300, t.selfStart, t.pX1, t.rounded]}>
                <Text style={[t.textSm, t.fontMedium]}>{this.props.incidentType.typeOfIncident}</Text>
            </View>
        </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        location: state.addNewLocation,
        incidentType: state.AddIncidentIncrease
    }
}
  
export default connect(
    mapStateToProps,
    null,
    )(NewHazardInformationDetailsHeader)
