import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableNativeFeedback, TouchableHighlight} from 'react-native';


const FormatoLista = ({cripto, navigation}) => {

    console.log(cripto)
if (cripto.DISPLAY.USD)
    return(

        <TouchableNativeFeedback      /* TouchableNativeFeedback */
        
        onPress={()=>navigation.navigate('Detalle', {cripto})} >
        <View style={styles.view}>

            <View style={styles.image}>
            <Image 
                style = {styles.image_pic}
                source = {{uri:`http://www.cryptocompare.com${cripto.CoinInfo.ImageUrl}`}}

            />
            </View>

            <View style={styles.text}>

            <View>
            <Text style={styles.name}>{cripto.CoinInfo.FullName}</Text>
            </View>
            
            

            <View style={styles.change}>

            <Text
            style={cripto.DISPLAY.USD.CHANGEPCTDAY<0 ? {color:'red', fontWeight:'bold'} : {color:'green', fontWeight:'bold'}}
            > {cripto.DISPLAY.USD.CHANGEPCTDAY}% </Text>
         
            </View>

            </View>

            
            <Text style={styles.price}>${Math.round(cripto.RAW.USD.PRICE*100)/100}  </Text>
            
  
        </View>

        </TouchableNativeFeedback>
    )

    else {'continue'}
}

export default FormatoLista;

const styles = StyleSheet.create({

    view:{
        flexDirection: 'row',
        height: 90,
        paddingVertical: 10,
        marginHorizontal: 10,

        borderRadius: 10,
        

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
        paddingLeft: 5,
        justifyContent: 'center',
        textAlignVertical: 'center',

        //backgroundColor: 'blue'
    },

    name:{
        color: '#2C272E',
        fontSize: 20,
        fontWeight: 'bold',
        //backgroundColor: 'green'
    },

    change:{
        flexDirection: 'row'

    },

    image:{
        width: '15%',
        height: '100%',
       
        justifyContent: 'center',
        alignItems: 'center',

        //backgroundColor: 'red'
      },
      
      image_pic:{
        
        width: '70%',
        height: '70%',
      },


      price:{
          flex:1,
          fontSize: 22,
          color: "grey",
          textAlign: 'right',
          justifyContent: 'center',
          alignItems: 'center',
          textAlignVertical: 'center',
          width: '35%',
          fontWeight: 'bold'

          //backgroundColor: 'orange'
      }

})