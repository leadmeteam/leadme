import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';

class Profile extends Component {
    render() {
        return (
            <View style={styles.profileContainer}>
                <View style={styles.imageWrapper}>
                    <Image 
                        source={require('../../imgs/profile_image.png')}
                        style={styles.guideImage} />
                </View>
                <View style={styles.profileWrapper}>
                    <Text style={styles.profileName}>
                        Mr.Guide Lee
                    </Text>
                    <Text style={styles.profileMail}>
                        asdfasdf@naver.com
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    profileContainer: {
        // flex: 0.87,
        flexDirection: 'row',
        margin: 20,
    },
    // imageWrapper: {
    //     width: 50,
    //     height: 50,
    // },
        guideImage: {
            width: 52,
            height: 52,
            borderRadius: 26,
        },
    profileWrapper: {
        height: 50,
        flexDirection: 'column',
        marginLeft: 15,
    },
        profileName: {
            fontSize: 22,
            color: '#ffffff',
        },
        profileMail: {
            fontSize: 13,
            color: '#ffffff',
        },
})

export default Profile;