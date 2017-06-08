import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';

const windowSize = Dimensions.get('window');

export default class GankListItemComponent extends Component {

    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.imageStyle} source={{uri: this.props.imageUrl}} ref={component => this._root = component}/>
                <View>
                    <Text style={styles.textStyle}>{this.props.author}</Text>
                    <Text style={[{fontSize:16,paddingRight:5,width:2/3*windowSize.width},styles.textStyle]} numberOfLines={3}>
                        {this.props.title}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginVertical: 5,
        height: 2 / 9 * windowSize.height,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    imageStyle: {
        width: 1 / 3 * windowSize.width,
        height: 2 / 9 * windowSize.height
    },
    textStyle:{
        marginVertical:10,
        marginHorizontal:10,
        color:"#9c9c9c"
    }
});