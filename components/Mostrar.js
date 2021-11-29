import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import FormatoLista from './FormatoLista';

const Mostrar = ({criptomonedas, navigation}) => {

    
    if(criptomonedas.length>1)

    return(

       
        <View style={styles.view}>


                 {<FlatList
                 contentContainerStyle = {styles.flatList}
                    data={criptomonedas}
                    renderItem={({item}) =>

                    <FormatoLista
                        cripto={item}
                        navigation={navigation}
                    />    

                    /* <View>
                        <Text>{item.CoinInfo.FullName}</Text>
                        <Text>{item.CoinInfo.FullName}</Text>
                    </View> */
                
                
                    
                
                
                }
                   
                    keyExtractor={item => item.CoinInfo.Id}
                    />}
        </View>
    );

    else
    return(
        <Text>esperando</Text>
    )
};


export default Mostrar;

const styles = StyleSheet.create({
    view:{
        flex: 1,
        justifyContent: 'center', 
        textAlign: 'center',
        alignContent: 'center'
       
    },

    flatList:{
        //paddingHorizontal: 10
   
    }

})