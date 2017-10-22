import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

import * as uiDuck from '../ducks/ui.duck';

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
                            data={[
                                {key: '21'},
                                {key: '22'},
                                {key: '23'},
                                {key: '24'},
                                {key: '25'},
                                
                            ]}
                            renderItem={({item}) => <Text style={styles.dateItems}>{item.key}</Text>}
                        />
                    </View>
                    <View style={styles.commentContainer}>
                        <Text>여기는 피드</Text>
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
        backgroundColor: 'powderblue',
    },
        subjectContainer: {
            flex: 0.1,
            alignItems: 'flex-end',
            justifyContent: 'center',
        },
            subjectStyle: {
                marginRight: 25,
                fontSize: 35,
                color: 'white'
            },
        midContainer: {
            flex: 0.9,
            flexDirection: 'row'
        },
            dateContainer: {
                flex: 0.2,
                backgroundColor: 'skyblue',
                alignItems: 'center',
            },
                dateItem: {
                    justifyContent: 'center',
                },
            commentContainer: {
                flex: 0.8,
                flexDirection: 'column',
                backgroundColor: 'steelblue',
                alignItems: 'center',
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

