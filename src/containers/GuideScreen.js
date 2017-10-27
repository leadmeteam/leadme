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
                <ModalDropdown
                    style={styles.btnContainer}
                    defaultIndex={"0"}
                    defaultValue={
                        <Text style={styles.txt}>
                            평점순<Icon name="ios-arrow-down" color={"#fff"} />
                        </Text>
                    }
                    options={['1', '2']}
                />
                <GuideList />  
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
    btnContainer: {
        width: 100,
        alignSelf: 'flex-end',
        marginRight: 16,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        color: '#fff'
    }
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
