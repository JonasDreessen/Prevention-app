import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux'
import {t} from 'react-native-tailwindcss'

class HeaderTitleInsightDetailAdjustment extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const selectedLocation = this.props.location.userLocation.map(clickedLocation => {
            if(clickedLocation.userId === this.props.navigation.state.params.userId){
               return  (
                <View style={[t.borderB, t.borderGray400, t.wFull, t.bgWhite, t.pX2,t.pT2, t.pB4]}>
                    <View>
                    <View style={[t.flexRow, t.justifyBetween, t.alignCenter, t.mT10, t.mB2, t.itemsCenter]}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('incident Overview')}>
                            <Image style={[t.h6, t.w6, t.objectContain]} source={require('../../img/left-arrow.png')}></Image>
                        </TouchableOpacity>
                        <View style={[t.bgGreen600, t.roundedFull, t.p1, t.mL16]}>
                            <Text style={[t.textBase, t.fontMedium, t.textWhite,]}>JD</Text>
                        </View>
                        <View style={[t.flexRow]}>
                            <Image style={[t.h4, t.objectContain]} source={require('../../img/file.png')}></Image>
                            <Image style={[t.h4, t.objectContain]} source={require('../../img/menu-vertical.png')}></Image>
                        </View>
                    </View>        
                            <Text style={[t.fontSemibold, t.textLg, t.mB4]}>{this.props.typeOfIncident.incident} at {"\n"}{clickedLocation.city}</Text>
                            <View style={[t.bgGray200, t.selfCenter, t.mRAuto, t.pX1, t.rounded]}>
                                <Text style={[t.fontSemibold, t.textSm]}>{this.props.typeOfIncident.incident}</Text>
                            </View>
                    </View>
               </View>
               )
            }
        })
    return(
        <View>
            {selectedLocation}
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
