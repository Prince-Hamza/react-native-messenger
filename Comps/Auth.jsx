import React, { Component } from 'react';
import { View } from 'react-native';
export class Auth extends Component {
    constructor(props) {
        super();
        this.state = {
        Login : false,
        UserInfo : []
    }
//alert('inauth')
  this.GoogleAuth()
      
    } // constr

    GoogleAuth = () => {
        try {
          const result = Expo.Google.logInAsync({
            androidClientId: '272284064749-p61ji1pgisvk1d5s2k7kc56kch0vssi9.apps.googleusercontent.com',
            // iosClientId: ***, 
             scopes: ["profile", "email"] });
      
          if (result.type === "success") { // I get result object
      
            return this.getuserInfo(result.idToken,result.accessToken)     
          
          }
      
          return { cancelled: true };
      
        } catch (e) {
          return { error: true };
        }
      }


    
    getuserInfo = (idToken , accessToken) => {
       // alert('get')
        const credential = firebase.auth.GoogleAuthProvider.credential( idToken,accessToken);          
         firebase.auth().signInWithCredential(credential)      
          .then(user => {      
           return console.log( user)})      
          .catch(error => {console.log(error);});
        
      }
    
    render() {
        return (

           <View></View>
            
        );
    }
}

export default Auth ;