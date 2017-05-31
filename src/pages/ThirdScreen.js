import React, {Component} from 'react';
import {StyleSheet,View, ScrollView,Text} from 'react-native';
export default class ThirdScreen extends Component{
    static navigationOptions = {
        headerTitle:'第三页',
        headerTitleStyle:{alignSelf:'flex-start'},
    };

    render() {
        return (
            <View style={styles.container}>
                 <Text>Hello World!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        height: 35,
        paddingHorizontal: 10,
    },
});
