import React, {Component} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';


export default class PersonalInfo extends Component {
    static navigationOptions = {
        headerTitle: "我",
    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.imageStyle} source={require('../images/avatar.jpg')}/>
                <Text>我的Github: https://github.com/panyz</Text>
                <Text>Repo: https://github.com/panyz/GankAndPanyz</Text>
                <Text style={{marginTop: 30, marginHorizontal: 30}}>
                    This is a completely developed by the React Native App, inside the data from the contents of gank.io
                    and their own GitHub some of the Content.
                    这是一个完全由React Native开发的App，里面的数据内容来自gank.io（干货集中营）和自己GitHub上的一些Content。有什么问题，
                    欢迎到Issue中提出！
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    textStyle: {},
    imageStyle: {
        borderRadius: 100,
        height: 80,
        width: 80,
        marginVertical: 15,
    }
});