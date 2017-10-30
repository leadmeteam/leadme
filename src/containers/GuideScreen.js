import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    View,
    StyleSheet,
    Text,
    CheckBox,
} from 'react-native';

import {
    GuideList,
    Header,
    ModalDropdown,
} from '../components';

import Icon from 'react-native-vector-icons/Ionicons';

import * as guideDuck from '../ducks/guide.duck';

class GuideScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.guideContainer}>
                <Header
                    name={"ios-search"}
                    title={"GUIDE"}
                />
                <View style={styles.midContainer}>
                    <View style={styles.modalContainer}>
                        <ModalDropdown
                            style={styles.btnContainer}
                            defaultIndex={"0"}
                            defaultValue={
                                <Text style={styles.txt}>
                                    별점순    <Icon name="ios-arrow-down" color={"#fff"} size={14} />
                                </Text>
                            }
                            options={['1', '2']}
                        />
                    </View>
                    <GuideList />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    guideContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 20,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: '#ffa751',
    },
    midContainer: {
        flex: 0.87,
    },
        modalContainer: {
            
        },
            btnContainer: {
                paddingTop: 5,
                paddingBottom: 5,
                marginRight: 5,
                marginBottom: 10,
                width: 100,
                alignSelf: 'flex-end',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: 30,
                borderWidth: 1.2,
                borderColor: '#fff',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            },
                txt: {
                    color: '#fff',
                    fontSize: 14,
                },
});
export default connect(
    state => ({
        status: {
            guideList: state.guide.getIn(['requests', 'guideList']),
            register: state.guide.getIn(['requests', 'register'])
        },
        feeds: state.guide.get('feeds')
    }),
    dispatch => ({
        GuideActions: bindActionCreators(guideDuck, dispatch)
    })
)(GuideScreen);
