import React, { Component} from 'react';
import { View, ScrollView, Text, StyleSheet, InteractionManager } from 'react-native';

class SideDate extends Component {
    constructor(props) {
        super(props);
    }

    handleScrollTo = () => {
        InteractionManager.runAfterInteractions(() => {
            this._scrollView.scrollTo({ x: 0, y: 103, animated: true });
        });
    }

    handleScrollToTwo = () => {
        InteractionManager.runAfterInteractions(() => {
            this._scrollView.scrollTo({ x: 0, y: 206, animated: true });
        });
    }

    render() {
        return (
            <View style={styles.dateContainer}>
                <ScrollView
                    ref={(sv) => { this._scrollView = sv }}
                    scrollEnabled={false}
                >
                    <View style={styles.dateItems}>
                        <Text style={styles.dateItem} onPress={this.handleScrollTo}>31</Text>
                        <Text style={styles.dateMonth}>OCT</Text>
                    </View>
                    <View style={styles.dateItems}>
                        <Text style={styles.dateItem} onPress={this.handleScrollToTwo}>30</Text>
                        <Text style={styles.dateMonth}>OCT</Text>
                    </View>
                    <View style={[styles.dateItems, styles.active]}>
                        <Text style={[styles.dateItem, styles.textActive]} onPress={this.handleScrollTo}>29</Text>
                        <Text style={[styles.dateMonth, styles.textActive]}>OCT</Text>
                    </View>
                    <View style={styles.dateItems}>
                        <Text style={styles.dateItem} onPress={this.handleScrollTo}>28</Text>
                        <Text style={styles.dateMonth}>OCT</Text>
                    </View>
                    <View style={styles.dateItems}>
                        <Text style={styles.dateItem}>27</Text>
                        <Text style={styles.dateMonth}>OCT</Text>
                    </View>
                </ScrollView>
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
        width: 50,
        padding: 3,
        marginTop: 25,
        marginBottom: 25,
        borderRadius: 25,
    },
    active: {
        backgroundColor: 'rgba(255,255,255,0.2)'
    },
    textActive: {
        color: 'white',
    },
    dateItem: {
        color: 'rgba(255,255,255,0.4)',
        fontSize: 31,
        textAlign: 'center'
    },
    dateMonth: {
        color: 'rgba(255, 255, 255, 0.4)',
        marginTop: -3,
        fontSize: 10,
        textAlign: 'center'
    },
});

export default SideDate;