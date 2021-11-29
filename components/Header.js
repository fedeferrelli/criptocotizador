import React, {useState, useEffect} from 'react';

import { View, Text, StyleSheet } from 'react-native';


const Header = () => {
    return(
        <View style={styles.view}> 
            <Text style={styles.text}>Criptocotizador</Text>
        </View>
    )
};
export default Header;

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
   

