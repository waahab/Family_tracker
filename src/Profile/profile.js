import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native'
import { signinAction } from "../../Action/AuthAction";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View>
                <Text>
                    Profile
            </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }

}
const mapDispatchToProps = (dispatch) => {
    return ({
        signin: (user) => {
            dispatch(signinAction(user))
        }
    })
}



export default connect(mapStateToProps, mapDispatchToProps)(Login);
