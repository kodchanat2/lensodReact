import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class Navbar extends Component {

    render = () => (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image 
                    source={require('../assets/img/logo.png')} 
                    style={{width:25, marginRight:10}} 
                    resizeMode="contain"
                />   
                <Image 
                    source={require('../assets/img/text.png')} 
                    style={{width:100}} 
                    resizeMode="contain"
                />    
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1
    },
    logo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
})