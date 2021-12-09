import React from 'react';
import {View, Text, StyleSheet, Image, TouchableNativeFeedback} from 'react-native';
import { Icon } from 'react-native-elements'


const FormatoLista = ({cripto, navigation}) => {

	const re_pricing = (price) =>{
		if (price<10){
			return Math.round(price*1000)/1000
		}
		else if (price < 100){
			
			return Math.round(price*100)/100
		}
		else if (price < 1000){
			
			return Math.round(price*10)/10
		}
		else return Math.round(price)
	};

        
    return(

        <TouchableNativeFeedback 
        onPress={()=>navigation.navigate('Detalle', {cripto})} >
            
        <View style={styles.view}>

            <View style={styles.image}>
            <Image 
                style = {styles.image_pic}
                source = {{uri:`${cripto.image}`}}
            />
            </View>
 
            <View style={styles.text}>

            <View style={styles.name_rank}>
            
            <Text style={styles.name}>{cripto.name}</Text>
            
            </View>
            
            

            <View style={styles.change}>

            <Text
            style={cripto.price_change_percentage_24h<0 ? {color:'red', fontWeight:'bold',  textAlignVertical:'center'} : cripto.price_change_percentage_24h>0 ?  {color:'green', fontWeight:'bold',  textAlignVertical:'center'} : {fontWeight:'bold', textAlignVertical:'center'}}
            >{Math.round(cripto.price_change_percentage_24h*10)/10}%</Text>
            
            <View style={styles.icon}>
                <Icon
                type='material-community'
                name= {cripto.price_change_percentage_24h<0 ? 'chevron-double-down' : cripto.price_change_percentage_24h>0 ? 'chevron-double-up' : 'equal'}
                color= {cripto.price_change_percentage_24h<0 ? 'red' : cripto.price_change_percentage_24h>0 ?  'green' : 'black'}
                />
            </View>
                    
            </View>

            </View>

            <View style={styles.price_rank}>
            <Text style={styles.price}>${re_pricing(cripto.current_price)}</Text>
            <Text style={styles.rank}>Rank: {cripto.market_cap_rank} </Text>
            </View>
            
  
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

    name_rank:{
        flexDirection: 'row',
        
    },  

    rank:{
        fontSize: 20,
        color: 'grey',
        textAlignVertical: 'bottom',
    },

    name:{
        color: '#2C272E',
        fontSize: 20,
        fontWeight: 'bold',
        textAlignVertical: 'bottom',
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
        borderRadius: 20
      },

      price_rank:{
        flex:1,
        justifyContent: 'center',
        //alignItems: 'right',
        textAlignVertical: 'center',
        width: '40%',
        paddingRight: 15,
    },


      price:{
          fontSize: 19,
          textAlign: 'right',
          justifyContent: 'center',
          alignItems: 'center',
          textAlignVertical: 'center',
          
         },

         rank:{
            fontSize: 14,
            textAlign: 'right',
            justifyContent: 'center',
            alignItems: 'center',
            textAlignVertical: 'center',
            fontStyle: 'italic',
            color: 'grey'
           },

      icon:{
          textAlign:'left',
          textAlignVertical:'center'
      }

})