import React from 'react';
import {View, Text, StyleSheet, Image, TouchableNativeFeedback, TouchableHighlight} from 'react-native';
import { Icon } from 'react-native-elements'


const FormatoLista = ({cripto, navigation}) => {


        
    return(

        <TouchableNativeFeedback 
        onPress={()=>navigation.navigate('Detalle', {cripto})} >
            
        <View style={styles.view}>

            <View style={styles.image}>
            <Image 
                style = {styles.image_pic}
                source = {{uri:`http://www.cryptocompare.com${cripto.CoinInfo.ImageUrl}`}}
                resizeMode='contain'

            />
            </View>
 
            <View style={styles.text}>

            <View>
            <Text style={styles.name}>{cripto.CoinInfo.FullName}</Text>
            </View>
            
            

            <View style={styles.change}>


            <Text
            style={cripto.DISPLAY.USD.CHANGEPCTDAY<0 ? {color:'red', fontWeight:'bold',  textAlignVertical:'center'} : cripto.DISPLAY.USD.CHANGEPCTDAY>0 ?  {color:'green', fontWeight:'bold',  textAlignVertical:'center'} : {fontWeight:'bold', textAlignVertical:'center'}}
            >{cripto.DISPLAY.USD.CHANGEPCTDAY}%</Text>

<View style={styles.icon}>
                <Icon
                type='material-community'
                name= {cripto.DISPLAY.USD.CHANGEPCTDAY<0 ? 'chevron-double-down' : cripto.DISPLAY.USD.CHANGEPCTDAY>0 ? 'chevron-double-up' : 'equal'}
                color= {cripto.DISPLAY.USD.CHANGEPCTDAY<0 ? 'red' : cripto.DISPLAY.USD.CHANGEPCTDAY>0 ?  'green' : 'black'}
                />
            </View>
         
            </View>

            </View>

            
            <Text style={styles.price}>{cripto.DISPLAY.USD.PRICE}</Text>
            
  
        </View>

        </TouchableNativeFeedback>
    )


}

export default FormatoLista;

const styles = StyleSheet.create({

    view:{
        flexDirection: 'row',
        height: 80,
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
        width:'45%',
        textAlign:'left',
        paddingLeft: 5,
        justifyContent: 'center',
        textAlignVertical: 'center',       
    },

    name:{
        color: '#2C272E',
        fontSize: 20,
        fontWeight: 'bold',
    },

    change:{
        flexDirection: 'row'
    },

    image:{
        width: '15%',
        height: '100%',      
        justifyContent: 'center',
        alignItems: 'center',
      },
      
      image_pic:{
        
        width: '65%',
        height: '65%',
      },


      price:{
          flex:1,
          fontSize: 19,
          textAlign: 'right',
          justifyContent: 'center',
          alignItems: 'center',
          textAlignVertical: 'center',
          width: '40%',
         paddingRight: 15,
      },

      icon:{
          textAlign:'left',
          textAlignVertical:'center'
      }

})