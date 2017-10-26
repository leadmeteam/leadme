import React, { Component } from 'react';
import{
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import Header from '../Common/Header';
import UploadForm from './UploadForm';

class FeedUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false
        };
    }
    
    setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    }
    
    render() {
        return (
            <View style={styles.uploadContainer}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                        >
                        <View style={styles.modalContainer}>
                            <Header
                                name={"ios-arrow-back"}
                                title={"Write new feed"}
                                handlePress={() => this.setModalVisible(!this.state.modalVisible)}
                            />
                            <UploadForm
                                closeModal={this.setModalVisible}
                                postStatus={this.props.postStatus}
                                FeedActions={this.props.FeedActions}
                                authInfo={this.props.authInfo}
                            />
                        </View>
                    </Modal>
                    <TouchableHighlight underlayColor="white" onPress={() => {
                        this.setModalVisible(!this.state.modalVisible)
                    }}>
                        <Text>Feel free to write new feed!</Text>
                    </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    uploadContainer: {
        backgroundColor: '#fff',
        height: 75,
        marginBottom: 8,
        borderRadius: 30,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        backgroundColor: '#ffa751',
        flex: 1,
        paddingTop: 20
    }
});

export default FeedUpload;