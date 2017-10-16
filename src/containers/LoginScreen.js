import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function LoginScreen(props) {
    console.log(props);
    return (
        <View style={styles.container}>
            <Text>
                LoginScreen
            </Text>
            <Button title="탭바 가기" onPress={() => props.navigation.navigate('TabNavigator')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    }
})

export default LoginScreen;
