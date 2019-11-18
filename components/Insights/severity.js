import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import { connect } from 'react-redux';
import {PieChart} from 'react-native-svg-charts'
import { SevertyIncreaser } from '../../redux/actions/SevertyIncreaser';
import {t} from 'react-native-tailwindcss'


class Severity extends Component{
    constructor(props){
        super(props)
    }
    
    render() {
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

        const emptyData = [
            {
                key: 1,
                amount: 1,
                svg: {fill: 'lightgrey'}
            }
        ]

        const Labels = ({ slices }) => {
            return slices.map((slice) => {
                return (
                    <Text>{data.amount}</Text>
                )
            })
        }

        const pieChart = () =>{
        if(this.props.severityType.extremeSeverity > 0 || 
            this.props.severityType.highSeverity> 0 || 
            this.props.severityType.mediumSeverity > 0 || 
            this.props.severityType.lowSeverity > 0 || 
            this.props.severityType.trivialSeverity > 0){
            return(
                <PieChart
                            style={[t.flex1, t.pY5]}
                            valueAccessor={({ item }) => item.amount}
                            data={data}
                            spacing={5}
                            innerRadius={'70%'}
                            outerRadius={'90%'}
                        >
                </PieChart>
            )
        } else{
            return(
                <PieChart
                            style={[t.flex1, t.pY5]}
                            valueAccessor={({ item }) => item.amount}
                            data={emptyData}
                            spacing={5}
                            innerRadius={'70%'}
                            outerRadius={'90%'}
                        >
                </PieChart>
            )
        }
        }

        return(
            <View>
                 <View style={[t.mT4, t.mB2]}>
                    <View style={[t.flexRow]}>
                        <View style={styles.coloredCircle}></View>
                        <Text style={[t.textSm, t.fontNormal]}>Severety</Text>
                    </View>
                </View>
                    <View style={[t.flexRow, t.bgWhite, t.pX10]}>
                        <View style={[t.justifyBetween, t.h32, t.pY5]}>
                            <View style={[t.flexRow, t.justifyEnd, t.itemsCenter]}>
                                <Text style={[t.textXs, t.textGray600, t.fontNormal]}>Extreme</Text>
                                <View style={styles.colorPointDarkRed}></View>
                            </View>
                            <View style={[t.flexRow, t.justifyEnd, t.itemsCenter]}>
                                <Text style={[t.textXs, t.textGray600, t.fontNormal]}>High</Text>
                                <View style={styles.colorPointRed}></View>
                            </View>
                            <View style={[t.flexRow, t.justifyEnd, t.itemsCenter]}>
                                <Text style={[t.textXs, t.textGray600, t.fontNormal]}>Medium</Text>
                                <View style={styles.colorPointOrange}></View>
                            </View>
                            <View style={[t.flexRow, t.justifyEnd, t.itemsCenter]}>
                                <Text style={[t.textXs, t.textGray600, t.fontNormal]}>Low</Text>
                                <View style={styles.colorPointYellow}></View>
                            </View>
                            <View style={[t.flexRow, t.justifyEnd, t.itemsCenter]}>
                                <Text style={[t.textXs, t.textGray600, t.fontNormal]}>Trivial</Text>
                                <View style={styles.colorPointBlue}></View>
                            </View>
                        </View>
                        {pieChart()}
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    colorPointDarkRed: {
        width: 10,
        height: 10,
        marginLeft: 10,
        borderRadius: 50,
        backgroundColor: 'darkred' 
    },
    colorPointRed: {
        width: 10,
        height: 10,
        marginLeft: 10,
        borderRadius: 50,
        backgroundColor: 'red' 
    },
    colorPointOrange: {
        width: 10,
        height: 10,
        marginLeft: 10,
        borderRadius: 50,
        backgroundColor: 'orange' 
    },
    colorPointYellow: {
        width: 10,
        height: 10,
        marginLeft: 10,
        borderRadius: 50,
        backgroundColor: 'yellow' 
    },
    colorPointBlue: {
        width: 10,
        height: 10,
        marginLeft: 10,
        borderRadius: 50,
        backgroundColor: 'blue' 
    },
    severetyContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10,
    },
    severetyTextContainer: {
        left: 10,
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