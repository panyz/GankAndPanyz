import React, {Component} from 'react';
import {StyleSheet, View, Text,} from 'react-native';

export default class GankPage extends Component {
    static navigationOptions = {
        headerTitle: "干货",
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>此功能正在开发中...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});