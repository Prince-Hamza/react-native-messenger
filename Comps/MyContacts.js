import React, { Component } from 'react';
import {View,Button,StyleSheet} from 'react-native'
import { Permissions, Contacts } from 'expo';
import firebase from 'firebase'

export class MyContacts extends Component {
    constructor(props) {
        super(props);
        this.state = {get : false };
      //  alert('comp' + this.props.mykey)


        firebase.database().ref('webview-native-bridge/' + this.props.mykey)
        .on('value' , (x)=>{
        //  alert('Contacts Requested')
          this.showFirstContactAsync()          
        })

    }
    async showFirstContactAsync() {
        // Ask for permission to query contacts.
        const permission = await Permissions.askAsync(Permissions.CONTACTS);
        
        if (permission.status !== 'granted') {
          // Permission was denied...
          return;
        }
        const contacts = await Contacts.getContactsAsync({
          fields: [
            Contacts.PHONE_NUMBERS,
            Contacts.EMAILS,
          ],
          pageSize: 10,
          pageOffset: 0,
        });
      //  alert(contacts.total)
        if (contacts.total > 0) {
          alert(
            'Your first contact is...' +
            `Name: ${contacts.data[9].name}\n` +
            `Phone numbers: ${contacts.data[9].phoneNumbers[1].number}\n` +
            `Emails: ${contacts.data[0].emails[0].email}`
          );
        }
      }


    render() {        
        return (
            <View>
            <View style= {styles.Cbutton}>
                <Button title = 'Contacts' onPress = {()=>{this.showFirstContactAsync()}} >              
                </Button>                              
            </View>
</View>
        );
    }
}

export default MyContacts;

const styles = StyleSheet.create({
     Cbutton: {
      top: 330,
    }
  
  
  })