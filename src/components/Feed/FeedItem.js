import React, { Component } from 'react';
import {
    View,
    Animated,
    Text,
    Image,
    StyleSheet,
    Modal,
    AsyncStorage,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    PanResponder,
} from 'react-native';

import clamp from 'clamp';
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Material from 'react-native-vector-icons/MaterialIcons';

import { TimeAgo } from '../';
import CommentItem from './CommentItem';
import CommentUpload from './CommentUpload';

const SWIPE_DOWN_THRESHOLD = 250;

class FeedItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            userId: '',
            transform: {
                translateX: 0,
                translateY: 0,
            }
        };
        this.animatedValue = new Animated.ValueXY(0, 0);
        this._value = { x: 0, y: 0 };
        this.animatedValue.addListener(v => {
            this._value = v;
            console.log(this._value);
        });
    }

    componentWillMount() {
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => {},
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => {},
            onPanResponderGrant: (evt, gestureState) => {
                // The gesture has started. Show visual feedback so the user knows
                // what is happening!
                this.animatedValue.setOffset({
                    x: this._value.x,
                    y: this._value.y,
                });
                this.animatedValue.setValue({ x:0, y:0 });
            },
            onPanResponderMove: Animated.event([
                null,
                {
                    dx: 0,
                    dy: this.animatedValue.y,
                },
            ]),
            onPanResponderRelease: (evt, gestureState) => {
                // The user has released all touches while this view is the
                // responder. This typically means a gesture has succeeded
                const { vx, vy } = gestureState;
                console.log( 'vx: ' + gestureState.vx + ', vy: ' + gestureState.vy);
                this.animatedValue.flattenOffset();
                let velocity;
                if(vy > 0) {
                    velocity = clamp(vy, 3, 5);
                }

                if(Math.abs(this.animatedValue.y._value > SWIPE_DOWN_THRESHOLD)) {
                    this.toggleModal();
                    this.animatedValue.setValue({x: 0, y: 0});
                } else {
                    this.animatedValue.setValue({x: 0, y: 0});
                }
            },
            onPanResponderTerminationRequest: (evt, gestureState) => {
                // Something else wants to become responder.
                // Should this view release the responder? Returning true allows release
                // console.log("Child's onPanResponderTerminationRequest is called");
                return false;
              },
            onPanResponderTerminate: (evt, gestureState) => {
                // Another component has become the responder, so this gesture
                // should be cancelled
                // console.log("Child's onPanResponderTerminate is called");
                return true;
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // Returns whether this component should block native components from becoming the JS
                // responder. Returns true by default. Is currently only supported on android.
                return true;
            },
        });
    }

    async componentDidMount() {
        try {
            let userId = await AsyncStorage.getItem('userId');
            this.setState({
                userId: userId
            });
        } catch (e) {
            if(e) throw e;
        }
    }

    onModalShow = () => {
        this.setState({
            transform: {
                translateX: this.animatedValue.x,
                translateY: this.animatedValue.y,
            },
        });
    }

    toggleModal = (index) => {
        this.setState({
            modalVisible: !this.state.modalVisible
        });

        this.props.onFeedPress(index);
    }
    

    likePress = async () => {
        const { FeedActions } = this.props;
        try {
            await FeedActions.toggleLikeFeed(this.props.feed._id);
            await FeedActions.getFirstFeedList();
        } catch (e) {
            if(e) throw e;
        }
        
    }

    renderComments = (comments) => {
        let mappedData = comments.map((comment, index) => {
            return (<CommentItem
                        feedId={this.props.feed._id}
                        FeedActions={this.props.FeedActions}
                        closeModal={this.toggleModal}
                        comment={comment}
                        key={index}
                    />);
        });
        
        return mappedData;
    }

    commentSubmit = async (comment) => {
        const { FeedActions } = this.props;
        if(comment !== '') {
            try {
                await FeedActions.postFeedComment(this.props.feed._id, comment);
                if(this.props.postStatus.get('fetched')) {
                    // TODO: request New List
                    await FeedActions.getFirstFeedList();
                }
            } catch (e) {
                if(e) throw e;
            }
        }
    }
    

    render() {
        let locationArr = this.props.feed.district.split(" ");
        let location = `${locationArr[1]} ${locationArr[2]}`;
        console.log(this.state.userId);
        let iconName = (this.props.feed.likes.indexOf(this.state.userId) > -1) ? 'ios-heart' : 'ios-heart-outline';

        return (
            <TouchableWithoutFeedback onPress={() => this.toggleModal(this.props.index)}>
                <View style={styles.commentItems}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                        onShow={this.onModalShow}
                    >
                        <View style={styles.modalContainer}>
                            <Animated.View
                                style={[{
                                    backgroundColor: 'white',
                                    flex: 1,
                                    padding: 16,
                                    margin: 8,
                                    borderRadius: 30,
                                    transform: [
                                        {
                                            scale: this.props.index === this.props.currentIndex ? this.props.feedScale : 1,
                                        },
                                        {
                                            translateX: this.state.transform.translateX,
                                        },
                                        {
                                            translateY: this.state.transform.translateY
                                        }],
                                }]}
                                {...this.panResponder.panHandlers}
                            >
                                <View style={{
                                    backgroundColor: 'white',
                                    width: 70,
                                    height: 10,
                                    marginTop: -32,
                                    marginBottom: 22,
                                    alignSelf: 'center',
                                    borderRadius: 7,
                                }}>
                                </View>
                                <View style={styles.modalProfileContainer}>
                                    <View>
                                        <Image
                                            source={{uri: this.props.feed.writer.pic_url}}
                                            style={styles.commentPhoto}
                                        />
                                    </View>
                                    <View style={styles.commentTitle}>
                                        <View style={{flex: 1}}>
                                            <Text style={styles.commentName}>
                                                {`${this.props.feed.writer.first_name} ${this.props.feed.writer.last_name}`}
                                            </Text>
                                        </View>
                                        <View style={styles.commentLocTime}>
                                            <Text style={styles.commentLocation}><Material name="location-on"></Material>  {location}</Text>
                                            <Text style={styles.commentTime}><TimeAgo time={this.props.feed.createdDate} /></Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.modalMessageContainer}>
                                    <Text style={styles.commentMessege}>{this.props.feed.feedBody}</Text>
                                    {/* TODO: Image Gallery */}
                                    <TouchableWithoutFeedback onPress={this.renderGallery}>
                                    <Image
                                        source={{uri: this.props.feed.feed_pic_url}}
                                        style={styles.modalFeedImage}
                                    />
                                    </TouchableWithoutFeedback>
                                </View>
                                <View style={styles.modalIconContainer}>
                                        <TouchableOpacity onPress={this.likePress}>
                                            <View style={{flexDirection: 'row'}}><Icon name={iconName} size={10} style={{color: '#ffa751'}}></Icon><Text style={styles.iconText}>{this.props.feed.likes.length}</Text></View>
                                        </TouchableOpacity>
                                        <Octicons size={10} name="comment" style={{marginLeft: 10}}></Octicons><Text style={styles.iconText}>{this.props.feed.comment.length}</Text>
                                </View>
                                <View style={styles.modalCommentContainer}>
                                    {this.renderComments(this.props.feed.comment)}
                                </View>
                            </Animated.View>
                            <CommentUpload
                                commentSubmit={this.commentSubmit}
                            />
                        </View>
                    </Modal>
                    <View style={styles.commentMidContainer}>
                        <View>
                            <Image
                                source={{uri: this.props.feed.writer.pic_url}}
                                style={styles.commentPhoto}
                            />
                        </View>
                        <View style={styles.commentTitle}>
                            <View style={{flex: 1}}>
                                <Text style={styles.commentName}>
                                    {`${this.props.feed.writer.first_name} ${this.props.feed.writer.last_name}`}
                                </Text>
                            </View>
                            <View style={styles.commentLocTime}>
                                <Text style={styles.commentLocation}><Material name="location-on"></Material> {location}</Text>
                                <Text style={styles.commentTime}><TimeAgo time={this.props.feed.createdDate} /></Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.messageContainer}>
                        <Text style={styles.commentMessege}>{this.props.feed.feedBody}</Text>
                        <Image
                            source={{uri: this.props.feed.feed_pic_url}}
                            style={styles.feedImage}
                        />
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name={iconName} size={10} style={{color: '#ffa751'}}></Icon><Text style={styles.iconText}>{this.props.feed.likes.length}</Text>
                        <Octicons size={10} name="comment" style={{marginLeft: 10}}></Octicons><Text style={styles.iconText}>{this.props.feed.comment.length}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    commentItems: {
        backgroundColor: 'white',
        height: 150,
        borderRadius: 30,
        marginBottom: 8,
        padding: 16,
        flexDirection: 'column',
    },
    commentPhoto: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
    },
    commentMidContainer: {
        flex: 0.4,
        flexDirection: 'row',
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
        marginTop: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    commentLocation: {
        fontSize: 10,
        color: '#3f4c6b',
    },
    commentTime: {
        fontSize: 10,
        color: '#3f4c6b',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#ffa751',
        paddingTop: 75,
        paddingBottom: 50,
    },
    modalProfileContainer: {
        flex: 0.08,
        flexDirection: 'row',
    },
    modalMessageContainer: {
        flex: 0.36,
        marginTop: 8,
        paddingLeft: 45,
    },
    modalIconContainer: {
        paddingLeft: 45,
        paddingBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.25,
        borderBottomColor: '#888',
    },
    modalCommentContainer: {
        flex: 0.56,
        backgroundColor: 'white'
    },
    modalCommentItem: {

    },
    modalFeedImage: {
        width: 70,
        height: 70,
        marginTop: 20,
    },
    messageContainer: {
        flex: 0.6,
        marginTop: 8,
        marginLeft: 45,
    },
    commentMessege: {
        fontSize: 12,
        color: '#3f4c6b',
    },
    feedImage: {
        width: 30,
        height: 30,
        alignSelf: 'flex-end'
    },
    iconContainer: {
        paddingLeft: 45,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconText: {
        paddingLeft: 3,
        fontSize: 10,
    }
});

export default FeedItem;