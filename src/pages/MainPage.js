import React, {Component} from 'react';
import {StyleSheet, View, Text, SectionList, Dimensions, Image, ActivityIndicator,TouchableHighlight} from 'react-native';
import HomeSectionListItem from '../components/HomeSectionListItem';

const {width, height} = Dimensions.get("window");


export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            size: {width, height},
            date: '',
            showLoadView: true,
            refreshing:true,
            homeImage: 'https://facebook.github.io/react/img/logo_og.png',
            androidList: [],
            iosList: [],
            frontendList: [],
            recommendList: [],
            videoList: [],
            resourceList:[]
        };
        this._loadData();
    }

    static navigationOptions = {
        headerTitle: '首页',
        headerLeft: null,
    };


    _loadData = () => {
        console.log("loadData...");
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
                // let url = 'http://gank.io/api/day/2017/05/26';
                fetch(url)
                    .then((res) => res.json())
                    .then((responseJson) => {
                        this.setState({
                            homeImage: responseJson.results.福利[0].url,
                            showLoadView: false,
                            refreshing:false,
                            videoList: this._handleData(responseJson.results.休息视频),
                            androidList: this._handleData(responseJson.results.Android),
                            iosList: this._handleData(responseJson.results.iOS),
                            frontendList: this._handleData(responseJson.results.前端),
                            recommendList: this._handleData(responseJson.results.瞎推荐),
                            resourceList:this._handleData(responseJson.results.拓展资源)
                        });
                    })
            })
            .catch((error) => {
                console.warn(error);
            })
    };

    _extraUniqueKey = (item, index) => {
        return "index" + index + item;
    };

    _handleHeader = () => {
        const imageWidth = this.state.size.width;
        const imageHeight = 1 / 2 * this.state.size.height;
        return (
            <Image source={{uri: this.state.homeImage}}
                   style={[{width: imageWidth, height: imageHeight}, styles.imageStyle]}>
                <Text style={[{width: imageWidth}, styles.dateStyle]}>{this.state.date}</Text>
            </Image>
        );
    };

    _handleSectionHeader = ({section}) => {
        return <Text style={styles.sectionHeader}>{section.key}</Text>
    };

    _handleListItem = ({item}) => {
        return (
            <TouchableHighlight underlayColor='#51c4fe' onPress={() => this.props.navigation.navigate('Web',{url:item.url,title:item.desc})}>
            <HomeSectionListItem author={item.who} title={item.desc}
                                    imageUrl={typeof (item.images) !== 'undefined'? item.images[0] : "https://facebook.github.io/react/img/logo_og.png"}/>
            </TouchableHighlight>
        )
    };

    _handleData = (list) => {
        return typeof (list) === 'undefined' ? [] : list
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.loadingStyle}>
                {this.state.showLoadView ?
                    <ActivityIndicator size='large' animating={this.state.showLoadView} color='#51c4fe'/> :
                    <View style={styles.container}>
                        <SectionList
                            refreshing={this.state.refreshing}
                            onRefresh={this._loadData}
                            renderItem={this._handleListItem}
                            renderSectionHeader={this._handleSectionHeader}
                            ListHeaderComponent={this._handleHeader}
                            sections={
                                [
                                    {data: this.state.androidList, key: "Android"},
                                    {data: this.state.iosList, key: "iOS"},
                                    {data: this.state.frontendList, key: "前端"},
                                    {data:this.state.resourceList,key:'拓展资源'},
                                    {data: this.state.recommendList, key: "瞎推荐"},
                                    {data: this.state.videoList, key: "休息视频"},
                                ]
                            }
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
        color: '#9c9c9c'
    },
    sectionHeader: {
        color: '#9c9c9c',
        textAlign: 'center',
        fontSize: 18
    }
});

{/*<Button title="跳转" onPress={() => navigate('Next')}/>*/
}


