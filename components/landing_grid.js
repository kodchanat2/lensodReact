import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Grid from 'react-native-grid-component';
import { Actions } from 'react-native-router-flux';


import {eventData, imgURL} from '../config';

export default class EventGrid extends Component {

    onPress = (data) => {
        console.log('asdasd ',data.link);
        if(data.link) Actions.push(data.link,{title: data.title});
    }

    _renderItem = (data, i) => (
        <TouchableOpacity onPress={() => this.onPress(data)} style={styles.item} key={i}>
            <Image 
                style={styles.img} 
                source={{uri: imgURL+data.name+'.jpg'}} 
                resizeMode="cover"/>
                <Text style={styles.text}>{data.title}</Text>
        </TouchableOpacity>
    )

    render = () => (
        <View style={styles.container}>
            <Grid
                style={{flex:1}}
                renderItem={this._renderItem}
                data={eventData}
                itemsPerRow={2}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#291753",
        marginBottom: 50
    },
    item: {
        flex:1,
        height:200,
        margin:5,
        justifyContent:'center',
    },
    img:{
        width:200,
        height:200,
        position:"absolute",
        borderRadius: 20
    },
    text:{
        textAlign: 'center',
        color: '#FFF',
        fontSize:30,
        fontFamily:'cloud'
    }
})