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

class FeedList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            refreshing: false
        };
    }
    handleRefresh = () => {
        console.log("refresh called");
    }

    render() {
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
                <FeedUpload />
                <View style={styles.commentItems}>
                    <View style={styles.commentMidContainer}>
                        <View>
                            <Image
                                source={require('../../imgs/profile_image.png')}
                                style={styles.commentPhoto}
                            />
                        </View>
                        <View style={styles.commentTitle}>
                            <View style={{flex: 1}}>
                                <Text style={styles.commentName}>Mr.Guide Lee</Text>
                            </View>
                            <View style={styles.commentLocTime}>
                                <Text style={styles.commentLocation}>⚲ Seoul, 성북구 안암동</Text>
                                <Text style={styles.commentTime}>방금 전</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.messageContainer}>
                        <Text style={styles.commentMessege}>저는 안암동에 사는 가이드입니다. 다들 안녕하세요! 좋은 하루 되세요~ 그리고 좋은 여행 약속드립니다. 저와 함께하는 여행은 꿀잼이니까 많은 기대 부탁드립니다!!!!!</Text>
                    </View>
                </View>
                <View style={styles.commentItems}>
                    <View style={styles.commentMidContainer}>
                        <View>
                            <Image
                                source={require('../../imgs/profile_image.png')}
                                style={styles.commentPhoto}
                            />
                        </View>
                        <View style={styles.commentTitle}>
                            <View style={{flex: 1}}>
                                <Text style={styles.commentName}>Mr.Guide Lee</Text>
                            </View>
                            <View style={styles.commentLocTime}>
                                <Text style={styles.commentLocation}>⚲ Seoul, 성북구 안암동</Text>
                                <Text style={styles.commentTime}>방금 전</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.messageContainer}>
                        <Text style={styles.commentMessege}>저는 안암동에 사는 가이드입니다. 다들 안녕하세요! 좋은 하루 되세요~ 그리고 좋은 여행 약속드립니다. 저와 함께하는 여행은 꿀잼이니까 많은 기대 부탁드립니다!!!!!</Text>
                    </View>
                </View>
                <View style={styles.commentItems}>
                    <View style={styles.commentMidContainer}>
                        <View>
                            <Image
                                source={require('../../imgs/profile_image.png')}
                                style={styles.commentPhoto}
                            />
                        </View>
                        <View style={styles.commentTitle}>
                            <View style={{flex: 1}}>
                                <Text style={styles.commentName}>Mr.Guide Lee</Text>
                            </View>
                            <View style={styles.commentLocTime}>
                                <Text style={styles.commentLocation}>⚲ Seoul, 성북구 안암동</Text>
                                <Text style={styles.commentTime}>방금 전</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.messageContainer}>
                        <Text style={styles.commentMessege}>저는 안암동에 사는 가이드입니다. 다들 안녕하세요! 좋은 하루 되세요~ 그리고 좋은 여행 약속드립니다. 저와 함께하는 여행은 꿀잼이니까 많은 기대 부탁드립니다!!!!!</Text>
                    </View>
                </View>
                <View style={styles.commentItems}>
                    <View style={styles.commentMidContainer}>
                        <View>
                            <Image
                                source={require('../../imgs/profile_image.png')}
                                style={styles.commentPhoto}
                            />
                        </View>
                        <View style={styles.commentTitle}>
                            <View style={{flex: 1}}>
                                <Text style={styles.commentName}>Mr.Guide Lee</Text>
                            </View>
                            <View style={styles.commentLocTime}>
                                <Text style={styles.commentLocation}>⚲ Seoul, 성북구 안암동</Text>
                                <Text style={styles.commentTime}>방금 전</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.messageContainer}>
                        <Text style={styles.commentMessege}>저는 안암동에 사는 가이드입니다. 다들 안녕하세요! 좋은 하루 되세요~ 그리고 좋은 여행 약속드립니다. 저와 함께하는 여행은 꿀잼이니까 많은 기대 부탁드립니다!!!!!</Text>
                    </View>
                </View>
                
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