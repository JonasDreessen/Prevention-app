import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import {addIncrement, addDecrement} from '../../redux/actions/counterIncrease'
import {LineChart, Line, CartesianGrid, XAxis, Tooltip } from 'recharts'

class Mostusedtags extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const { GeneralIncidents } = this.props
        const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, 
                        {name: 'Page B', uv: 600, pv: 2500, amt: 200}, 
                        {name:'Page C', uv: 700, pv: 2600, amt: 2600} ];
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
                    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
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
    console.log(state.AddIncidentIncrease, 'testing the mostusedcomponent')
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