import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import TopNavbar from '../TopNavbar';
import { connect } from 'react-redux';
import {addIncrement, addDecrement} from '../../redux/actions/counterIncrease'
import Mostusedtags from './Mostusedtags'
import Severity from './severity'
import {t} from 'react-native-tailwindcss'

class Insigts extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const { GeneralIncidents } = this.props
        return(
            <View style={[t.flex1, t.bgGray100, t.pX2]}>
                <View style={[t.mT4]}>
                    <View style={[t.flexRow, t.mB2]}>
                        <View style={styles.coloredCircle}></View>
                        <Text style={[t.textSm, t.fontNormal]}>Incidents ({GeneralIncidents.amountOfIncidents})</Text>
                    </View>
                    <View style={[t.flexRow, t.justifyBetween]}>
                        <TouchableOpacity style={[t.w5_12, t.flexRow, t.h20, t.bgWhite, t.itemsCenter, t.mL3, t.rounded]} onPress={() => this.props.navigation.navigate('Incidents')}>
                            <Text style={[t.fontBold, t.text4xl, t.mR4, t.pL2]}>{GeneralIncidents.amountOfIncidents}</Text>
                            <Text style={[t.fontLight, t.textGray700]}>Open{"\n"}Incidents</Text>
                            <Image source={require('../../img/arrow-point-to-right.png')} style={styles.arrow}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={[t.w5_12, t.flexRow, t.h20, t.bgWhite, t.itemsCenter, t.mR3, t.rounded]} onPress={() => this.props.navigation.navigate('Incidents')}>
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
                        <View style={[t.bgWhite, t.rounded]}>
                                <Mostusedtags />
                        </View>
                        <Severity />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    arrow: {
        height: 14,
        width: 14,
        position: "absolute",
        right: 10,
    },
    mostUsedTagsContainer: {
        backgroundColor: 'white',
        height: 'auto',
        paddingTop: 10,
        paddingBottom: 10,
    },

    mostUsedTagsText: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 5,
    },
    severety: {
        marginTop: 30,
        marginBottom: 10,
    },
    severetyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        paddingTop: 15,
        paddingBottom: 15,
    },
    severetyTextContainer: {
        left: 50,
    },
    severetyText: {
        marginBottom: 10,
        textAlign: 'right',
    },
    numberOfIncidents: {
        fontSize: 22,
        fontWeight: 'bold',
        marginRight: 20,
        paddingLeft: 5,   
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

