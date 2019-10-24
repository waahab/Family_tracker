import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Router, Scene } from 'react-native-router-flux';
import Register from './component/Auth/Register';
import Login from './component/Auth/Login';
import Home from './component/Home/home';
import MapPlugin from './component/mapPlugin/mapPlugin';
class Routers extends Component {
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyCpToQ_D1SN_gTX74tG8M5g-L5X7t8EOJ0",
            authDomain: "newproject-15295.firebaseapp.com",
            databaseURL: "https://newproject-15295.firebaseio.com",
            projectId: "newproject-15295",
            storageBucket: "",
            messagingSenderId: "418148308231"
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene
                        key='mapPlugin'
                        component={MapPlugin}
                        title="mapPlugin"
                        initial
                    />
                    <Scene
                        key='signin'
                        component={Login}
                        title="Signin"
                    />
                    <Scene
                        key='signup'
                        component={Register}
                        title="Signup"

                    />
                    <Scene
                        key='Home'
                        component={Home}
                        title="Home"
                    />
                </Scene>
            </Router>
        )
    }

}

export default Routers;