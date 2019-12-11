import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {addIncrement, addDecrement} from '../../redux/actions/counterIncrease'
import Mostusedtags from './Mostusedtags'
import Severity from './severity'
import {t} from 'react-native-tailwindcss'
import LottieView from 'lottie-react-native'

class Insigts extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const { GeneralIncidents } = this.props
        // -- we determine if there are any incidents. If this is not the case we will return a lottie animation -- // 
        if(this.props.GeneralIncidents.amountOfIncidents === 0){
            return(
                <View style={[t.flex1, t.bgGray100, t.pX2, t.itemsCenter]}>
                    <Text style={[t.mT10, t.textLg, t.fontSemibold]}>No open incidents</Text>
                    <LottieView source={require('../../assets/lottie/insights.json')} autoPlay/>
                </View>
            )
        } else{
            // -- if there are incidents the user will have insight in the details, data and visuals -- // 
            return(
                <View style={[t.flex1, t.bgGray100, t.pX2]}>
                    <View style={[t.mT4]}>
                        <View style={[t.flexRow, t.mB2]}>
                            <View style={styles.coloredCircle}></View>
                            <Text style={[t.textSm, t.fontNormal]}>Incidents ({GeneralIncidents.amountOfIncidents})</Text>
                        </View>
                        <View style={[t.flexRow, t.justifyBetween]}>
                            <TouchableOpacity style={[t.w48, t.flexRow, t.h20, t.bgWhite, t.itemsCenter, t.rounded, t.border, t.borderGray200]} onPress={() => this.props.navigation.navigate('Incidents')}>
                                <Text style={[t.fontBold, t.text4xl, t.mR4, t.pL2]}>{GeneralIncidents.amountOfIncidents}</Text>
                                <Text style={[t.fontLight, t.textGray700]}>Open{"\n"}Incidents</Text>
                                <Image source={require('../../img/arrow-point-to-right.png')} style={styles.arrow}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={[t.w48, t.flexRow, t.h20, t.bgWhite, t.itemsCenter, t.rounded, t.border, t.borderGray200]} onPress={() => this.props.navigation.navigate('Incidents')}>
                                <Text style={[t.fontBold, t.text4xl, t.mR4, t.pL2]}>0</Text>
                                <Text style={[t.fontLight, t.textGray700]}>Resolved{"\n"}Incidents</Text>
                                <Image source={require('../../img/arrow-point-to-right.png')} style={styles.arrow}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={[t.mY4]}>
                                <View style={[t.flexRow]}>
                                <View style={styles.coloredCircle}></View>
                                <Text style={[t.textSm, t.fontNormal]}>Most Used Tags</Text>
                                </View>
                        </View>
                            <View style={[t.bgWhite, t.rounded, t.border, t.borderGray200]}>
                                    <Mostusedtags />
                            </View>
                            <Severity />
                    </View>
                </View>
            )
        }
    }
}
const styles = StyleSheet.create({
    arrow: {
        height: 14,
        width: 14,
        position: "absolute",
        right: 10,
    },
    coloredCircle: {
        width: 10,
        height: 10,
        marginLeft: 10,
        borderRadius: 50,
        backgroundColor: 'darkblue', 
        marginRight: 4,
        alignSelf: 'center'
    }
});


const mapStateToProps = (state) => {
    return {
        counter: state.AddCounter.counter,
        GeneralIncidents: state.AddIncidentIncrease,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    addIncrement: () => dispatch(addIncrement()),
    addDecrement: () => dispatch(addDecrement()),    
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(Insigts)

