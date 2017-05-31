import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Dimensions, Image, ActivityIndicator} from 'react-native';


const {width, height} = Dimensions.get("window");


export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            size: {width, height},
            date: " ",
            showLoadView: true,
            homeImage: 'https://facebook.github.io/react/img/logo_og.png'
        };
        this._loadData();
        console.log(this.state.date);
    }

    static navigationOptions = {
        headerTitle: '首页',
        headerLeft: null,
    };

    _loadData = () => {
        fetch('http://gank.io/api/day/history')
            .then((res) => res.json())
            .then((responseJSON) => {
                this.setState({
                    date: responseJSON.results[0]
                })
            })
            .then(() => {
                let url = 'http://gank.io/api/day/' + this.state.date.split("-")[0] + '/'
                    + this.state.date.split("-")[1] + '/' + this.state.date.split("-")[2];
                fetch(url)
                    .then((res) => res.json())
                    .then((responseJson) => {
                        this.setState({
                            homeImage: responseJson.results.福利[0].url,
                            showLoadView: false
                        })
                    })
            })
            .catch((error) => {
                console.warn(error);
            })
    };


    render() {
        const {navigate} = this.props.navigation;
        const imageWidth = this.state.size.width;
        const imageHeight = 1 / 2 * this.state.size.height;

        return (
            <View style={styles.loadingStyle}>
                {this.state.showLoadView ?
                    <ActivityIndicator size='large' animating={this.state.showLoadView}/> :
                    <View style={styles.container}>
                        <Image source={{uri: this.state.homeImage}}
                               style={[{width: imageWidth, height: imageHeight}, styles.imageStyle]}>
                            <Text style={[{width: imageWidth},styles.dateStyle]}>5-26</Text>
                        </Image>

                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    loadingStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    dateStyle: {
        fontSize: 18,
        backgroundColor: '#ebebeb',
        opacity: 0.7,
        textAlign: 'right',
        color:'#9c9c9c'
    }
});

{/*<Button title="跳转" onPress={() => navigate('Next')}/>*/
}