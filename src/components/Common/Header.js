import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function Header({name}) {
    return (
        <View style={styles.subjectContainer}>
            <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => console.log('pressed')}
            >
                <Icon name={name} size={24} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.subjectStyle}>Feed</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    subjectContainer: {
        flex: 0.13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconContainer: {
        width: 50,
        alignItems: 'center'
    },
    icon: {
        color: '#fff'
    },
    subjectStyle: {
        marginRight: 16,
        fontWeight: "300",
        fontSize: 35,
        color: 'white'
    },
});

export default Header;