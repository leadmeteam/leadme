import React, { Component } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

class CommentUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: ''
        };
    }

    render() {
        let btnColor = this.state.comment === '' ? { color: '#999' } : { color: '#007AFF' };
        return (
            <View style={styles.commentWrite}>
                <TextInput
                    style={styles.writeWrapper}
                    onChangeText={(text) => this.setState({comment: text})}
                    value={this.state.comment}
                    clearButtonMode="while-editing"
                    returnKeyType="done"
                    onSubmitEditing={() => this.props.commentSubmit(this.state.comment)}
                    blurOnSubmit={true}
                />
                <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => this.props.commentSubmit(this.state.comment)}>
                    <Text style={[styles.sendBtn, btnColor]}>전송</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    commentWrite: {
        width: Dimensions.get('window').width,
        height: 50,
        bottom: 0,
        position: 'absolute',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
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
    }
});

export default CommentUpload;