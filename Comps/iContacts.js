import React, { Component } from 'react';
import {View,Button,StyleSheet} from 'react-native'


export class iContacts extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
       // alert('ic')
    }
    getContacts = () => {
        var Contacts = require('react-native-contacts') 
        Contacts.getAll((err, contacts) => {
          if(err && err.type === 'permissionDenied'){
            // x.x
          } else {
            console.log(contacts)
          }
        })
    }

    render() {
        this.getContacts()
       return(<View> <Button></Button> </View>)
    }
}

export default iContacts;