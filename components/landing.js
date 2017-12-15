import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, FlatList } from 'react-native';
import CollapsibleToolbar from 'react-native-collapsible-toolbar';

import Logo from './landing_logo';
import Navbar from './landing_navbar';
import EventGrid from './landing_grid';
import Card from './card';
import {list} from '../config';

export default class Landing extends Component {
    componentWillMount() {
        StatusBar.setBarStyle('light-content');

        if (Platform.OS === 'android') {
            StatusBar.setTranslucent(true);
            StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.2)', true);
        }
    }

    content = (props) => (
        <Card {...props.item}  key={this.props.key}/>
    )
    
    renderContent = () => (
        <View>
            <EventGrid/>
            
            <View style={{flex:1}}>
                <FlatList
                    data={list}
                    renderItem={this.content}
                    style={{marginBottom:20}}
                />
            </View>
        </View>
    );

    renderNavBar = () => (
        <Navbar/>
    );

    renderToolBar = () => (
        <Logo/>
    )

    render() {
        return (
            <View style={{ backgroundColor:"#291753", flex:1}}>
                <CollapsibleToolbar
                    renderContent={this.renderContent}
                    renderNavBar={this.renderNavBar}
                    // imageSource='../assets/img/logo.png'
                    renderToolBar={this.renderToolBar}
                    collapsedNavBarBackgroundColor="#291753"
                    translucentStatusBar
                    showsVerticalScrollIndicator={false}
                    toolBarHeight={450}
                />
            </View>
        );
    }
}