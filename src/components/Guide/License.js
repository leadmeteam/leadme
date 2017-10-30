import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function License({have}) {
    if(have === 1)
        return (
            <View style={styles.lisenceContainer}>
                <View style={styles.lisenceWrapper}>
                    <Text style={styles.lisenceText}>있음</Text>
                </View>
                <Text style={styles.lisText}>없음</Text>
            </View>
        );
    else
        return (
            <View style={styles.lisenceContainer}>
                <Text style={styles.lisText}>있음</Text>
                <View style={styles.lisenceWrapper}>
                    <Text style={styles.lisenceText}>없음</Text>
                </View>
            </View>
        );
}

const styles = StyleSheet.create({
    lisenceContainer: {
        flexDirection: 'row'
    },
        lisenceWrapper: {
            marginRight: 15,
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: '#ffa751', 
            flexDirection: 'row',
        },
            lisenceText: {
                fontSize: 12,
                marginLeft: 2,
                marginRight: 2,
                color: '#ffa751',
                textAlign: 'center',
                backgroundColor: 'transparent',
            },
        lisText: {
            fontSize: 12,
            marginRight: 15,
            color: '#3f4c6b',
            textAlign: 'center',
            backgroundColor: 'transparent',
        },
});

export default License;
