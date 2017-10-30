import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Star({star, rate}) {
    switch(rate) {
        case 1: 
            return (
                <View style={styles.starContainer}>
                    <Icon name={star} size={18} style={styles.unstar} />
                    <Icon name={star} size={18} style={styles.unstar} />
                    <Icon name={star} size={18} style={styles.unstar} />
                    <Icon name={star} size={18} style={styles.unstar} />
                    <Icon name={star} size={18} style={styles.star} />
                </View>
            );
        case 2: 
            return (
                <View style={styles.starContainer}>
                    <Icon name={star} size={18} style={styles.unstar} />
                    <Icon name={star} size={18} style={styles.unstar} />
                    <Icon name={star} size={18} style={styles.unstar} />
                    <Icon name={star} size={18} style={styles.star} />
                    <Icon name={star} size={18} style={styles.star} />
                </View>
            );
        case 3: 
            return (
                <View style={styles.starContainer}>
                    <Icon name={star} size={18} style={styles.unstar} />
                    <Icon name={star} size={18} style={styles.unstar} />
                    <Icon name={star} size={18} style={styles.star} />
                    <Icon name={star} size={18} style={styles.star} />
                    <Icon name={star} size={18} style={styles.star} />
                </View>
            );
        case 4: 
            return (
                <View style={styles.starContainer}>
                    <Icon name={star} size={18} style={styles.unstar} />
                    <Icon name={star} size={18} style={styles.star} />
                    <Icon name={star} size={18} style={styles.star} />
                    <Icon name={star} size={18} style={styles.star} />
                    <Icon name={star} size={18} style={styles.star} />
                </View>
            );
        case 5: 
            return (
                <View style={styles.starContainer}>
                    <Icon name={star} size={18} style={styles.star} />
                    <Icon name={star} size={18} style={styles.star} />
                    <Icon name={star} size={18} style={styles.star} />
                    <Icon name={star} size={18} style={styles.star} />
                    <Icon name={star} size={18} style={styles.star} />
                </View>
            );
        default:
            return (
                <View style={styles.starContainer}>
                    <Icon name={star} size={18} style={styles.unstar} />
                    <Icon name={star} size={18} style={styles.unstar} />
                    <Icon name={star} size={18} style={styles.unstar} />
                    <Icon name={star} size={18} style={styles.unstar} />
                    <Icon name={star} size={18} style={styles.unstar} />
                </View>
            );
            
    }
}

const styles = StyleSheet.create({
    starContainer: {
        flex: 1,
        justifyContent: 'center'
    },
        star: {
            marginTop: 4,
            marginBottom: 4,
            color: '#ffa751'
        },
        unstar: {
            marginTop: 4,
            marginBottom: 4,
            color: '#ddd'
        },
});

export default Star;
