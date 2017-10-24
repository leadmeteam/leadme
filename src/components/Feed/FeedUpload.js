import React, { Component } from 'react';
import{
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

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
                        <View style={{marginTop: 22}}>
                            <View>
                                <Text>Hello World!</Text>
                                <TouchableHighlight onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible)
                                }}>
                                    <Text>Hide Modal</Text>
                                </TouchableHighlight>

                            </View>
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
    }
});

export default FeedUpload;