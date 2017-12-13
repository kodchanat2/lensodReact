/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, Image, StyleSheet } from 'react-native';
import CollapsibleToolbar from 'react-native-collapsible-toolbar';

export default class Landing extends Component {
    componentWillMount() {
        StatusBar.setBarStyle('light-content');

        if (Platform.OS === 'android') {
            StatusBar.setTranslucent(true);
            StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.2)', true);
        }
    }

    renderContent = () => (
        <View>
            {new Array(20).fill().map((_, i) => (
                <View
                    // eslint-disable-next-line
                    key={i}
                    style={{
                        backgroundColor: '#F5F5F5',
                        padding: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#E5E5E5'
                    }}
                >
                    <Text>{`Item ${i + 1}`}</Text>
                </View>
            ))}
        </View>
    );

    renderNavBar = () => (
        <View
            style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                flex: 1
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1
                }}
            >
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
    );

    renderToolBar = () => (
        <View style={styles.container}>
            <Image 
                source={require('../assets/img/full_logo.png')} 
                style={styles.img} 
                resizeMode="contain"
            />                 
            <Text style={{ textAlign: 'center', color: '#FFF', fontSize:30, fontFamily:'cloud', fontWeight:'bold' }}>มิติใหม่ ในการจองดนตรีสด</Text>
            <Text style={{ textAlign: 'center', color: '#FFF', fontSize:22, fontFamily:'cloud' }}>ศิลปินคุณภาพ ง่ายสะดวกรวดเร็ว ไม่มีค่าบริการ!</Text>
            
        </View>
    )

    render() {
        return (
            <CollapsibleToolbar
                renderContent={this.renderContent}
                renderNavBar={this.renderNavBar}
                imageSource='../assets/img/logo.png'
                renderToolBar={this.renderToolBar}
                collapsedNavBarBackgroundColor="#291753"
                translucentStatusBar
                showsVerticalScrollIndicator={false}
                toolBarHeight={500}
            />
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#291753",
        height:500,
        justifyContent: 'center',
    },
    img:{
        // width: 200,
        height:200,
        alignSelf: 'center',
        // borderRadius: 50,
        // borderWidth: 2,
        borderColor: '#eee',
        margin: 30
    },
})