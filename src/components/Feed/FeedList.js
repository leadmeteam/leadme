import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    RefreshControl,
    StyleSheet
} from 'react-native';
import FeedUpload from './FeedUpload';
import FeedItem from './FeedItem';

class FeedList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            refreshing: false
        };
    }

    async componentDidMount() {
        const { FeedActions } = this.props;
        try {
            await FeedActions.getFirstFeedList();
        } catch (e) {
            if(e) throw e;
        }
    }
    
    handleRefresh = async () => {
        const { FeedActions } = this.props;
        try {
            await FeedActions.getFirstFeedList();
        } catch (e) {
            if(e) throw e;
        }
    }

    renderFeeds = (datas) => {
        const mappedFeed = datas.map((feed, index) => {
            return <FeedItem
                        key={feed._id + ',' + index}
                        index={index}
                        feed={feed}
                        onFeedPress={this.props.onFeedPress}
                        feedScale={this.props.feedScale}
                        currentIndex={this.props.currentIndex}
                    />;
        });

        return mappedFeed;
    }

    render() {
        const emptyComponent = undefined;

        return (
            <ScrollView
                style={styles.commentContainer}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.handleRefresh}
                    />
                }
            >
                <FeedUpload
                    postStatus={this.props.postStatus}
                    FeedActions={this.props.FeedActions}
                    authInfo={this.props.authInfo}
                />
                { this.props.listValid.firstList ? this.renderFeeds(this.props.feeds) : emptyComponent }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    commentContainer: {
        flex: 1,
        flexDirection: 'column',
        // backgroundColor: 'steelblue',
        marginLeft: 16,
    },
});

export default FeedList;