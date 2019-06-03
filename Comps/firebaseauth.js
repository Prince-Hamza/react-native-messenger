import Expo from 'expo';
import firebase from 'firebase'

export async function GoogleAuth() {
  try {
    const result = await Expo.Google.logInAsync({
      androidClientId: '272284064749-p61ji1pgisvk1d5s2k7kc56kch0vssi9.apps.googleusercontent.com',
      // iosClientId: '272284064749-p61ji1pgisvk1d5s2k7kc56kch0vssi9.apps.googleusercontent.com', 
       scopes: ["profile", "email"] });

    if (result.type === "success") { // I get result object

     

      return getuserInfo(result.idToken,result.accessToken)     
    
    }

    return { cancelled: true };

  } catch (e) {
    return { error: true,
    Reason:e };
  }
}

 export const getuserInfo = (idToken , accessToken) => {

  const credential = firebase.auth.GoogleAuthProvider.credential( idToken,accessToken);
    
   return firebase.auth().signInWithCredential(credential)
    .then(user => {
      UserInfo = user     
    })

    .catch(error => {console.log(error);});
  
}


export var UserInfo
