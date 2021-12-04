
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ToastAndroid, Alert } from 'react-native';

import axios from 'axios';

import Mostrar from './Mostrar';



const Principal = ({navigation}) => {  

  const [ criptomonedas, guardarCriptomonedas ] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [refreshing, setRefreshing] = useState(false)

  const horario= () =>{
    const d = new Date()
    const hora = d.getHours();
    const minutos = `${("0"+d.getMinutes()).slice(-2)}`;
    const segundos = `${("0"+d.getSeconds()).slice(-2)}`;

    return (`${hora}:${minutos}:${segundos}`)
   
  };

  useEffect(() => {

    const consultarAPI = async () => {
       
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
        const resultado = await axios.get(url);
        guardarCriptomonedas(resultado.data.Data);
        setRefreshing(false)
        
        if (horario){
    ToastAndroid.showWithGravityAndOffset(
          `Actualizado a las ${horario()}`,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );}

    }
    consultarAPI();    
}, [refresh])


  return (
<>
   
   <Mostrar
    criptomonedas={criptomonedas}
    navigation = {navigation}
    refresh={refresh}
    setRefresh={setRefresh}
    refreshing={refreshing}
    setRefreshing={setRefreshing}/>

</>
  );

};

export default Principal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
