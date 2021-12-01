import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet, FlatList} from 'react-native';
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
                }
                   
                    keyExtractor={item => item.CoinInfo.Id}
                    />}
        </View>
    );

    else
    return(
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#000" />
        </View>
    )
};


export default Mostrar;

const styles = StyleSheet.create({
    view:{
        flex: 1,
        justifyContent: 'center', 
        textAlign: 'center',
        alignContent: 'center',
        marginTop: 10,  
    },

    container: {
        flex: 1,
        justifyContent: "center"
      },

})