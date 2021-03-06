import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    PixelRatio,
} from 'react-native';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';

class UploadForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            address: '',
            loading: false,
            valid: true,
            feedBody: '',
            photoUrl: '',
            photoSource: null,
        };
    }

    onLocationPress = () => {
        let self = this;
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                const {latitude, longitude} = coords;
                self.getCurrentAddress(latitude, longitude);
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
    }

    getCurrentAddress = (lat, lng) => {
        this.setState({
            loading: true,
            valid: false
        });

        axios({
            method: 'GET',
            url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&language=ko&key=AIzaSyAZ4wxXzeheT3jy1dRY-8kyTLdO4Vl0AJI`
        }).then( res => {
            this.setState({
                address: res.data.results[3].formatted_address,
                loading: false,
                valid: false
            });
        }).catch( err => {
            this.setState({
                loading: false,
                valid: false
            });

            if(err) throw err;
        });
    };

    handleUpload = async () => {
        const { FeedActions, closeModal } = this.props;
        try {
            await FeedActions.postFeed(this.state.address, this.state.feedBody, this.state.photoUrl);
            if(this.props.postStatus.get('fetched')) {
                closeModal(false);
                // TODO: request New List
                await FeedActions.getFirstFeedList();
            }
        } catch (e) {
            if(e) throw e;
        }
    }

    selectPhotoTapped = () => {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };
    
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
    
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                let source = { uri: response.uri };
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    photoSource: source,
                    photoUrl: response.uri,
                });
            }
        });
    }

    render() {
        return (
            <View style={styles.formContainer}>
                <View style={styles.profileContainer}>
                    <Image
                        style={styles.thumbnail}
                        source={{uri: this.props.authInfo.get('picUrl')}}
                    />
                    <View style={styles.namePlace}>
                        <Text>{`${this.props.authInfo.get('firstName')} ${this.props.authInfo.get('lastName')}`}</Text>
                        <TouchableOpacity onPress={this.onLocationPress}>
                            { this.state.valid ? <Text style={styles.placeText}>Add Current Location</Text> :
                                this.state.loading ? <ActivityIndicator /> :
                                <Text style={styles.placeText}>{this.state.address}</Text>
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={styles.uploadBtnWrapper}>
                        {
                            this.props.postStatus.get('fetching') ? <ActivityIndicator /> :
                            <Button
                                style={styles.uploadBtn}
                                title="올리기"
                                onPress={this.handleUpload}
                                disabled={this.state.feedBody === '' ? true : false}
                            />
                        }
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Any problem on traveling?"
                        multiline
                        onChangeText={(text) => this.setState({feedBody: text})}
                        clearButtonMode="while-editing"
                        returnKeyType="done"
                        blurOnSubmit={true}
                        value={this.state.feedBody}
                    />
                    <TouchableOpacity onPress={this.selectPhotoTapped}>
                        <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                        { this.state.photoSource === null ? <Text>Select a Photo</Text> :
                            <Image style={styles.avatar} source={this.state.photoSource} />
                        }
                        </View>
                    </TouchableOpacity>
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
        padding: 16,
    },
    profileContainer: {
        flex: 0.05,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    thumbnail: {
        width: 35,
        height: 35,
        borderRadius: 17.5
    },
    namePlace: {
        flexDirection: 'column',
        marginLeft: 8,
    },
    placeText: {
        fontSize: 10,
        color: '#007AFF',
    },
    uploadBtnWrapper: {
        position: 'absolute',
        right: 10
    },
    uploadBtn: {
        fontSize: 12
    },
    inputContainer: {
        flex: 0.95,
        backgroundColor: 'white',
        marginTop: 16,
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: 200,
        borderStyle: "dashed"
    },
    avatar: {
        borderRadius: 30,
        width: 300,
        height: 200
    }
});

export default UploadForm;