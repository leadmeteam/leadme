import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import * as uiDuck from '../ducks/ui.duck';

class FeedScreen extends Component {
    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Text>
                    FeedScreen
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default connect(
    state => ({
        ui: state.ui.get('visible')
    }),
    dispatch => ({
        UiActions: bindActionCreators(uiDuck, dispatch)
    })
)(FeedScreen);
