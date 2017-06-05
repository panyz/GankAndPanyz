import React, {Component} from 'react';
import {StyleSheet, WebView, View} from 'react-native';

export default class WebPage extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle : navigation.state.params.title
    });

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <WebView
                    source={{uri: params.url}}
                    startInLoadingState={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                    automaticallyAdjustContentInsets={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});