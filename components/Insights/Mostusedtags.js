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
        const data   = [
            {   
                value: GeneralIncidents.HazardIncidents > 0 ? GeneralIncidents.HazardIncidents : false,
                label: GeneralIncidents.HazardIncidents > 0 ? `Hazard (${GeneralIncidents.HazardIncidents})` : false
            },
            {
                value: GeneralIncidents.NearMissIncidents > 0? GeneralIncidents.NearMissIncidents : false,
                label: GeneralIncidents.NearMissIncidents > 0? `Near Miss (${GeneralIncidents.NearMissIncidents})`: false
            },
            {
                value: GeneralIncidents.MaintenanceIncidents > 0? GeneralIncidents.MaintenanceIncidents: false,
                label: GeneralIncidents.MaintenanceIncidents > 0? `Maintenance (${GeneralIncidents.MaintenanceIncidents})`: false
            },
            {
                value: GeneralIncidents.InjuryIncidents > 0? GeneralIncidents.InjuryIncidents: false,
                label: GeneralIncidents.InjuryIncidents > 0? `Injury (${GeneralIncidents.InjuryIncidents})`: false
            },
            {
                value: GeneralIncidents.PropertyDamageIncidents > 0 ? GeneralIncidents.PropertyDamageIncidents: false,
                label: GeneralIncidents.PropertyDamageIncidents > 0? `Property Damage (${GeneralIncidents.PropertyDamageIncidents})`: false
            },
            {
                value: GeneralIncidents.TheftIncidents > 0? GeneralIncidents.TheftIncidents: false,
                label: GeneralIncidents.TheftIncidents > 0?`Theft (${GeneralIncidents.TheftIncidents})`: false
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
                    svg={{ fill: 'grey' }}
                    contentInset={{ top: 5, bottom: 5 }}
                    spacing={0.2}
                    gridMin={0}
                    spacingInner={0.6} 
                >
                </BarChart>
                </View>
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
        paddingRight: 30
        
        
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