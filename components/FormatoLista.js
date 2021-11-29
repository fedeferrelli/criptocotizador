import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const FormatoLista = ({cripto}) => {

    console.log(cripto)

    return(

        <View style={styles.view}>

        <View style={styles.image}>
            <Image 
                style = {styles.image_pic}
                source = {{uri:`http://www.cryptocompare.com${cripto.CoinInfo.ImageUrl}`}}

            />
            </View>

            <View style={styles.text}>

            <Text style={styles.name}>{cripto.CoinInfo.FullName}</Text>

            <View style={styles.change}>

            <Text> {cripto.DISPLAY.USD.CHANGEPCT24HOUR}% ({cripto.DISPLAY.USD.CHANGE24HOUR})</Text>
            {/* <Text>{cripto.DISPLAY.USD.CHANGE24HOUR}</Text> */}
            </View>

            </View>

            
            <Text style={styles.price}>{cripto.DISPLAY.USD.PRICE}</Text>
            
  
        </View>
    )
}

export default FormatoLista;

const styles = StyleSheet.create({

    view:{
        flexDirection: 'row',
        height: 100,
        paddingVertical: 20,
        

        backgroundColor: 'white',

        marginVertical: 4,
        shadowColor: "#000",
        textAlignVertical: 'center',
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,
    
    },

    text:{
        width:'50%',
        textAlign:'left',
        paddingLeft: 7.5
    },

    name:{
        color: '#2C272E',
        fontSize: 20,
        fontWeight: 'bold'
    },

    change:{
        flexDirection: 'row'

    },

    image:{
        width: '15%',
        height: '100%'
        //height: 20,
      },
      
      image_pic:{
        paddingHorizontal: 0,
        
        width: '100%',
        height: '100%',
      },


      price:{
          fontSize: 22,
          color: "darkgrey",
          textAlign: 'center',
          textAlignVertical: 'center',
          
          width: '35%'
      }

})