import React, {Component} from 'react';
import {StyleSheet, Image, View, Button, Text, ScrollView, KeyboardAvoidingView,} from 'react-native';

export default class PersonalInfo extends Component{
    static navigationOptions = {
        headerTitle: "个人中心",
    };
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>此功能正在开发中...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle : {
    }
});