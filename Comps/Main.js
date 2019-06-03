import React, { Component } from 'react';
import {View,Text,Button,StyleSheet} from 'react-native'
import {Initialize} from './Initialize'
import {GoogleAuth , UserInfo} from './firebaseauth'



class Main extends Component {

    componentDidMount() {

        Initialize()

        
    }

    constructor(props) {
        super(props);
        this.state = {  };
    }
    Google = () => {

        GoogleAuth().then((data)=>{  alert(JSON.stringify(data)) })

    }
    render() {
        return (
            <View>

  <View style={Styles.Button}><Button title="Continue with Google"  onPress={this.Google}/></View>     


                

            </View>            
        );
    }
}

export default Main;


const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Button:{
        position:'absolute',
        left:-150,
        width:300,
        height:100,

    }
  });

