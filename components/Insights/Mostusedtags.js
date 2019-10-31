import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import {addIncrement, addDecrement} from '../../redux/actions/counterIncrease'
import {BarChart, Grid, YAxis} from 'react-native-svg-charts'
import * as scale from 'd3-scale'
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
        
        const data   = [
            {
                value: GeneralIncidents.HazardIncidents,
                label: `Hazard (${GeneralIncidents.HazardIncidents})`
            },
            {
                value: GeneralIncidents.NearMissIncidents,
                label: `Near Miss (${GeneralIncidents.NearMissIncidents})`
            },
            {
                value: GeneralIncidents.MaintenanceIncidents,
                label: `Maintenance (${GeneralIncidents.MaintenanceIncidents})`
            },
            {
                value: GeneralIncidents.InjuryIncidents,
                label: `Injury (${GeneralIncidents.InjuryIncidents})`
            },
            {
                value: GeneralIncidents.PropertyDamageIncidents,
                label: `Property Damage (${GeneralIncidents.PropertyDamageIncidents})`
            },
            {
                value: GeneralIncidents.TheftIncidents,
                label: `Theft (${GeneralIncidents.TheftIncidents})`
            }
        ]
        
        return(

            <View style={styles.mostUsedTagsContainer}>
                <View style={{flexDirection: 'row', height: 200, paddingVertical: 10}}>
                <YAxis
                    data={data}
                    numberOfTicks={data.length}
                    yAccessor={({ index }) => index}
                    scale={scale.scaleBand}
                    contentInset={{ top: 0, bottom: 0 }}
                    spacing={0.2}
                    formatLabel={(_, index) => data[index].label}
                    style={{alignItems: 'flex-start', maxWidth: 150}}
                />
                <BarChart
                    style={{flex: 1,}}
                    data={data}
                    horizontal={true}
                    yAccessor={({ item }) => item.value}
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                    contentInset={{ top: 5, bottom: 5 }}
                    spacing={0.2}
                    gridMin={0}
                    spacingInner={0.6} 
                >
                
                </BarChart>
                </View>




                {/* <View style={{marginRight: 'auto', marginLeft: 'auto'}}>
                    {showHazards()}
                    {showNearMiss()}
                    {showMaintenance()}
                    {showInjury()}
                    {showPropertyDamage()}
                    {showTheft()}
                </View>  */}
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