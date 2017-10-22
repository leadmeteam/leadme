import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Button, FlatList, StatusBar, Image } from 'react-native';

import * as uiDuck from '../ducks/ui.duck';

StatusBar.setBarStyle('light-content', true);       // 상태바 글자 흰색
// StatusBar.setBarStyle('default', true);             // 상태바 글자 기본
// StatusBar.setBarStyle('dark-content', true);        // 상태바 글자 검은색

class FeedScreen extends Component {
    handleShowBtn = () => {
        const { UiActions } = this.props;
        UiActions.showButton();
    }

    render() {
        return (
            // <View style={styles.container}>
            //     <Text>
            //         FeedScreen
            //     </Text>
            //     <Button title="SHOW BUTTON" onPress={this.handleShowBtn} />
            //     { this.props.visible ? <Text>나왔다</Text> : undefined }
            // </View>

            <View style={styles.feedContainer}>
                <View style={styles.subjectContainer}>
                    <Text style={styles.subjectStyle}>Feed</Text>
                </View>
                <View style={styles.midContainer}>
                    <View style={styles.dateContainer}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            style={styles.dateItems}
                            data={[
                                {key: '1 \nOCT'},
                                {key: '2'},
                                {key: '3'},
                                {key: '4'},
                                {key: '5'},
                                {key: '6'},
                                {key: '7'},
                                {key: '8'},
                                {key: '9'},
                                {key: '10'},
                                {key: '11'},
                                {key: '12'},
                                {key: '13'},
                                {key: '14'},
                                {key: '15'},
                                {key: '16'},
                                {key: '17'},
                                {key: '18'},
                                {key: '19'},
                                {key: '20'},
                                {key: '21'},
                                {key: '22'},
                                {key: '23'},
                                {key: '24'},
                                {key: '25'},
                                {key: '26'},
                                {key: '27'},
                                {key: '28'},
                                {key: '29'},
                                {key: '30'},
                            ]}
                            renderItem={({item}) => <Text style={styles.dateItem}>{item.key}</Text>}
                        />
                    </View>
                    <View style={styles.commentContainer}>
                        <View style={styles.commentItems}>
                            <Image
                                source={require('../imgs/profile_image.png')}
                                style={styles.commentPhoto}
                            />
                            <View style={styles.commentMidContainer}>
                                <Text style={styles.commentName}>Mr.Guide Lee</Text>
                                <View style={styles.commentLocTime}>
                                    <Text style={styles.commentLocation}>⚲ Seoul, 성북구 안암동</Text>
                                    <Text style={styles.commentTime}>방금 전</Text>
                                </View>
                                <Text style={styles.commentMessege}>저는 안암동에 사는 가이드입니다. 다들 안녕하세요! 좋은 하루 되세요~ 그리고 좋은 여행 약속드립니다. 저와 함께하는 여행은 꿀잼이니까 많은 기대 부탁드립니다!!!!!</Text>
                            </View>
                        </View>
                    </View>    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    feedContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 20,
        backgroundColor: '#ffa751',
    },
        subjectContainer: {
            flex: 0.13,
            alignItems: 'flex-end',
            justifyContent: 'center',
        },
            subjectStyle: {
                marginRight: 25,
                fontSize: 35,
                color: 'white'
            },
        midContainer: {
            flex: 0.87,
            flexDirection: 'row'
        },
            dateContainer: {
                flex: 0.17,
                // backgroundColor: 'skyblue',
                alignItems: 'center',
            },
                dateItems: {
                    
                },
                    dateItem: {
                        marginTop: 40,
                        marginBottom: 40,
                        color: 'white',
                        fontSize: 25,
                        textAlign: 'center'
                    },
            commentContainer: {
                flex: 0.83,
                flexDirection: 'column',
                // backgroundColor: 'steelblue',
                alignItems: 'center',
                padding: 8,
            },
                commentItems: {
                    backgroundColor: 'white',
                    width: '100%',
                    height: 150,
                    borderRadius: 30,
                    padding: 15,
                    flexDirection: 'row'
                },
                    commentPhoto: {
                        width: 35,
                        height: 35,
                        marginRight: 10,
                    },
                    commentMidContainer: {
                        flex: 1,
                        width: '100%',

                    },
                        commentName: {
                            fontSize: 18,
                        },
                        commentLocTime: {
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
                        commentMessege: {
                            fontSize: 12,
                            color: '#3f4c6b',
                            marginTop: 10,
                            marginBottom: 10,
                        },
                        commentHeart: {

                        },
                        commentReply: {

                        },
                        commentMore: {

                        }

});

export default connect(
    state => ({
        visible: state.ui.get('visible')
    }),
    dispatch => ({
        UiActions: bindActionCreators(uiDuck, dispatch)
    })
)(FeedScreen);

