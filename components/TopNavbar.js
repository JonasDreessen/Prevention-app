import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';



class TopNavbar extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
<View style={styles.container}>
    <View style={styles.leftItems}>
        <TouchableOpacity style={{flexDirection:'row'}} onPress={() => this.props.navigation.goBack()}>
            <Image source={require('../img/menu.png')} style={styles.topbarLeftImage} />
            <Text style={styles.topbarLeftText}>Pointbreak</Text>
        </TouchableOpacity>
    </View>
    
    <View style={styles.rightItems}>
        <Image source={require('../img/analytics.png')} style={styles.topbarLeftImage} />
    </View> 
</View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        // marginBottom: 100,
        borderBottomWidth: 0.5,
        
    }, 
    leftItems: {
        flexDirection: 'row',
        position: 'absolute',
        left: 10,
        paddingTop: 10,
    },
    rightItems: {
        flexDirection: 'row',
        position: 'absolute', 
        right: 10,
        paddingTop: 10,
    },
    topbarLeftText: {
        marginLeft: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    topbarLeftImage: {
        marginRight: 5,
    },
    topbarRightText: {
        marginRight: 5,
        fontSize: 16,
    }
})
export default TopNavbar;
