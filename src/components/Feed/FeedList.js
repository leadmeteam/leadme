import React, { Component } from 'react';
import {
    FlatList,
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

    renderFeeds = ({item, index}) => (
        <FeedItem
            key={item._id + ',' + index}
            index={index}
            feed={item}
            postStatus={this.props.postStatus.feedPost}
            FeedActions={this.props.FeedActions}
            onFeedPress={this.props.onFeedPress}
            feedScale={this.props.feedScale}
            currentIndex={this.props.currentIndex}
        />
    );

    keyExtractor = (item, index) => item._id;

    render() {
        const emptyComponent = undefined;
        console.log(this.props.feeds.toJS());
        return (
            <View style={styles.commentContainer}>
                <FeedUpload
                    postStatus={this.props.postStatus.post}
                    FeedActions={this.props.FeedActions}
                    authInfo={this.props.authInfo}
                />
                { this.props.listValid.firstList ? <FlatList
                    data={this.props.feeds.toJS()}
                    renderItem={this.renderFeeds}
                    keyExtractor={this.keyExtractor}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.handleRefresh}
                        />
                    }
                /> : emptyComponent }
                
            </View>
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