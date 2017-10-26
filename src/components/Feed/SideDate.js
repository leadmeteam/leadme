import React, { Component} from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

class SideDate extends Component {
    render() {
        return (
            <View style={styles.dateContainer}>
                <View style={styles.dateItems}>
                <Text style={styles.dateItem}>31</Text>
                <Text style={styles.dateItem}>30</Text>
                <Text style={styles.dateItem}>29</Text>
                <Text style={styles.dateItem}>28</Text>
                <Text style={styles.dateItem}>27</Text>
                <Text style={styles.dateItem}>26</Text>
                <Text style={styles.dateItem}>25</Text>
                <Text style={styles.dateItem}>24</Text>
                <Text style={styles.dateItem}>23</Text>
                <Text style={styles.dateItem}>22</Text>
                </View>
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