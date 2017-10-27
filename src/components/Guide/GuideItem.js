import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

class GuideItem extends Component {
    render() {
        console.log(this.props.guide);
        return (
            <View style={styles.guideWrapper}>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.imageWrapper}>
                        <Image source={{uri: "https://images.unsplash.com/photo-1494707924465-e1426acb48cb?auto=format&fit=crop&w=1650&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"}} />
                    </View>
                    <Text>Hwan Seob Lee</Text>
                </View>
                <Text style={{marginLeft: 16}}>Lorem Ipsum Kalao Vertical Algin 93</Text>
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
        );
    }
}

const styles = StyleSheet.create({
    guideWrapper: {
        flex: 1,
        height: 200,
        padding: 16,
        borderRadius: 30,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    imageWrapper: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
    },
    contentContainer: {
        marginTop: 16,
        flex: 1,
        marginLeft: 16,
    },
    contentWrapper: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 8,
    },
    contentTitle: {
        fontSize: 10,
        flex: 0.2,
        alignSelf: 'flex-start',
    },
    contentText: {
        fontSize: 10,
        flex: 0.8,
        marginLeft: 10,
    }
});

export default GuideItem;