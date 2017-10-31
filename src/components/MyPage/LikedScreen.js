import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    TextInput,
    AsyncStorage,
    ActivityIndicator,
    Image,
} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Material from 'react-native-vector-icons/MaterialIcons';

import TimeAgo from '../Common/TimeAgo';

class LikedScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
            userId: '',
            refreshing: false,
        };
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

    renderSearchResult = (datas) => {
        console.log(datas);
        const mappedData = datas.map((item, index) => {
            console.log(item.toJS());
            let locationArr = item.get('district').split(" ");
            let location = `${locationArr[1]} ${locationArr[2]}`;
            let iconName = (item.get('likes').indexOf(this.state.userId) > -1) ? 'ios-heart' : 'ios-heart-outline';
            return (
                <View style={styles.commentItems} key={index}>
                    <View style={styles.commentMidContainer}>
                        <View>
                            <Image
                                source={{uri: item.getIn(['writer', 'pic_url'])}}
                                style={styles.commentPhoto}
                            />
                        </View>
                        <View style={styles.commentTitle}>
                            <View style={{flex: 1}}>
                                <Text style={styles.commentName}>
                                    {`${item.getIn(['writer', 'first_name'])} ${item.getIn(['writer', 'last_name'])}`}
                                </Text>
                            </View>
                            <View style={styles.commentLocTime}>
                                <Text style={styles.commentLocation}><Material name="location-on"></Material> {location}</Text>
                                <Text style={styles.commentTime}><TimeAgo time={item.get('createdDate')} /></Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.messageContainer}>
                        <Text style={styles.commentMessege}>{item.get('feedBody')}</Text>
                        <Image
                            source={{uri: item.get('feed_pic_url')}}
                            style={styles.feedImage}
                        />
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name={iconName} size={10} style={{color: '#ffa751'}}></Icon><Text style={styles.iconText}>{item.get('likes').size}</Text>
                        <Octicons size={10} name="comment" style={{marginLeft: 10}}></Octicons><Text style={styles.iconText}>{item.get('comment').size}</Text>
                    </View>
                </View>
            );
        });

        return mappedData;
    }

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                { this.props.status.get('fetching') ? <ActivityIndicator /> : undefined }
                { this.props.valid ? this.renderSearchResult(this.props.searchFeeds) : undefined }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    commentItems: {
        backgroundColor: 'white',
        height: 150,
        marginTop: 8,
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
    messageContainer: {
        flex: 0.6,
        marginTop: 8,
        marginLeft: 45,
    },
    commentMessege: {
        fontSize: 12,
        color: '#3f4c6b',
    },
    commentWrite: {
        width: Dimensions.get('window').width,
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#ffa751',
    },
    writeWrapper: {
        flex: 1,
        margin: 8,
        paddingLeft: 3,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    sendBtn: {
        alignSelf: 'center',
        marginLeft: -8,
        padding: 7,
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

export default LikedScreen;