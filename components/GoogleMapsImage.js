import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, ScrollView, SafeAreaView} from 'react-native';
import Topnavbar from './TopNavbar'

class googleMapsImages extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
<ScrollView style={{marginTop: 40}}>
<Topnavbar navigation={this.props.navigation}/>
<View style={styles.container}>
    <Text style={styles.title}>Hazard at Antwerpen</Text>
    <Text style={styles.subTitle}>15 Oct 9:32 am</Text>
    <Image source={require('../img/pointbreak-screenshot.png')} style={styles.image} />  

    <Text style={styles.title}>Incident</Text>
    <Text style={styles.subTitle}>19 Oct 19:17 am</Text>
    <Image source={require('../img/pointbreak-screenshot.png')} style={styles.image} /> 

    <Text style={styles.title}>Incident</Text>
    <Text style={styles.subTitle}>19 Oct 19:17 am</Text>
    <Image source={require('../img/pointbreak-screenshot.png')} style={styles.image} /> 

    <Text style={styles.title}>Incident</Text>
    <Text style={styles.subTitle}>19 Oct 19:17 am</Text>
    <Image source={require('../img/pointbreak-screenshot.png')} style={styles.image} /> 

    <Text style={styles.title}>Incident</Text>
    <Text style={styles.subTitle}>19 Oct 19:17 am</Text>
    <Image source={require('../img/pointbreak-screenshot.png')} style={styles.image} />

    <Text style={styles.title}>Hazard at Antwerpen</Text>
    <Text style={styles.subTitle}>15 Oct 9:32 am</Text>
    <Image source={require('../img/pointbreak-screenshot.png')} style={styles.image} /> 

</View>
</ScrollView>
)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 50,
        width: '100%',
        marginLeft: 10,
    },
    image: {
        height: '100%',
        width: '100%',
        marginTop: 10,
        
    },
    title: {
        fontSize: 20,
    },
    subTitle: {
        color: 'lightgrey',
        fontSize: 12,
        marginTop: 5,
    }
})

export default googleMapsImages
