import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';


class BottomNavbar extends Component {
  render() {
    return (
  <View style={styles.container}>
    <TouchableWithoutFeedback  onPress={() => this.props.navigation.navigate('Insights')}>
      <View>
          <Image source={require('../img/research.png')} style={styles.image}></Image>
          <Text style={styles.textElements}>insights</Text>
      </View>
    </TouchableWithoutFeedback>
    
    <TouchableWithoutFeedback  onPress={() => alert("touch is working")}>
      <View>
        <Image source={require('../img/megaphone.png')} style={styles.image}></Image>
        <Text style={styles.textElements}>Incidents</Text>
      </View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback  onPress={() => alert("touch is working")}>
      <View>
        <Image source={require('../img/plus.png')} style={styles.plusImage}></Image>
      </View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback  onPress={() => alert("touch is working")}>
      <View>
        <Image source={require('../img/alarm.png')} style={styles.image}></Image>
        <Text style={styles.textElements}>Team Alerts</Text>
      </View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback  onPress={() => alert("touch is working")}>
      <View>
      <Image source={require('../img/more.png')} style={styles.image}></Image>
        <Text style={styles.textElements}>More</Text>
      </View>
    </TouchableWithoutFeedback>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
  },
  textElements: {
    color: 'black',
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 5,
  },
  plusImage: {
    marginBottom: 30,
  }
})


export default BottomNavbar;

