import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import {addIncrement, addDecrement} from '../../redux/actions/counterIncrease'

class Mostusedtags extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const { GeneralIncidents } = this.props
        const showHazards = () => {
            if(GeneralIncidents.HazardIncidents > 0){
                return (
                    <Text style={styles.mostUsedTagsText}>Hazard ({GeneralIncidents.HazardIncidents})</Text>
                )
            }
        }
        const showNearMiss = () => {
            if(GeneralIncidents.NearMissIncidents > 0){
                return (
                    <Text style={styles.mostUsedTagsText}>Near Miss ({GeneralIncidents.NearMissIncidents})</Text>
                )
            }
        }
        const showMaintenance = () => {
            if(GeneralIncidents.MaintenanceIncidents > 0){
                return (
                    <Text style={styles.mostUsedTagsText}>Maintenance ({GeneralIncidents.MaintenanceIncidents})</Text>
                )
            }
        }
        const showInjury = () => {
            if(GeneralIncidents.InjuryIncidents > 0){
                return (
                    <Text style={styles.mostUsedTagsText}>Injury ({GeneralIncidents.InjuryIncidents})</Text>
                )
            }
        }
        const showPropertyDamage = () => {
            if(GeneralIncidents.PropertyDamageIncidents > 0){
                return (
                    <Text style={styles.mostUsedTagsText}>Property Damage ({GeneralIncidents.PropertyDamageIncidents})</Text>
                )
            }
        }
        const showTheft = () => {
            if(GeneralIncidents.TheftIncidents > 0){
                return (
                    <Text style={styles.mostUsedTagsText}>Theft ({GeneralIncidents.TheftIncidents})</Text>
                )
            }
        }
        return(
            <View style={styles.mostUsedTagsContainer}>
                {showHazards()}
                {showNearMiss()}
                {showMaintenance()}
                {showInjury()}
                {showPropertyDamage()}
                {showTheft()} 
            </View>
        )
    }
}


const styles = StyleSheet.create({

    mostUsedTagsContainer: {
        backgroundColor: 'white',
        height: 'auto',
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        
    },
    mostUsedTags: {
        marginTop: 30,
        marginBottom: 10,
    },
    mostUsedTagsText: {
        fontSize: 12,
        textAlign: 'right',
        marginBottom: 5,
    },
})

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
    )(Mostusedtags)