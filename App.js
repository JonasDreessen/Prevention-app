import React, {Component} from "react";
import {StyleSheet,View} from "react-native";
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import AppContainer from './navigation/navigation'
import reducer from './redux/reducer/index'

const store = createStore(reducer)

class App extends Component {
  render(){
    return (
    <Provider store={store}>
        <View style={styles.container}>
        
          <AppContainer counterState={this.state}/> 
        </View>
      </Provider>
    );
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

export default App

