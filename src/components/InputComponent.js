import  React from 'react';
import {StyleSheet, TextInput, View, } from 'react-native'

export default class InputComponent extends React.Component {
    static defaultProps = {
        isPwd: false,
        text: '',
    };

    render() {
        return (
            <View  style={styles.container}>
                    <TextInput style={styles.input} underlineColorAndroid="transparent" placeholder={this.props.text}
                               secureTextEntry={this.props.isPwd}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
    },
    input: {
        width: 250,
        height: 35,
        paddingLeft: 10,
        backgroundColor: '#EDEDED',
        borderWidth: 0,
        borderRadius: 5,
        borderStyle: "solid",
    },
    text: {
        textAlign: 'center',
        alignSelf: 'center'

    }
});