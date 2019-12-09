import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import {addIncrement, addDecrement} from '../../redux/actions/counterIncrease'
import {t, color} from 'react-native-tailwindcss'
import {BarChart, Grid, YAxis} from 'react-native-svg-charts'
import * as scale from 'd3-scale'
class Mostusedtags extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const { GeneralIncidents } = this.props
        // -- the data is used to display the correct graph. Value and label are set variable to the global state that is called -- //
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
         
        const incidentInsights = () => {
            // -- determine if there are incidents. If that is not true, we will not display anything.  -- //
            if(GeneralIncidents.HazardIncidents < 1 && GeneralIncidents.NearMissIncidents < 1 && GeneralIncidents.MaintenanceIncidents < 1 && GeneralIncidents.InjuryIncidents < 1 && GeneralIncidents.TheftIncidents < 1){
            return(
                null 
            )
        } else{
            return(
                
                <View style={{flexDirection: 'row', height: 120, paddingVertical: 10, borderRadius: 6}}>
                    <YAxis
                        data={data}
                        numberOfTicks={data.length}
                        yAccessor={({ index }) => index}
                        scale={scale.scaleBand}
                        contentInset={{ top: 0, bottom: 0 }}
                        spacing={0.3}
                        formatLabel={(_, index) => data[index].label}
                        style={[t.mL16]}
                    />
                    <BarChart
                        style={[t.flex1, t.mR6]}
                        data={data}
                        horizontal={true}
                        yAccessor={({ item }) => item.value}
                        svg={{ fill: color.gray400 }}
                        contentInset={{ top: 5, bottom: 5 }}
                        spacing={0.2}
                        gridMin={0}
                        spacingInner={0.6} 
                    >
                    </BarChart>
                </View>
            )
        }}
        return(

            <View style={t.border, t.borderGray200, t.bgWhite, t.hAuto, t.pY2}>
                {incidentInsights()}
            </View>
        )
    }
}
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