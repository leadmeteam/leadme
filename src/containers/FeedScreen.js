import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    View,
    StyleSheet,
    StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
    Header,
    SideDate,
    FeedList,
} from '../components';

import * as uiDuck from '../ducks/ui.duck';

StatusBar.setBarStyle('light-content', true);       // 상태바 글자 흰색
// StatusBar.setBarStyle('default', true);             // 상태바 글자 기본
// StatusBar.setBarStyle('dark-content', true);        // 상태바 글자 검은색

class FeedScreen extends Component {
    handleOnPress = () => {
        console.log('pressed');
    }
    render() {
        return (
            <View style={styles.feedContainer}>
                    <Header
                        name={"ios-search"}
                        title={"Feed"}
                        handlePress={this.handleOnPress}
                    />
                    <View style={styles.midContainer}>
                        <SideDate />
                        <FeedList
                            authInfo={this.props.authInfo}
                        />
                        {/* <LinearGradient locations={[0,1]} colors={['rgba(255, 167, 81, 0)', 'rgba(255, 167, 81, 1)']} style={styles.gradient}>
                        </LinearGradient> */}
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    gradient: {
        height: 30,
        position: "absolute",
        width: 312,
        bottom: 0,
        right: 0,
    },
    feedContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 20,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: '#ffa751',
    },
    midContainer: {
        flex: 0.87,
        flexDirection: 'row',
    },
});

export default connect(
    state => ({
        visible: state.ui.get('visible'),
        authInfo: state.auth.get('authInfo')
    }),
    dispatch => ({
        UiActions: bindActionCreators(uiDuck, dispatch)
    })
)(FeedScreen);

