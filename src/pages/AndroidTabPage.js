import React, {Component} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator,TouchableHighlight} from 'react-native';

import GankListItem from '../components/GankListItemComponent';

const defaultImage = 'https://facebook.github.io/react/img/logo_og.png';

export default class AndroidTabPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
            showLoadView: true,
            refreshing: true,
        };
        this._loadAndroidData();
    }

    _loadAndroidData = () => {
        fetch('http://gank.io/api/random/data/Android/15')
            .then((res) => res.json())
            .then((responseJson) => {
                this.setState({
                    results: responseJson.results,
                    showLoadView: false,
                    refreshing: false
                })
            })
            .catch((error) => {
                console.warn(error);
            })
    };

    _extraUniqueKey = (item, index) => {
        return "index" + index + item;
    };

    _renderListItem = ({item}) => {
        return (
            <TouchableHighlight underlayColor='#51c4fe' onPress={() => this.props.navigation.navigate('Web', {
                url: item.url,
                title: item.desc
            })}>
            <GankListItem author={item.who === null ? "佚名" : item.who}
                          title={item.desc}
                          imageUrl={typeof(item.images) !== 'undefined' ? item.images[0] : defaultImage}
            />
            </TouchableHighlight>
        )
    };


    render() {
        return (
            <View style={styles.loadingStyle}>
                {this.state.showLoadView ?
                    <ActivityIndicator size='large' color='#51c4fe' animating={this.state.showLoadView}/> :
                    <View style={styles.container}>
                        <FlatList
                            refreshing={this.state.refreshing}
                            onRefresh={this._loadAndroidData}
                            data={this.state.results}
                            renderItem={this._renderListItem}
                            keyExtractor={this._extraUniqueKey}
                        />
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loadingStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});