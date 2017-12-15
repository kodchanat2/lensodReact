import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Grid from 'react-native-grid-component';
import { Actions } from 'react-native-router-flux';

export default class Card extends Component {

    constructor(props){
        super(props)
    }

    onPress = (props) => {
        console.log('click ',props);
        Actions.push("Artist",props);
    }

    render = () => (
        <TouchableOpacity onPress={() => this.onPress(this.props)} style={styles.container}>
            <Image 
                style={styles.img} 
                source={{uri: this.props.pic}} 
                resizeMode="cover"/>

            <View style={{flex:1, flexDirection: 'row', alignItems: 'flex-end',}}>
                <View style={styles.box}>
                    <Text style={styles.bigText}>{this.props.title}</Text>
                    <Text style={styles.text} numberOfLines ={3}>{this.props.description}</Text>
                </View>
            </View>
            <View style={styles.rightBox}>
                { this.props.genres.map((item) => (
                    <Text style={styles.genreText}>{item}</Text>
                ))}
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#F5FCFF",
        marginBottom: 10,
        margin: 5,
        paddingBottom: 3,
        borderRadius: 10,
    },
    box: {
        flex: 1,
        position:"absolute",
        alignItems:'center',
        height: 100,
        width:'100%',
        padding: 5,
        backgroundColor: 'rgba(255,255,255,0.75)',
    },
    rightBox: {
        flex: 1,
        position:"absolute",
        alignSelf:'flex-end',
        alignItems:'flex-start',
        justifyContent:'flex-end',
        flexDirection: 'row',
        padding: 7,
    },
    img:{
        height:400,
        borderRadius: 10,
    },
    bigText:{
        // textAlign: 'center',
        color: 'black',
        fontSize:28,
        fontFamily:'cloud-regular-webfont'
    },
    text:{
        // textAlign: 'center',
        color: '#222',
        fontSize:14,
        fontFamily:'cloud-light-webfont',
    },
    genreText:{
        color: '#555',
        fontSize:12,
        fontFamily:'cloud-semibold-webfont',
        borderRadius: 10,
        paddingLeft: 7,
        paddingRight: 7,
        padding: 2,
        marginLeft: 3,
        backgroundColor: 'rgba(255,255,255,0.75)',
        opacity: 0.8,
    }
   
})