import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './Comps/Main.js'

export default class App extends React.Component { 
  constructor () {
    super()
    this.state = {
      Login : false
    }
  }

  render() {
    if (!this.state.Login){

      return (
        <View style={styles.container}>

        <Main />
  
        </View>
      );

    }

    else if (this.state.Login){
      return(<Messenger/>)
    }

    return(<View></View>)
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
