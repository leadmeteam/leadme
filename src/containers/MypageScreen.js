import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Header, Profile, LikedScreen, WroteScreen } from '../components';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => <View style={[ styles.tabViewContainer, { backgroundColor: '#D7D9DB' } ]} />;
const SecondRoute = () => <View style={[ styles.tabViewContainer, { backgroundColor: '#D7D9DB' } ]} />;

class MypageScreen extends Component {
    state = {
        index: 0,
        routes: [
            { key: '1', title: '좋아요 한 글' },
            { key: '2', title: '내가 쓴 글' },
        ],
    };
    
    _handleIndexChange = index => this.setState({ index });
    
    _renderHeader = props => (
        <TabBar
            style={{backgroundColor: 'rgba(255,255,255,0.4)'}}
            indicatorStyle={{backgroundColor: '#ffa751'}}
            labelStyle={{color: '#fff'}}
            {...props}
        />
    );
    
    _renderScene = SceneMap({
        '1': FirstRoute,
        '2': SecondRoute,
    });

    render() {
        return (
            <View style={styles.mypageContainer}>
                <Header
                    name={"ios-chatboxes-outline"}
                    title={"MY"}
                />
                <Profile />
                <TabViewAnimated
                    style={styles.container}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onIndexChange={this._handleIndexChange}
                />
            </View>
        )
    }
}

const styles = {
    mypageContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 20,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: '#3f4c6b',
    },
    tabViewContainer: {
        flex: 1,
    },
}

export default MypageScreen;
