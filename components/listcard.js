import React, { Component } from 'react';
import {  View, Image, StyleSheet, FlatList, Text } from 'react-native';
import CollapsibleToolbar from 'react-native-collapsible-toolbar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';

import NavBackButton from './navbar_back';
import Card from './card';
import {list} from '../config';

export default class Listcard extends Component {

    constructor(props){
        super(props)
    }
    content = (props) => (
        <Card {...props.item}  key={this.props.key}/>
    )
    
    renderContent = () => (
        <View style={styles.container}>
        <FlatList
            data={list}
            renderItem={this.content}
            style={{marginBottom:20}}
        />
    </View>
    );

    onPress = () => {
        console.log('POP ');
        // Actions.pop();
    }

    renderNavBar = () => (
        <View style={styles.containerLogo}>
            <NavBackButton onPress={this.onPress}/>
            <View style={styles.logo}>
                <Text style={styles.textLogo}>{this.props.title}</Text>  
            </View>
        </View>
    );

    renderToolBar = () => (
        <View style={[styles.containerLogo,{backgroundColor:"#291753", height:80, marginBottom:10}]}>
            <View style={styles.logo}>
                <Text style={styles.textLogo}>{this.props.title}</Text>  
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
        color: "white"
    },
})