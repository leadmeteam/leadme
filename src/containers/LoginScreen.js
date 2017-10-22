import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    AsyncStorage,
    ActivityIndicator
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FBLogin, FBLoginManager } from 'react-native-facebook-login';
import moment from 'moment';

import * as authDuck from '../ducks/auth.duck';

const resetAction = (routeName) => NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName })
    ]
});

class LoginScreen extends Component {
    componentWillMount() {
        const isAccessTokenValid = this.getStorage();
        if(isAccessTokenValid) {
            this.props.navigation.dispatch(resetAction('TabNavigator'));
        }
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
            let expireDayString = moment(expirationDate).format('YYYYMMDD');
            
            let todayDate = new Date();
            let dd = todayDate.getDate();
            let mm = todayDate.getMonth()+1; //January is 0!
            let yyyy = todayDate.getFullYear();
            let todayString = `${yyyy}${mm}${dd}`;
            
            let parsedToday = parseInt(todayString, 10);
            let parsedExpire = parseInt(expireDayString, 10);
            
            if(expireDayString <= todayString) {
                return false;
            } else if (valueToken !== null) {
                // 로그인 정보 status 보내기.
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }

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
