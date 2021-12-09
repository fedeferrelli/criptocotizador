import React from 'react';

import { ScrollView, StyleSheet } from 'react-native';

import Encabezado from '../components/Detail/Encabezado';
import Grafico from '../components/Detail/Grafico';


const Detail = ({navigation, route}) => {

    const cripto = route.params.cripto;

    return(
       
        <ScrollView 
        contentContainerStyle={ {alignItems: 'center', justifyContent:'center'}}
        style={styles.view}
        >
   
            <Encabezado
            style={styles.encabezado}
            cripto={cripto}/>

            <Grafico
            cripto={cripto}
            />
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
  

      encabezado:{
        textAlign: 'center',
        marginTop: 250, 
        width:'90%',
        
      },

      Grafico:{
        textAlign: 'center',
        marginTop: 250, 
        width:'90%',
        
      }
})
   