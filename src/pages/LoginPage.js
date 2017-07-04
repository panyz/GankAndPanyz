import React, {Component} from 'react';
import {StyleSheet, Image, View, Button, Text, ScrollView, KeyboardAvoidingView,} from 'react-native';
import {StackNavigator, NavigationActions} from 'react-navigation';
import Navigator from '../common/TabNavigator';

import Input from '../components/InputComponent';
import HomePage from './MainPage';
import ThirdScreen from './ThirdScreen';
import BlogPage from './BlogPage';
import PersonalInfoPage from './PersonalInfoPage';
import WebPage from './WebPage';
import GankPage from '../common/GankTabNav';


class LoginPage extends Component {

    static navigationOptions = {
        headerTitle: "登录",
    };

    _toMain = () => {
        const resetActions = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Main'})]
        });
        this.props.navigation.dispatch(resetActions);
    };

    render() {
        return (
            <ScrollView ref="scroll" style={styles.container} contentContainerStyle={styles.contentContainer}>
                <KeyboardAvoidingView behavior='padding'>
                    <View style={styles.cardStyle}>
                        <View style={styles.imageStyle}>
                            <Image style={styles.imageSize} source={require('../images/blog.png')}/>
                        </View>
                        <Text style={{color: '#b3b3b3'}}>干货集中营 x 博客</Text>
                        <Input ref="user" text="账号"/>
                        <Input ref="password" text="密码" isPwd={true}/>
                        <View style={styles.buttonStyle}>
                            <Button title="登录" onPress={this._toMain}/>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}

const SimpleApp = StackNavigator({
    Login: {screen: LoginPage},
    Main: {screen: Navigator},
    Home: {screen: HomePage},
    Next: {screen: ThirdScreen},
    Gank: {screen: GankPage},
    Blog: {screen: BlogPage},
    PersonalInfo: {screen: PersonalInfoPage},
    Web: {screen: WebPage}
}, {
    initialRouteName: 'Login',
    navigationOptions: {
        headerTintColor: '#51c4fe',
        headerStyle: {backgroundColor: "white"},
        headerTitleStyle: {alignSelf: 'center'},
    },
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#51c4fe',
        flex: 1,
    },
    contentContainer: {
        backgroundColor: '#51c4fe',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardStyle: {
        width: 300,
        height: 350,
        borderRadius: 10,
        marginBottom: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    imageSize: {
        // height: 100
    },
    buttonStyle: {
        width: 250,
        marginTop: 20,
        marginBottom: 50,
    },
    imageStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SimpleApp



