import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    AsyncStorage,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FBLogin, FBLoginManager } from 'react-native-facebook-login';

import * as authDuck from '../ducks/auth.duck';

class LoginScreen extends Component {
    componentDidMount() {
        this.getStorage();
    }
    handleSubmit = async (data) => {
        const { AuthActions } = this.props;
        try {
            await AuthActions.signUp(data.token);
            await AsyncStorage.setItem('token', data.token);
            await AsyncStorage.setItem('tokenExpired', data.tokenExpirationDate);
        } catch (e) {
            if(e) throw e;
        }
    }

    // TODO LIST: expirationDate와 현재 날짜 비교하여 true false 판별 하기
    getStorage = async () => {
        try {
            let valueToken = await AsyncStorage.getItem('token');
            let expirationDate = await AsyncStorage.getItem('tokenExpired');
            // console.log(valueToken);
            console.log(expirationDate);
            let todayDate = new Date();
            console.log(todayDate);
            if (valueToken !== null) {
                // 로그인 정보 status 보내기.
                return true;
            } else {
                return false;
            }
        } catch (error) {
            if(error) return false;
        }
    };

    render() {
        return (
            <View style={styles.container}>
                { this.props.status.get('fetching') ? <ActivityIndicator /> :
                    <FBLogin style={{ marginBottom: 10, }}
                        ref={(fbLogin) => { this.fbLogin = fbLogin }}
                        permissions={["email", "user_friends"]}
                        loginBehavior={FBLoginManager.LoginBehaviors.Native}
                        onLogin={(data) => {
                            console.log("Logged in!");
                            this.handleSubmit(data.credentials);
                        }}
                        onLogout={() => {
                            console.log("Logged out.");
                            this.setState({ user : null });
                        }}
                        onLoginFound={(data) => {
                            console.log("Existing login found.");
                            console.log(data);
                            this.setState({ user : data.credentials });
                        }}
                        onLoginNotFound={() => {
                            console.log("No user logged in.");
                            this.setState({ user : null });
                        }}
                        onError={(data) => {
                            console.log("ERROR");
                            console.log(data);
                        }}
                        onCancel={() => {
                            console.log("User cancelled.");
                        }}
                        onPermissionsMissing={(data) => {
                            console.log("Check permissions!");
                            console.log(data);
                        }}
                    />}
                    <Button title="탭바 가기" onPress={() => this.props.navigation.navigate('TabNavigator')} />    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    }
})

export default connect(
    state => ({
        status: state.auth.getIn(['requests', 'signUp']),
        valid: state.auth.getIn(['valid', 'signUp'])
    }),
    dispatch => ({
        AuthActions: bindActionCreators(authDuck, dispatch)
    })
)(LoginScreen);
