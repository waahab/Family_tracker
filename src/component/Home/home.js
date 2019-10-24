import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Form, Item, Input, Label, View } from 'native-base';
import { Text, StyleSheet, Button } from 'react-native'
import CameraRollPicker from 'react-native-camera-roll-picker';
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gallery: false

        }
    }
    getSelectedImages = (images) => {
        console.log(images)
    }
    gallery = () => {
        this.setState({ gallery: true })
    }
    home = () => {
        this.setState({ gallery: false })
    }

    render() {
        return (
            (this.state.gallery) ? (
                <View style={styles.container}>
                    <Button block onPress={this.home.bind(this)} title='Done' style={{ marginTop: 10 }} />
                    <CameraRollPicker
                        callback={this.getSelectedImages.bind(this)} />

                </View>
            )
                :
                (
                    <View>
                        <Button block onPress={this.gallery.bind(this)}
                            title='Upload Photos'
                        />
                        <Text>Firebase images</Text>
                    </View>
                )

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        // marginTop:10
    },
    gallery: {
        // flex:1,
        // marginTop:10
    }
})


function mapStateToProps(state) {
    return ({
        // user: state.root.user
    })

}
function mapDispatchToProps(dispatch) {
    return ({
    })
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);
