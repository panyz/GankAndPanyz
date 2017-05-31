import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {TabNavigator} from 'react-navigation';

import HomePage from '../pages/MainPage'
import MessagePage from '../pages/GankPage';
import ContactsPage from '../pages/BlogPage';
import PersonalInfoPage from '../pages/PersonalInfoPage';

const Navigator = TabNavigator({
    One: {
        screen: HomePage, navigationOptions: {
            tabBarIcon: (({focused}) => focused ?
                    <Image source={require('../images/home_selected.png')} style={styles.pageIcon}/> :
                    <Image source={require('../images/home_normal.png')} style={styles.pageIcon}/>
            ),
        }
    },
    Two: {
        screen: MessagePage, navigationOptions: {
            tabBarIcon: (({focused}) => focused ?
                    <Image source={require('../images/two_selected.png')} style={styles.pageIcon}/> :
                    <Image source={require('../images/two_normal.png')} style={styles.pageIcon}/>
            ),
        }
    },
    Three: {
        screen: ContactsPage, navigationOptions: {
            tabBarIcon: (({focused}) => focused ?
                    <Image source={require('../images/three_selected.png')} style={styles.pageIcon}/> :
                    <Image source={require('../images/three_normal.png')} style={styles.pageIcon}/>
            ),
        }
    },
    Four: {
        screen: PersonalInfoPage, navigationOptions: {
            tabBarIcon: (({focused}) => focused ?
                    <Image source={require('../images/four_selected.png')} style={styles.pageIcon}/> :
                    <Image source={require('../images/four_normal.png')} style={styles.pageIcon}/>
            ),
        }
    }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    backBehavior: 'none',
    tabBarOptions: {
        indicatorStyle: {height: 0},
        showIcon: true,
        showLabel: false,
        style: {backgroundColor: 'white'}
    }
});

const styles = StyleSheet.create({
    pageIcon: {
        height: 24,
        width: 24,
        resizeMode: 'contain'
    }
});

export default Navigator