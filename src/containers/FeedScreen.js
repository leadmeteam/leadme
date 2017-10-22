import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Button } from 'react-native';

import * as uiDuck from '../ducks/ui.duck';

class FeedScreen extends Component {
    handleShowBtn = () => {
        const { UiActions } = this.props;
        UiActions.showButton();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    FeedScreen
                </Text>
                <Button title="SHOW BUTTON" onPress={this.handleShowBtn} />
                { this.props.visible ? <Text>나왔다</Text> : undefined }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
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
