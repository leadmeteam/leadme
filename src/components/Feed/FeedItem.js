import React, { Component } from 'react';
import {
    View,
    Animated,
    Text,
    Image,
    StyleSheet,
    Modal,
    TouchableWithoutFeedback,
    PanResponder,
} from 'react-native';
import TimeAgo from 'react-native-timeago';
import clamp from 'clamp';

const SWIPE_DOWN_THRESHOLD = 250;

class FeedItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
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
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
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

    onModalShow = () => {
        this.setState({
            transform: {
                translateX: this.animatedValue.x,
                translateY: this.animatedValue.y,
            },
        });
    }

    feedPress = (e) => {
        console.log(e.nativeEvent);
    }

    toggleModal = (index) => {
        this.setState({
            modalVisible: !this.state.modalVisible
        });

        this.props.onFeedPress(index);
    }

    render() {
        let locationArr = this.props.feed.get('district').split(" ");
        let location = `${locationArr[1]} ${locationArr[2]}`;

        console.log(this.state);
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
                        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0, 0.5)'}}>
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
                                <View style={styles.commentMidContainer}>
                                    <View>
                                        <Image
                                            source={{uri: this.props.feed.getIn(['writer', 'pic_url'])}}
                                            style={styles.commentPhoto}
                                        />
                                    </View>
                                    <View style={styles.commentTitle}>
                                        <View style={{flex: 1}}>
                                            <Text style={styles.commentName}>
                                                {this.props.feed.getIn(['writer', 'first_name']) + this.props.feed.getIn(['writer', 'last_name'])}
                                            </Text>
                                        </View>
                                        <View style={styles.commentLocTime}>
                                            <Text style={styles.commentLocation}>⚲ {location}</Text>
                                            <Text style={styles.commentTime}><TimeAgo time={this.props.feed.get('createdDate')} /></Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.messageContainer}>
                                    <Text style={styles.commentMessege}>{this.props.feed.get('feedBody')}</Text>
                                </View>
                            </Animated.View>
                        </View>
                    </Modal>
                    <View style={styles.commentMidContainer}>
                        <View>
                            <Image
                                source={{uri: this.props.feed.getIn(['writer', 'pic_url'])}}
                                style={styles.commentPhoto}
                            />
                        </View>
                        <View style={styles.commentTitle}>
                            <View style={{flex: 1}}>
                                <Text style={styles.commentName}>
                                    {this.props.feed.getIn(['writer', 'first_name']) + this.props.feed.getIn(['writer', 'last_name'])}
                                </Text>
                            </View>
                            <View style={styles.commentLocTime}>
                                <Text style={styles.commentLocation}>⚲ {location}</Text>
                                <Text style={styles.commentTime}><TimeAgo time={this.props.feed.get('createdDate')} /></Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.messageContainer}>
                        <Text style={styles.commentMessege}>{this.props.feed.get('feedBody')}</Text>
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
        flexDirection: 'column'
    },
    commentPhoto: {
        width: 35,
        height: 35,
        borderRadius: 17.5
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
});

export default FeedItem;