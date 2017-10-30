import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function Header({handlePress, name, title}) {
    return (
        <View style={styles.subjectContainer}>
            <Text style={styles.subjectStyle}>{title}</Text>
            <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress}
            >
                <Icon name={name} size={24} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    subjectContainer: {
        height: 77.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
        subjectStyle: {
            marginLeft: 16,
            fontWeight: "300",
            fontSize: 35,
            color: 'white'
        },
        iconContainer: {
            width: 50,
            alignItems: 'center'
        },
            icon: {
                color: '#fff'
            },
});

export default Header;