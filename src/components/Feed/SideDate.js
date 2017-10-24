import React, { Component} from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

class SideDate extends Component {
    render() {
        return (
            <View style={styles.dateContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.dateItems}
                    data={[
                        {key: '1 \nOCT'},
                        {key: '2'},
                        {key: '3'},
                        {key: '4'},
                        {key: '5'},
                        {key: '6'},
                        {key: '7'},
                        {key: '8'},
                        {key: '9'},
                        {key: '10'},
                        {key: '11'},
                        {key: '12'},
                        {key: '13'},
                        {key: '14'},
                        {key: '15'},
                        {key: '16'},
                        {key: '17'},
                        {key: '18'},
                        {key: '19'},
                        {key: '20'},
                        {key: '21'},
                        {key: '22'},
                        {key: '23'},
                        {key: '24'},
                        {key: '25'},
                        {key: '26'},
                        {key: '27'},
                        {key: '28'},
                        {key: '29'},
                        {key: '30'},
                    ]}
                    renderItem={({item}) => <Text style={styles.dateItem}>{item.key}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    dateContainer: {
        width: 50,
        // backgroundColor: 'skyblue',
        alignItems: 'center',
    },
    dateItems: {
            
    },
    dateItem: {
        marginTop: 40,
        marginBottom: 40,
        color: 'white',
        fontSize: 25,
        textAlign: 'center'
    },
});

export default SideDate;