import React, {Component} from "react";
import GoogleMapsImages from './GoogleMapsImage';
import {View, Text, StyleSheet} from 'react-native';


class Main extends Component {
    render() {
    return(
        <View style={styles.container}>
            <GoogleMapsImages />
        </View>
    )
    }
}
const styles = StyleSheet.create({
      container: {
        flex: 1
      },
      titleText: {
        textAlign: 'center',
        fontSize: 22,
        color: 'red',
        flex: 1,
        justifyContent: 'space-around'
      }
    })

  export default Main
