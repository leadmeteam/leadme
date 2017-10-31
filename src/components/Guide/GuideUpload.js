import React, { Component } from 'react';

import { 
    View,
    Modal,
    Text,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';

import Header from '../Common/Header';
import UploadForm from './UploadForm';

class GuideUpload extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            modalVisible: false,
        };
    }

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    }
    render() {
        return (
            <View style={styles.guideContainer}>
                <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                        >
                        <View style={styles.modalContainer}>
                            <Header
                                name={"ios-arrow-back"}
                                registerGuide={true}
                                title={"완료"}
                                handlePress={() => this.setModalVisible(!this.state.modalVisible)}
                            />
                            <UploadForm
                                {...this.props}
                            />
                        </View>
                    </Modal>
                    <TouchableHighlight underlayColor="white" onPress={() => {
                        this.setModalVisible(!this.state.modalVisible)
                    }}>
                        <Text>Feel free to be a guide!</Text>
                    </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    guideContainer: {
        backgroundColor: '#fff',
        height: 75,
        padding: 16,
        paddingTop: 14,
        borderRadius: 30,
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: '#6e7882',
        flex: 1,
        paddingTop: 20
    }
});

export default GuideUpload;