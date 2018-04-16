import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Form, Item, Input, Label, } from 'native-base';
import { Text, Alert, Button, Keyboard } from 'react-native'
import { signupAction } from "../../Action/AuthAction";

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''

        }
    }

    onSubmit() {

        let user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }
        this.setState({
            username: '',
            email: '',
            password: ''
        })
        // alert(user.email + ' ' + user.password + ' ' + user.username)
        Keyboard.dismiss()
        this.props.signup(user)

        // Actions.Home()
    }

    render() {
        return (
            <Container >
                <Content >

                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input
                            onChangeText={username => this.setState({ username })}
                            value={this.state.username}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            onChangeText={email => this.setState({ email })}
                            keyboardType={'email-address'}
                            type='email'
                        />

                    </Item>
                    <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input
                            onChangeText={password => this.setState({ password })}
                            type='password'
                            secureTextEntry={true}
                        />

                    </Item>
                    <Button block info style={{ margin: 10 }} onPress={this.onSubmit.bind(this)}
                        title='Signup'
                    />

                </Content>

            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }

}
const mapDispatchToProps = (dispatch) => {
    return ({
        signup: (user) => {
            dispatch(signupAction(user))
        }
    })
}



export default connect(mapStateToProps, mapDispatchToProps)(Register);
