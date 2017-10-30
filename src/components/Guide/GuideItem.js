import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Star from '../../components/Guide/Star'


class GuideItem extends Component {
    render() {
        console.log(this.props.guide);
        return (
            <View style={styles.guideContainer}>
                <View style={styles.guideBodyContainer} >
                    <View style={styles.phototitleConatiner}>
                        <View style={styles.imageWrapper}>
                            <Image 
                                source={require('../../imgs/profile_image.png')}
                                style={styles.guideImage} />
                        </View>
                        <Text style={styles.guideNameWrapper}>Hwan Seob Lee</Text>
                    </View>
                    <Text style={styles.introduceWrapper}>구석구석 서울여행 하며 친해져요! :)</Text>
                    <View style={styles.contentContainer}>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.contentTitle}>지역</Text>
                            <Text style={styles.contentText}>성북구 안암동</Text>
                        </View>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.contentTitle}>언어</Text>
                            <Text style={styles.contentText}>English</Text>
                        </View>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.contentTitle}>능력</Text>
                            <Text style={styles.contentText}>상 중 하</Text>
                        </View>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.contentTitle}>자격증</Text>
                            <Text style={styles.contentText}>있음 없음</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Star
                        star={"star"}
                        rate={3}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    guideContainer: {
        backgroundColor: '#fff',
        flex: 1,
        height: 207,
        padding: 16,
        paddingTop: 14,
        borderRadius: 30,
        marginBottom: 30,
        flexDirection: 'row',
    },
        guideBodyContainer: {
            flex: 0.99,
            flexDirection: 'column',
        },
            phototitleConatiner: {
                flexDirection: 'row',
                marginBottom: -25,
            },
                imageWrapper: {
                    position: 'relative',
                    bottom: 35,
                    width: 70,
                    height: 70,
                },
                    guideImage: {
                        borderRadius: 30,
                    },
                guideNameWrapper: {
                    fontSize: 22,
                    marginLeft: 16,
                },
            introduceWrapper: {
                color: '#3f4c6b',
                fontSize: 15,
                marginLeft: 16,
            },
            contentContainer: {
                marginTop: 20,
                flex: 1,
                marginLeft: 16,
                flexDirection: 'column'
            },
                contentWrapper: {
                    flexDirection: 'row',
                    marginBottom: 7,
                },
                    contentTitle: {
                        fontSize: 12,
                        flex: 0.15,
                        color: '#3f4c6b',
                    },
                    contentText: {
                        fontSize: 12,
                        flex: 0.85,
                        marginLeft: 10,
                        color: '#3f4c6b',
                    },
        guideSideContainer: {
            flex: 0.01,
        },
        
});

export default GuideItem;
