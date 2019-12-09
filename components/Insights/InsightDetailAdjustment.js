import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal'
import { connect } from 'react-redux';
import MapView, {Marker} from 'react-native-maps'
import { SevertyIncreaser } from '../../redux/actions/SevertyIncreaser';
import { ChangeIncident } from '../../redux/actions/typeOfIncidentForInsightDetailHeader'
import {t} from 'react-native-tailwindcss'
import ImagePicker from 'react-native-image-picker'
import LottieView from 'lottie-react-native'

class InsightDetailAdjustment extends Component {
    constructor(props){
        super(props)
        // -- setting the initial state -- //
        this.state = {
            selectedValue: null,
            modalVisible: false,
            severityModalVisible: false,
            extraInfo: null,
            avatarSource: null
        }
    }
    render(){
        const pickImage = () => {
            // -- options that define how the user sees the pop up for choosing a picture from their phone gallery to add exta detail to the incident  -- //
            const options = {
            title: 'Select a picture to add to the incident.',
            storageOptions: {
            skipBackup: true,
            path: 'images',
            },
        };
        
    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
       
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = { uri: response.uri };
          // -- setting the local state to the path toward the local stored picture. -- //
          this.setState({
            avatarSource: source,
          });
        }
      });
    }
    const getExtraInfo = () => {
        if(this.state.extraInfo){
            if(this.state.extraInfo.length > 0){
                return this.state.extraInfo
            } else{
                null
            }
        }
    }
    // -- end image picker -- // 
        // -- when the user chooses a specific incident to add details to it, there is a parameter passed with that press. the parameter is the id of the incident. 
        // we will map over all the incidents, and search for a match between the incident id and the parameter. When one is found we use the information of that
        // incident to be displayed for the user. -- // 
        const selectedLocation = this.props.location.userLocation.map(clickedLocation => {
            if(clickedLocation.userId === this.props.navigation.state.params.userId){
                var payload = this.props.navigation.state.params.typeOfHazard
                this.props.ChangeIncident(payload)
                return(
                <View style={[t.flex1, t.pX4, t.bgGray100]} >
                    <View style={[t.borderT, t.mY8, t.mX6, t.borderGray500]}>
                        <Text style={{top: -10, textAlign: 'center', backgroundColor: '#f7fafc', alignSelf: 'center', paddingHorizontal: 8, color: '#a0aec0', fontWeight: '600'}}>{clickedLocation.time}</Text>
                    </View>
                    <View style={[t.border, t.rounded, t.borderGray400, t.bgWhite]}>
                        <View style={[t.flexRow]}>
                            <Image source={{uri: `http://openweathermap.org/img/wn/${clickedLocation.weather.weather.icon}@2x.png`}} style={[t.w1_4, t.h16]}></Image>
                            <View style={[t.pL4, t.selfCenter]}>
                                <Text style={[t.textXl, t.fontMedium]}>{clickedLocation.weather.weather.temperature}<Text style={[t.fontLight]}> °C</Text> <Text style={[t.textBase, t.mL4, t.fontMedium]}>  {clickedLocation.weather.weather.description}</Text></Text>
                                <View style={[t.flexRow, t.mT1]}>
                                    <Text style={[t.mR2, t.textXs, t.fontLight, t.textGray700]}>humidity: {clickedLocation.weather.weather.humidity} %    wind: {clickedLocation.weather.weather.windSpeed} km/h</Text>
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
                                            latitudeDelta: 0.0020,
                                            longitudeDelta: 0.0020,
                                            showsUserLocation: true
                                        }} style={[t.w2_5, t.h24]}>
                                        <Marker 
                                        // -- by using Marker instead of Mapview.marker, we are able to pass a custom view to the marker so that it's not the default pin icon. In this
                                        // case we used a lottie animation -- //
                                            coordinate={
                                                {latitude:clickedLocation.latitude,
                                                longitude: clickedLocation.longitude}
                                                }
                                            >
                                                <View>
                                                    <LottieView style={[t.w24, t.h32]} source={require('../../assets/lottie/small-map-location.json')} autoPlay loop duration={1200}/>
                                                </View>
                                            </Marker>
                                        </MapView>

                                    <View style={[t.mL4, t.selfCenter]}>
                                        <Text style={[t.textBase, t.fontSemibold, t.trackingWide]}>{clickedLocation.city} </Text>
                                        <Text style={[t.textBase, t.fontSemibold, t.trackingWide]}>{clickedLocation.country}</Text>
                                    </View>
                                </View>
                                <Text style={[t.textSm, t.fontMedium, t.trackingWide, t.mT4]}>Jonas Dreessen <Text style={[t.fontLight]}>set incident location</Text></Text>
                            </View>
                        </View>
                        
                            {this.state.avatarSource ? 
                            // -- if above is true, the chosen/taken image is used, else nothing happens -- // 
                            <View style={[t.mT4,t.bgWhite, t.border, t.rounded, t.borderGray400, t.p4]}>
                                <Image style={[t.w48, t.h48]} source={{uri: `${this.state.avatarSource.uri}`}}></Image>
                                <Text>{}</Text>
                            </View> : null}
                        
                </View>

                )
            }
        })
        return(
            <View style={[t.flex1]}>
            {/* the selectedLocation variable is the above code displayed in the view the user will see */}
               {selectedLocation}
               {/* below is the bar you see with some options to press to add a severity, text information or to add an extra phone */}
               <View style={[t.flexRow, t.borderT, t.borderGray400, t.p2,t.mB6, t.z10]}>
                <TouchableOpacity onPress={() => this.setState({modalVisible: !this.state.modalVisible})}>
                        <Image style={[t.w6, t.objectContain, t.mR2]} source={require('../../img/plus.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => pickImage()}>
                    <Image style={[t.mR2, t.rounded]} source={require('../../img/picture.png')}></Image>
                </TouchableOpacity>
                    <TextInput 
                    onChangeText={(value) => this.setState({extraInfo: value})}
                    value={this.state.extraInfo}
                    placeholder='Add information here...'/>
                    <TouchableOpacity style={[t.mR2, t.mLAuto]} onPress={() => getExtraInfo()}>
                        <Image style={[t.w6, t.objectContain]} source={require('../../img/right-arrow-green.png')}></Image>
                    </TouchableOpacity>
                </View>
                
                {/* Modal that appears when the plus icon is clicked, this allows editing information for this incident */}
                <Modal
                animationType='slide'
                transparent={true}
                onBackdropPress={() => this.setState({modalVisible: false})}
                backdropOpacity={0}
                coverScreen={false}
                style={{margin: 0}}
                isVisible={this.state.modalVisible}>
                    <View style={{flex: 1, width: '100%', marginTop: 485}}>
                        <View style={[t.bgWhite, t.justifyAround,t.roundedT, t.pY2, t.pL4]}>
                            <View style={[t.flexRow, t.itemsCenter]}>
                                <Image style={[t.w5, t.objectContain, t.mR3]}  source={require('../../img/font.png')}></Image>
                                <Text style={t.textBase, t.fontLight}> Edit title</Text>
                            </View>
                            <View style={[t.flexRow, t.itemsCenter]}>
                                <Image style={[t.w5, t.objectContain, t.mR3]} source={require('../../img/price-tag.png')}></Image> 
                                <Text style={t.textBase, t.fontLight}>Update tags</Text>
                            </View>
                            <View style={[t.flexRow, t.itemsCenter]}>
                                <Image style={[t.w5, t.objectContain, t.mR3]} source={require('../../img/maps-and-flags.png')}></Image>
                                <Text style={t.textBase, t.fontLight}> Update location</Text>
                            </View>
                            <TouchableOpacity style={[t.flexRow]} onPress={() => this.setState({severityModalVisible: true})}>
                                <View style={[t.flexRow, t.itemsCenter]}>
                                    <Image style={[t.w5, t.objectContain, t.mR3]} source={require('../../img/danger.png')}></Image>
                                    <Text style={t.textBase, t.fontLight}>Update severity</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                {/* Modal that appears when the severety icon is clicked, this allows editing the severity for this incident */}
                <Modal
                    onBackdropPress={() => this.setState({severityModalVisible: false, modalVisible: false})}
                    backdropOpacity={0}
                    coverScreen={true}
                    style={{margin: 0}}
                    isVisible={this.state.severityModalVisible}>
                    <View style={[t.bgWhite, t.flex1, t.mT12]}>
                    <TouchableOpacity onPress={() => this.setState({severityModalVisible: false, modalVisible: false})}>
                    <View style={[t.flexRow, t.mB8, t.itemsCenter, t.borderB, t.borderGray400, t.pB4, t.p4]}>
                        <Image style={[t.w4, t.objectContain, t.absolute, t.mL4]} source={require('../../img/close.png')}></Image>
                        <Text style={[t.mLAuto, t.mRAuto, t.fontBold, t.textLg, t.trackingWider]}>Severity</Text>
                    </View>
                        
                    </TouchableOpacity>
                        <View style={t.p4}>
                            <TouchableOpacity onPress={ () => {this.setState({selectedValue: 'extreme'}), this.props.SevertyIncreaser('extreme'), this.setState({severityModalVisible: false, modalVisible: false})  }}>
                                <View style={[t.rounded, t.borderGray400, t.pY2, t.bgGray200, t.mB4]}>
                                    <Text style={[t.textCenter, t.textBase]}>Extreme</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ () => {this.setState({selectedValue: 'high'}), this.props.SevertyIncreaser('high'), this.setState({severityModalVisible: false, modalVisible: false})  }}>
                                <View style={[t.rounded, t.borderGray400, t.pY2, t.bgGray200, t.mB4]}>
                                    <Text style={[t.textCenter, t.textBase]}>High</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ () => {this.setState({selectedValue: 'medium'}), this.props.SevertyIncreaser('medium'), this.setState({severityModalVisible: false, modalVisible: false})  }}>
                                <View style={[t.rounded, t.borderGray400, t.pY2, t.bgGray200, t.mB4]}>
                                    <Text style={[t.textCenter, t.textBase]}>Medium</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ () => {this.setState({selectedValue: 'low'}), this.props.SevertyIncreaser('low'), this.setState({severityModalVisible: false, modalVisible: false})  }}>
                                <View style={[t.rounded, t.borderGray400, t.pY2, t.bgGray200, t.mB4]}>
                                    <Text style={[t.textCenter, t.textBase]}>Low</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ () => {this.setState({selectedValue: 'trivial'}), this.props.SevertyIncreaser('trivial'), this.setState({severityModalVisible: false, modalVisible: false})  }}>
                                <View style={[t.rounded, t.borderGray400, t.pY2, t.bgGray200, t.mB4]}>
                                    <Text style={[t.textCenter, t.textBase]}>Trivial</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
               </Modal>
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



