import React from 'react';
import {TabNavigator} from 'react-navigation';

import AndroidTabPage from '../pages/AndroidTabPage';
import iOSTabPage from '../pages/iOSTabPage';
import FrontEndTabPage from '../pages/FrontEndTabPage';

const GankTab = TabNavigator({
    Android: {screen:AndroidTabPage,navigationOptions:{
        tabBarLabel:'Android'
    }},
    iOS:{screen:iOSTabPage, navigationOptions:{
        tabBarLabel:'iOS'
    }},
    frontEnd:{screen:FrontEndTabPage,navigationOptions:{
        tabBarLabel:'前端'
    }}
});

GankTab.navigationOptions = {
    headerTitle:'干货'
};

export default GankTab;