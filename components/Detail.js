import React from 'react';

import { ScrollView, Text, StyleSheet, Image } from 'react-native';

import Encabezado from './Encabezado';
import Diario from './Diario';
import Hora from './Hora';
import UltimaOperacion from './UltimaOperacion';


const Detail = ({navigation, route}) => {

    const cripto = route.params.cripto;

    return(
       
        <ScrollView 
        contentContainerStyle={ {alignItems: 'center', justifyContent:'center'}}
        style={styles.view}>
   
            <Encabezado
            style={styles.encabezado}
            cripto={cripto}/>

            <Diario
            style={styles.diario}
            cripto={cripto}/>

            <Hora
            style={styles.hora}
            cripto={cripto}/>

            <UltimaOperacion
            style={styles.operacion}
            cripto={cripto}/>


            
         </ScrollView> 
    );

};
export default Detail;

const styles = StyleSheet.create({
    view:{
        width: '100%',       
        textAlign: 'center',
    }, 

    text:{
        fontSize: 20,
        width: '100%',
        textAlign:'center',
        marginBottom: 20
    },
    image_pic:{
        
        width: 100,
        height: 100,
      },

      encabezado:{
          textAlign: 'center',
        marginTop: 250, 
        width:'90%',
        
      }
})
   