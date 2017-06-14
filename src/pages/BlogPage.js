import React, {Component} from 'react';
import {StyleSheet, View, Text,FlatList,TouchableHighlight} from 'react-native';

export default class BlogPage extends Component{
    static navigationOptions = {
        headerTitle: "博客",
    };

    constructor(props){
        super(props);
        this.state = {
            results:[],
        };
        this._loadData();
    }

    _loadData = () => {
        fetch('https://api.github.com/repos/panyz/Blogs/issues')
            .then((res) => res.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    results:responseJson,
                });
            })
            .catch((error) => {
                console.warn(error);
            })
    };

    _renderListItem = ({item}) => {
        return(
            <View style={styles.cardStyle}>
                <TouchableHighlight underlayColor='#51c4fe' onPress={()=> this.props.navigation.navigate('Web',{
                    url:item.html_url,
                    title:item.title,
                })}>
                <Text style={styles.textStyle}>{item.title}</Text>
                </TouchableHighlight>
            </View>
        )
    };

    _extraUniqueKey = (item, index) => {
        return "index" + index + item;
    };

    render(){
        return(
            <View style={styles.container}>
               <FlatList
                    data={this.state.results}
                    renderItem={this._renderListItem}
                    keyExtractor={this._extraUniqueKey}
               />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle : {
        paddingHorizontal:5,
        paddingVertical:5,
    },
    cardStyle:{
        marginHorizontal:10,
        marginVertical:5,
        height:50,
        backgroundColor:'#fff',
        borderRadius:10,

    }
});