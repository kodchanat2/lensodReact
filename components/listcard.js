import React, { Component } from 'react';
import {  Platform, StatusBar, View, Image, StyleSheet, FlatList, Text } from 'react-native';
import CollapsibleToolbar from 'react-native-collapsible-toolbar';

export default class Listcard extends Component {

    constructor(props){
        super(props)
    }

    content = (props) => (
        <View style={styles.card}
            key = {props.item}
        >
            <Text>{`zasdasdasd ${props.item}`}</Text>
        </View>
    )
    
    renderContent = () => (
        <View style={styles.container}>
        <FlatList
            data={['a','b','c']}
            renderItem={this.content}
        />
    </View>
    );

    renderNavBar = () => (
        <View style={styles.containerLogo}>
            <View style={styles.logo}>
                <Text>{this.props.title}</Text>  
            </View>
        </View>
    );

    renderToolBar = () => (
        <View style={[styles.containerLogo,{backgroundColor:"#291753", height:80}]}>
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
    card: {
        flex: 1,
        height: 500,
        // flexDirection: 'row',
        borderWidth:2,borderColor:'purple',
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerLogo: {
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
    textLogo: {
        fontSize: 30,
        color: "white"
    },
})