import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Header } from '../components';

function MypageScreen(props) {
    console.log(props);

    return (
        <View style={styles.mypageContainer}>
            <Header
                name={"ios-chatboxes-outline"}
                title={"MY"}
            />
            <View style={styles.profileContainer}>
                <View style={styles.imageWrapper}>
                    <Image 
                        source={require('../imgs/profile_image.png')}
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
            <View style={styles.tabViewContainer}>
                <Text>Hello</Text>
            </View>
        </View>
    )
}

const styles = {
    mypageContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 20,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: '#3f4c6b',
    },
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
            tabViewContainer: {
                flex: 1,
            },
}

export default MypageScreen;
