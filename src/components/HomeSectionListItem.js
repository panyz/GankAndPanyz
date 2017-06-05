import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, Dimensions, } from 'react-native';

const windowSize = Dimensions.get('window');

export default class HomeSectionListItem extends Component {

    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps);
    }

    render() {
        return (
            <View style={styles.container}>
                    <Image source={{uri: this.props.imageUrl}} style={styles.imageStyle} ref={component => this._root = component}/>
                    <Text style={styles.textStyle}>{this.props.author}</Text>
                    <Text style={[{fontSize: 16,paddingBottom:10}, styles.textStyle]} numberOfLines={2}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 1 / 3 * windowSize.height,
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
    },
    imageStyle: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        height: 2 / 9 * windowSize.height
    },
    textStyle: {
        marginLeft: 10,
        color: '#51c4fe',
    }
});