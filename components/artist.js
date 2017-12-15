import React, { Component } from 'react';
import {  View, Image, StyleSheet, FlatList, Text, WebView } from 'react-native';
import CollapsibleToolbar from 'react-native-collapsible-toolbar';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image'

import Card from './card';
import {list} from '../config';
import Logo from './landing_logo';
import Title from './artist_title';

export default class Artist extends Component {

    constructor(props){
        super(props)
    }
    content = (props) => (
        <FastImage 
            style={{height:225, margin:10}} 
            source={{
                uri: props.item,
                priority: FastImage.priority.low,
            }} 
            resizeMode={FastImage.resizeMode.cover}/>
    )
    
    renderContent = () => (
        <View>
            <Swiper style={{height:225}} autoplay="true" >
            
                {this.props.otherpic ? this.props.otherpic.map((pic) => (
                <FastImage 
                    style={{height:225}} 
                    source={{
                        uri: pic,
                        priority: FastImage.priority.low,
                    }} 
                    resizeMode={FastImage.resizeMode.cover}/>
                )) : (
                <FastImage 
                    style={{height:225}} 
                    source={{
                        uri: this.props.pic,
                        priority: FastImage.priority.low,
                    }} 
                    resizeMode={FastImage.resizeMode.cover}/>
                )}
                {/* <WebView source={{ html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9Ic3DMDp6IU" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>' }} /> */}
            </Swiper>
            <View style={styles.container}>
                
                <Title {...this.props}/>
                
                <FlatList
                    data={this.props.otherpic || this.props.pic}
                    renderItem={this.content}
                    style={{marginBottom:20}}
                />
        </View>
    </View>
    );

    renderNavBar = () => (
        <View style={styles.containerLogo}>
            <View style={styles.logo}>
                <Text style={styles.textLogo}>{this.props.title || 'ศิลปิน'}</Text>  
            </View>
        </View>
    );

    renderToolBar = () => (
        <View style={[styles.containerLogo,{backgroundColor:"#291753", height:80}]}>
            <View style={styles.logo}>
                <Text style={styles.textLogo}>{this.props.title || 'ศิลปิน'}</Text>  
            </View>
        </View>
    );

    render() {
        return (
            <View style={{ flex:1}}>
                <CollapsibleToolbar
                    renderContent={this.renderContent}
                    renderNavBar={this.renderNavBar}
                    renderToolBar={this.renderToolBar}
                    collapsedNavBarBackgroundColor="#291753"
                    translucentStatusBar
                    showsVerticalScrollIndicator={false}
                    toolBarHeight={80}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        flex: 1
    },

    containerLogo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    logo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textLogo: {
        fontSize: 22,
        color: "white",
        fontFamily:'cloud-semibold-webfont',
    },
})