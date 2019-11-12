import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import { connect } from 'react-redux';
import {addIncrement, addDecrement} from '../../redux/actions/counterIncrease'
import {PieChart} from 'react-native-svg-charts'
import * as scale from 'd3-scale'


class Severity extends Component{
    constructor(props){
        super(props)
    }
    
    render() {

        const data = [
            {
                key: 1,
                amount: 50,
                svg: { fill: '#600080' },
            },
            {
                key: 2,
                amount: 50,
                svg: { fill: '#9900cc' }
            },
            {
                key: 3,
                amount: 40,
                svg: { fill: '#c61aff' }
            },
            {
                key: 4,
                amount: 95,
                svg: { fill: '#d966ff' }
            },
            {
                key: 5,
                amount: 35,
                svg: { fill: '#ecb3ff' }
            }
        ]

        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <Text
                        key={index}
                        x={pieCentroid[ 0 ]}
                        y={pieCentroid[ 1 ]}
                        fill={'white'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={24}
                        stroke={'black'}
                        strokeWidth={0.2}
                    >
                        {data.amount}
                    </Text>
                )
            })
        }
    
 
        return(
            <View>
            
                 <View style={styles.severety}>
                    <Text>Severety</Text>
                    </View>
                    <PieChart
                style={{ height: 200 }}
                valueAccessor={({ item }) => item.amount}
                data={data}
                spacing={0}
                outerRadius={'95%'}
            >
               
            </PieChart>
                    <View style={styles.severetyContainer}>
                        <View style={styles.severetyTextContainer}>
                            <Text style={styles.severetyText}>Extreme</Text>
                            <Text style={styles.severetyText}>High</Text>
                            <Text style={styles.severetyText}>Medium</Text>
                            <Text style={styles.severetyText}>Low</Text>
                            <Text style={styles.severetyText}>Trivial</Text>
                        </View>
                        <View style={styles.severetyGraphContainer}> 
                        
                         </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
    }
})
export default Severity