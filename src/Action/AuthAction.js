import firebase from 'firebase';
import ActionTypes from './ActionTypes';
import { Actions } from 'react-native-router-flux';







export function signupAction(user) {
    return dispatch => {
        alert(user.email + '  ' + user.username + '  ' + user.password)

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(
            (createdUser) => {
                alert("signin successful");
                user.uid = createdUser.uid
                firebase.database().ref('/').child(`user/${createdUser.uid}`).set(user)
                Actions.Home()
            }
        )
    }
}


export function signinAction(user) {

    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(user.email,user.password).then(
            (signedInUser)=>{
                console.log(signedInUser.uid)
                dispatch({type:ActionTypes.USER, payload:signedInUser})
                Actions.Home()
        })
    }
}