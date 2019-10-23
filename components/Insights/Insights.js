import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import TopNavbar from '../TopNavbar';
import { connect } from 'react-redux';
import {addIncrement, addDecrement} from '../../redux/actions/counterIncrease'
import Mostusedtags from './Mostusedtags'

class Insigts extends Component {
    render(){
        const { counter, GeneralIncidents } = this.props
        return(
            <View style={styles.container}>
                <TopNavbar />
                <View style={styles.InsightsContainer}>
                    <View style={styles.AmountOfIncidents}>
                        <Text>Incidents ({GeneralIncidents.amountOfIncidents})</Text>
                    </View>

                    <View style={styles.IncidentsGeneralContainer}>
                        <View style={styles.OpenIncidents, styles.IncidentsDetailContainer}>
                            <Text style={styles.numberOfIncidents}>
                                {GeneralIncidents.amountOfIncidents}
                            </Text>
                            <Text>Open{"\n"}Incidents</Text>
                            
                        </View>

                        <View style={styles.resolvedIncidents, styles.IncidentsDetailContainer}>
                            <Text style={styles.numberOfIncidents}>0</Text>
                            <Text>Resolved{"\n"}Incidents</Text>
                        </View>
                    </View>

                    <View style={styles.mostUsedTags}>
                        <Text>Most Used Tags</Text>
                    </View>

                    {/* <View style={styles.mostUsedTagsContainer}>
                        <Text style={styles.mostUsedTagsText}>Hazard ({GeneralIncidents.HazardIncidents})</Text>
                        <Text style={styles.mostUsedTagsText}>Near Miss ({GeneralIncidents.NearMissIncidents})</Text>
                        <Text style={styles.mostUsedTagsText}>Maintenance({GeneralIncidents.MaintenanceIncidents})</Text>
                        <Text style={styles.mostUsedTagsText}>Injury ({GeneralIncidents.InjuryIncidents})</Text>
                        <Text style={styles.mostUsedTagsText}>Property Damage ({GeneralIncidents.PropertyDamageIncidents})</Text>
                        <Text style={styles.mostUsedTagsText}>Theft ({GeneralIncidents.TheftIncidents})</Text>
                    </View> */}
                    <Mostusedtags />

                    <View style={styles.severety}>
                        <Text>Severety</Text>
                    </View>

                    <View style={styles.severetyContainer}>
                        <View style={styles.severetyTextContainer}>
                            <Text style={styles.severetyText}>Extreme</Text>
                            <Text style={styles.severetyText}>High</Text>
                            <Text style={styles.severetyText}>Medium</Text>
                            <Text style={styles.severetyText}>Low</Text>
                            <Text style={styles.severetyText}>Trivial</Text>
                        </View>
                        <View style={styles.severetyGraphContainer}>
                            <Image source={require('../../img/pie-chart.png')}></Image>
                        </View>
                    </View>
                    
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: '#f5f5f5'
    },
    IncidentsGeneralContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    InsightsContainer: {
        top: 50,
        marginLeft: 10,
        marginRight: 10,
    },
    IncidentsDetailContainer: {
        width: '45%',
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10, 
        paddingLeft: 5,
        paddingRight: 5,
        flexDirection: 'row'
    },
    mostUsedTagsContainer: {
        backgroundColor: 'white',
        height: 'auto',
        paddingTop: 10,
        paddingBottom: 10,
    },
    mostUsedTags: {
        marginTop: 30,
        marginBottom: 10,
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
    }
});


const mapStateToProps = (state) => {
    console.log(state)
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

