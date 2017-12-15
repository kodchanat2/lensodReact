import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class Title extends Component {

    constructor(props){
        super(props)
    }


    render = () => (
        <View style={styles.container}>
            <View style={{flex:1, flexDirection:"row"}}>
                <Image 
                    style={styles.img} 
                    source={this.props.pic ? {uri:this.props.pic} : require('../assets/img/logo.png')} 
                    resizeMode='cover'
                />
                <View style={styles.rightSide}>
                    <Text style={styles.name}>{this.props.title || 'ศิลปิน'}</Text>
                    <View style={{flex:1, flexDirection:'row',}}>
                        { this.props.genres ? this.props.genres.map((item) => (
                            <Text style={styles.genreText}>{item}</Text>
                        )) : (<Text style={styles.genreText}>poppoppop</Text>)}
                    </View>
                </View>
            </View>
            <Text style={{padding:10, fontSize:16}}>{this.props.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
        padding: 10,
        // borderWidth:2,borderColor:'purple'
    },
    img:{
        width: 100,
        height:100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#aaa',
    },
    rightSide:{
        marginLeft:10,
        flex:1,
        justifyContent: 'center',
        paddingTop:15
        // borderWidth:2,borderColor:'purple'
    },
    name:{
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
        margin:3,
        marginLeft:5
    },
    description:{
        fontStyle: 'italic',
        fontSize: 14
    },
    genreText:{
        color: '#333',
        fontSize:15,
        fontFamily:'cloud',
        borderRadius: 10,
        paddingLeft: 7,
        paddingRight: 7,
        padding: 2,
        marginLeft: 4,
        height:28,
        backgroundColor: 'rgba(200,200,200,0.75)',
    }
})