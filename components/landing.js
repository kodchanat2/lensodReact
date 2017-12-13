import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, Image } from 'react-native';
import CollapsibleToolbar from 'react-native-collapsible-toolbar';

import Toolbar from './landing_toolbar';
import Navbar from './landing_navbar';

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
        <Navbar/>
    );

    renderToolBar = () => (
        <Toolbar/>
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