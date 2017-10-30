import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TimeAgo from '../Common/TimeAgo';

class CommentItem extends Component {

    handleRemoveComment = async () => {
        console.log('aa');
        const { FeedActions } = this.props;
        console.log(this.props);
        try {
            await FeedActions.removeFeedComment(this.props.feedId, this.props.comment._id);
            await FeedActions.getFirstFeedList();
        } catch (e) {
            if(e) throw e;
        }
    }

    render() {
        console.log(this.props);
        return (
            <View style={styles.feedCommentContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={styles.avatar} source={{uri: this.props.comment.pic_url}} />
                    <View style={{flex: 0.9, marginLeft: 8}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 10}}>Hwan Seob Lee</Text>
                            <Text style={{fontSize: 8}}><TimeAgo time={this.props.comment.createdDate} /></Text>
                        </View>
                        <Text style={{fontSize: 10, marginTop: 10}}>{this.props.comment.commentBody}11</Text>
                    </View>
                    <View style={{flex: 0.1, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={this.handleRemoveComment}>
                            <Icon style={{marginLeft: 8}} name="ios-close" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    feedCommentContainer: {
        height: 87,
        backgroundColor: 'white',
        borderBottomWidth: 0.25,
        borderBottomColor: '#999',
        padding: 20,
        justifyContent: 'center',
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
});

export default CommentItem;