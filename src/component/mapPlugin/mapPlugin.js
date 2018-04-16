import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Form, Item, Input, Label, } from 'native-base';
import { Text, Alert, Button, Keyboard, StyleSheet,View } from 'react-native'
import MapView from 'react-native-maps';

class MapPlugin extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: '',
    //         email: '',
    //         password: ''

    //     }
    // }

    

    render() {
        const { region } = this.props;
    console.log(region)
        return (
            <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 24.882626,
            longitude: 67.067256,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
         <MapView.Marker
            coordinate={{latitude: 24.882626,
            longitude: 67.067256}}
            title={"Software House"}
            description={"it is where our software house located"}
         />
        </MapView>
      </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 700,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });


export default connect(mapStateToProps, mapDispatchToProps)(MapPlugin);
