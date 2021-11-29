import React, {useState, useEffect} from 'react';

import { View, Text, StyleSheet } from 'react-native';


const Detail = ({navigation, route}) => {

    const cripto = route.params.cripto;
    
    console.log(cripto)
    return(
        <View style={styles.view}> 
            <Text style={styles.text}>{cripto.CoinInfo.FullName} </Text>
        </View>
    );

};
export default Detail;

const styles = StyleSheet.create({
    view:{
        width: '100%',
        height: 100,
        backgroundColor: '#D47AE8',
        justifyContent:'flex-end',
        marginBottom: 20

    }, 

    text:{
        fontSize: 22,
        color: '#fff',
        width: '100%',
        textAlign:'center',
        marginBottom: 20
    }
})
   