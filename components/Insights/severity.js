import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import { connect } from 'react-redux';
import {PieChart} from 'react-native-svg-charts'
import { SevertyIncreaser } from '../../redux/actions/SevertyIncreaser';


class Severity extends Component{
    constructor(props){
        super(props)
    }
    
    render() {
        console.log(this.props.severityType)
        const data = [
            {
                key: 1,
                amount: this.props.severityType.extremeSeverity,
                svg: { fill: 'darkred' },
            },
            {
                key: 2,
                amount: this.props.severityType.highSeverity,
                svg: { fill: 'red' }
            },
            {
                key: 3,
                amount: this.props.severityType.mediumSeverity,
                svg: { fill: 'orange' }
            },
            {
                key: 4,
                amount: this.props.severityType.lowSeverity,
                svg: { fill: 'yellow' }
            },
            {
                key: 5,
                amount: this.props.severityType.trivialSeverity,
                svg: { fill: 'blue' }
            }
        ]

        const Labels = ({ slices }) => {
            return slices.map((slice) => {
                return (
                    <Text>{data.amount}</Text>
                )
            })
        }
        const extreme = 'extreme'
        const high = 'high'
        const medium = 'medium'
        const low = 'low'
        const trivial = 'trivial'
        return(
            <View>
                 <View style={styles.severety}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.coloredCircle}></View>
                        <Text>Severety</Text>
                    </View>
                </View>
                    <View style={styles.severetyContainer}>
                        <View style={styles.severetyTextContainer}>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <Text style={styles.severetyText}>Extreme</Text>
                                <View style={styles.colorPointDarkRed}></View>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <Text style={styles.severetyText}>High</Text>
                                <View style={styles.colorPointRed}></View>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <Text style={styles.severetyText}>Medium</Text>
                                <View style={styles.colorPointOrange}></View>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <Text style={styles.severetyText}>Low</Text>
                                <View style={styles.colorPointYellow}></View>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <Text style={styles.severetyText}>Trivial</Text>
                                <View style={styles.colorPointBlue}></View>
                            </View>
                        </View>
                        <PieChart
                            style={{ height: 200, flex: 1 }}
                            valueAccessor={({ item }) => item.amount}
                            data={data}
                            spacing={5}
                            innerRadius={'70%'}
                            outerRadius={'90%'}
                        >
                        </PieChart>
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
    colorPointDarkRed: {
        width: 15,
        borderWidth: 1,
        height: 15,
        marginLeft: 10,
        borderRadius: 50,
        backgroundColor: 'darkred' 
    },
    colorPointRed: {
        width: 15,
        borderWidth: 1,
        height: 15,
        marginLeft: 10,
        borderRadius: 50,
        backgroundColor: 'red' 
    },
    colorPointOrange: {
        width: 15,
        borderWidth: 1,
        height: 15,
        marginLeft: 10,
        borderRadius: 50,
        backgroundColor: 'orange' 
    },
    colorPointYellow: {
        width: 15,
        borderWidth: 1,
        height: 15,
        marginLeft: 10,
        borderRadius: 50,
        backgroundColor: 'yellow' 
    },
    colorPointBlue: {
        width: 15,
        borderWidth: 1,
        height: 15,
        marginLeft: 10,
        borderRadius: 50,
        backgroundColor: 'blue' 
    },
    severetyContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingTop: 15,
        paddingBottom: 15,
    },
    severetyTextContainer: {
        left: 15,
        justifyContent: 'space-around',
        marginVertical: 10
    },
    severetyText: {
        marginBottom: 10,
        textAlign: 'right',
    },
    coloredCircle: {
        width: 10,
        borderWidth: 1,
        height: 10,
        marginLeft: 10,
        borderRadius: 50,
        backgroundColor: 'darkblue', 
        marginRight: 4,
        alignSelf: 'center'
    }
})
const mapStateToProps = (state) => {
    return {
        severityType: state.addSeverity,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SevertyIncreaser: (payload) => dispatch(SevertyIncreaser(payload))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(Severity)