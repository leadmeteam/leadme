import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ModalDropdown from '../Common/ModalDropdown';

class UploadForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            guideDesc: '',
            province: '',
            goodLanguage: '',
        };
    }

    handleSelect = (province) => {
        console.log(province);
        switch(province) {
            case 0:
                this.setState({
                    province: "강남구"
                });
            case 1:
                this.setState({
                    province: "마포구"
                });
            case 2:
                this.setState({
                    province: "송파구"
                });
            case 3:
                this.setState({
                    province: "종로구"
                });
            case 4:
                this.setState({
                    province: "중구"
                });
            case 5:
                this.setState({
                    province: "동대문구"
                });
            default:
                return;    
        }
    }

    render() {
        console.log(this.state);
        return (
            <View style={styles.formContainer}>
                <View style={styles.profileContainer}>
                    <Image
                        style={styles.thumbnail}
                        source={{uri: this.props.authInfo.get('picUrl')}}
                    />
                    <View style={styles.namePlace}>
                        <Text style={{fontSize: 24}}>{`${this.props.authInfo.get('firstName')} ${this.props.authInfo.get('lastName')}`}</Text>
                    </View>
                </View>
                <View style={styles.formWrapper}>
                    <View style={styles.guideDescription}>
                        <Text>가이드 한 마디(30자 내외)</Text>
                        <TextInput
                            style={styles.textInput}
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(text) => this.setState({guideDesc: text})}
                            clearButtonMode="while-editing"
                            returnKeyType="done"
                            blurOnSubmit={true}
                            value={this.state.guideDesc}
                        />
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <Text>지역</Text>
                        <ModalDropdown
                            style={styles.btnContainer}
                            defaultIndex={"0"}
                            defaultValue={
                                <Text style={styles.txt}>
                                    종로구 <Icon style={{paddingLeft: 4}} name="ios-arrow-down" color={"#000"} size={14} />
                                </Text>
                            }
                            onSelect={this.handleSelect}
                            options={['강남구', '마포구', '송파구', '종로구', '중구', '동대문구']}
                        />
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <Text>자신있는 언어</Text>
                        <TextInput
                            placeholder="english"
                            style={styles.languageInput}
                            blurOnSubmit={true}
                            onChangeText={(text) => this.setState({goodLanguage: text})}
                            clearButtonMode="while-editing"
                            returnKeyType="done"
                            value={this.state.goodLanguage}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 8,
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 24,
        paddingTop: 27,
    },
    profileContainer: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    thumbnail: {
        width: 65,
        height: 65,
        borderRadius: 32.5
    },
    namePlace: {
        flexDirection: 'column',
        marginLeft: 8,
    },
    formWrapper: {
        flex: 1,
    },
    guideDescription: {
        marginTop: 30,
    },
    textInput: {
        borderWidth: 0.5,
        height: 100,
        borderColor: '#888',
    },
    btnContainer: {
        paddingTop: 2,
        paddingBottom: 2,
        marginLeft: 10,
        marginBottom: 10,
        width: 100,
        height: 20,
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#888',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        color: '#000',
        fontSize: 14,
    },
    languageInput: {
        marginLeft: 10,
        borderWidth: 0.5,
        width: 100,
        height: 20,
        borderColor: '#888',
    }
});

export default UploadForm;