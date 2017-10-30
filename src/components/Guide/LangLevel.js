import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function LangLevel({level}) {
    switch(level) {
        case 1: 
            return (
                <View style={styles.langLevelContainer}>
                    <Text style={styles.langText}>상</Text>
                    <View style={styles.langLevelWrapper}>
                        <Text style={styles.langLevelText}>중</Text>
                    </View>
                    <Text style={styles.langText}>하</Text>
                </View>
            );
        case 2: 
            return (
                <View style={styles.langLevelContainer}>
                    <View style={styles.langLevelWrapper}>
                        <Text style={styles.langLevelText}>상</Text>
                    </View>
                    <Text style={styles.langText}>중</Text>
                    <Text style={styles.langText}>하</Text>
                </View>
                
            );
        default:
            return (
                <View style={styles.langLevelContainer}>
                    <Text style={styles.langText}>상</Text>
                    <Text style={styles.langText}>중</Text>
                    <View style={styles.langLevelWrapper}>
                        <Text style={styles.langLevelText}>하</Text>
                    </View>
                </View>
            );
    }
}

const styles = StyleSheet.create({
    langLevelContainer: {
        flexDirection: 'row'
    },
        langLevelWrapper: {
            marginRight: 15,
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: '#ffa751', 
            flexDirection: 'row',
        },
            langLevelText: {
                fontSize: 12,
                marginLeft: 2,
                marginRight: 2,
                color: '#ffa751',
                textAlign: 'center',
                backgroundColor: 'transparent',
            },
        langText: {
            fontSize: 12,
            marginRight: 15,
            color: '#3f4c6b',
            textAlign: 'center',
            backgroundColor: 'transparent',
        },
});

export default LangLevel;
