import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Button} from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps'
import RNPickerSelect from 'react-native-picker-select'
import { SevertyIncreaser } from '../../redux/actions/SevertyIncreaser';
import { ChangeIncident } from '../../redux/actions/typeOfIncidentForInsightDetailHeader'
import {t} from 'react-native-tailwindcss'

class InsightDetailAdjustment extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedValue: ''
        }
    }
    render(){
        const extreme = 'extreme'
        const high = 'high'
        const medium = 'medium'
        const low = 'low'
        const trivial = 'trivial'
        const selectedLocation = this.props.location.userLocation.map(clickedLocation => {
            if(clickedLocation.userId === this.props.navigation.state.params.userId){
                var payload = this.props.navigation.state.params.typeOfHazard
                this.props.ChangeIncident(payload)
                return(
                <View>
                    <View style={[t.borderT, t.mY8, t.mX6, t.borderGray500]}>
                        <Text style={{top: -10, textAlign: 'center', backgroundColor: '#edf2f7', alignSelf: 'center', paddingHorizontal: 8, color: '#a0aec0', fontWeight: '600'}}>{clickedLocation.time}</Text>
                    </View>
                    <View style={[t.border, t.rounded, t.borderGray400, t.bgWhite]}>
                        <View style={[t.flexRow]}>
                            <Image source={{uri: `http://openweathermap.org/img/wn/${clickedLocation.weather.weather.icon}@2x.png`}} style={[t.w1_4, t.h16]}></Image>
                            <View style={[t.pL4, t.selfCenter]}>
                                <Text style={[t.textXl, t.fontMedium]}>{clickedLocation.weather.weather.temperature}<Text style={[t.fontLight]}> °C</Text> <Text style={[t.textBase, t.mL4, t.fontMedium]}>  {clickedLocation.weather.weather.description}</Text></Text>
                                <View style={[t.flexRow, t.mT1]}>
                                    <Text style={[t.mR2, t.textXs, t.fontLight, t.textGray700]}>humidity: {clickedLocation.weather.weather.humidity}%    wind: {clickedLocation.weather.weather.windSpeed}km/h</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={[t.mL6, t.pB2, t.fontLight, t.textGray800]}>Incident weather conditions</Text>
                    </View>
                        <View>
                        <View style={[t.mT4,t.bgWhite, t.border, t.rounded, t.borderGray400, t.p4]}>
                            <View style={[t.alignCenter, t.flexRow]}> 
                                <MapView
                                    region={{
                                        latitude: clickedLocation.latitude,
                                        longitude: clickedLocation.longitude,
                                        latitudeDelta: 0.015,
                                        longitudeDelta: 0.0121,
                                        showsUserLocation: true
                                    }} style={[t.w1_5, t.h20]}>
                                    <MapView.Marker 
                                        coordinate={
                                            {latitude:clickedLocation.latitude,
                                             longitude: clickedLocation.longitude}
                                             }
                                        />
                                    </MapView>

                                <View style={[t.mL4, t.selfCenter]}>
                                    <Text style={[t.textBase, t.fontSemibold, t.trackingWide]}>{clickedLocation.city} </Text>
                                    <Text style={[t.textBase, t.fontSemibold, t.trackingWide]}>{clickedLocation.country}</Text>
                                </View>
                            </View>
                            <Text style={[t.textSm, t.fontMedium, t.trackingWide, t.mT4]}>Jonas Dreessen <Text style={[t.fontLight]}>set incident location</Text></Text>
                        </View>
                            <RNPickerSelect
                                    style={pickerStyle}
                                    onValueChange={(value) => this.setState({selectedValue: value})}
                                    placeholder={{label: 'select severity', value: null}}
                                    items={[
                                        { label: 'Extreme', value: extreme },
                                        { label: 'High', value: high },
                                        { label: 'Medium', value: medium },
                                        { label: 'Low', value: low},
                                        { label: 'Trivial', value: trivial}
                                        ]}
                                    />
                        </View>
                        <TouchableOpacity onPress={() => {this.props.SevertyIncreaser(this.state.selectedValue), this.props.navigation.goBack()}}
                            style={[t.selfCenter, t.mRAuto, t.rounded, t.bgGreen500, t.p1, t.mT2]}>
                            <Text style={[t.textBase, t.fontSemibold, t.trackingWider, t.textWhite]}>Confirm</Text>
                        </TouchableOpacity>
                    </View>

                )
            }
        })
        return(
           <View style={[t.flex1, t.pX4, t.bgGray100]}>
               {selectedLocation}
           </View>
        )
    }
}

const pickerStyle = {
	inputIOS: {
		color: 'black',
		paddingTop: 6,
		paddingHorizontal: 10,
        paddingBottom: 0,
        fontSize: 16,
        marginRight: 'auto',
        borderWidth: 0.8,
        borderRadius: 6,
        borderColor: 'lightgrey',
        marginTop: 6,
        backgroundColor: 'white',
	},
	inputAndroid: {
        color: 'black',
        paddingTop: 13,
		paddingHorizontal: 10,
        paddingBottom: 12,
        fontSize: 24,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10
	},
	placeholderColor: 'black',
	underline: { borderTopWidth: 0 },
	icon: {
		position: 'absolute',
		backgroundColor: 'transparent',
		borderTopWidth: 5,
		borderTopColor: '#00000099',
		borderRightWidth: 5,
		borderRightColor: 'transparent',
		borderLeftWidth: 5,
		borderLeftColor: 'transparent',
		width: 0,
		height: 0,
		top: 20,
		right: 15,
	},
};

const mapStateToProps = (state) => {
    return {
        location: state.addNewLocation,
        incidentType: state.AddIncidentIncrease
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        SevertyIncreaser: (payload) => dispatch(SevertyIncreaser(payload)),
        ChangeIncident: (payload) => dispatch(ChangeIncident(payload))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(InsightDetailAdjustment)



