import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    View,
    Animated,
    Easing,
    Modal,
    StyleSheet,
    StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
    Header,
    SideDate,
    FeedList,
    Search,
} from '../components';

import * as uiDuck from '../ducks/ui.duck';
import * as feedDuck from '../ducks/feed.duck';

StatusBar.setBarStyle('light-content', true);       // 상태바 글자 흰색
// StatusBar.setBarStyle('default', true);             // 상태바 글자 기본
// StatusBar.setBarStyle('dark-content', true);        // 상태바 글자 검은색

class FeedScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };

        this.springValue = new Animated.Value(1);
    }

    componentWillUnmount() {
        this.springValue.setValue(0);
    }

    handleOnPress = () => {
        // console.log(this.props.navigation);
        // this.props.navigation.navigate('Search');
        this.setState({
            modalVisible: !this.state.modalVisible
        });
    }

    springAnim = (index) => {
        const { UiActions } = this.props;
        this.springValue.setValue(0.7);

        Animated.spring(
            this.springValue, {
              toValue: 1,
              friction: 4,
              tension: 50,
              // speed: 5,
              // bounciness: 8,
            }
        ).start();
        UiActions.setFeedIndex({value: index});
        
    }

    render() {
        return (
            <View style={styles.feedContainer}>
                    <Header
                        name={"ios-search"}
                        title={"FEED"}
                        handlePress={this.handleOnPress}
                    />
                    <Modal
                        animationType="slide"
                        visible={this.state.modalVisible}
                    >
                        <Search
                            closeModal={this.handleOnPress}
                            FeedActions={this.props.FeedActions}
                            valid={this.props.valid.searchFeed}
                            searchFeeds={this.props.searchFeeds}
                            status={this.props.status.searchFeed}
                        />
                    </Modal>
                    <View style={styles.midContainer}>
                        <SideDate />
                        <FeedList
                            onFeedPress={this.springAnim}
                            feedScale={this.springValue}
                            postStatus={this.props.status}
                            firstListStatus={this.props.status.firstList}
                            feeds={this.props.feeds}
                            listValid={this.props.valid}
                            FeedActions={this.props.FeedActions}
                            currentIndex={this.props.currentIndex}
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
        status: {
            post: state.feed.getIn(['requests', 'postFeed']),
            firstList: state.feed.getIn(['requests', 'getFirstFeedList']),
            feedPost: state.feed.getIn(['requests', 'postFeedComment']),
            newList: state.feed.getIn(['requests', 'getNewFeedList']),
            searchFeed: state.feed.getIn(['requests', 'searchFeed']),
        },
        valid: {
            firstList: state.feed.getIn(['valid', 'firstFeedList']),
            searchFeed: state.feed.getIn(['valid', 'searchFeed'])
        },
        authInfo: state.auth.get('authInfo'),
        feeds: state.feed.get('feeds'),
        searchFeeds: state.feed.get('searchFeeds'),
        currentIndex: state.ui.get('currentIndex'),
    }),
    dispatch => ({
        UiActions: bindActionCreators(uiDuck, dispatch),
        FeedActions: bindActionCreators(feedDuck, dispatch),
    })
)(FeedScreen);

