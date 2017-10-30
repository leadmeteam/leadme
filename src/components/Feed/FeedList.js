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
    commentItems: {
        backgroundColor: 'white',
        height: 150,
        borderRadius: 30,
        marginBottom: 8,
        padding: 16,
        flexDirection: 'column'
    },
    commentPhoto: {
        width: 35,
        height: 35,
    },
    commentMidContainer: {
        flex: 0.35,
        flexDirection: 'row'
    },
    commentTitle: {
        flex: 1,
        marginLeft: 10,
        flexDirection: 'column'
    },
        commentName: {
            fontSize: 18,
        },
        commentLocTime: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        commentLocation: {
            fontSize: 10,
            color: '#3f4c6b'
        },
        commentTime: {
            fontSize: 10,
            color: '#3f4c6b'
        },
        messageContainer: {
            flex: 0.65,
            marginTop: 8,
            marginLeft: 45
        },
        commentMessege: {
            fontSize: 12,
            color: '#3f4c6b',
        },
        commentHeart: {

        },
        commentReply: {

        },
        commentMore: {

        }
});

export default FeedList;