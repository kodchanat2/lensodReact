import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class Toolbar extends Component {

    render = () => (
        <View style={styles.container}>
            <Image 
                source={require('../assets/img/full_logo.png')} 
                style={styles.img} 
                resizeMode="contain"
            />                 
            <Text style={styles.textBold}>มิติใหม่ ในการจองดนตรีสด</Text>
            <Text style={styles.text}>ศิลปินคุณภาพ ง่ายสะดวกรวดเร็ว ไม่มีค่าบริการ!</Text>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#291753",
        height:500,
        justifyContent: 'center',
    },
    img:{
        height:200,
        alignSelf: 'center',
        margin: 30,
        // borderWidth: 2,
        // borderColor: '#eee',
    },
    textBold:{
        textAlign: 'center',
        color: '#FFF',
        fontSize:30,
        fontFamily:'cloud',
        fontWeight:'bold'
    },
    text:{
        textAlign: 'center',
        color: '#FFF',
        fontSize:22,
        fontFamily:'cloud',
    }
})