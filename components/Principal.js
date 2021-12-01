import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import axios from 'axios';

import Mostrar from './Mostrar';
/* import Header from './Header' */


const Principal = ({navigation}) => {  

  const [ criptomonedas, guardarCriptomonedas ] = useState([

  useEffect(() => {
    const consultarAPI = async () => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
        const resultado = await axios.get(url);
        guardarCriptomonedas(resultado.data.Data);
    }
    consultarAPI();
}, [])
])


if (criptomonedas.length>0){
  const [data, setdata] = useState({criptomonedas})}

console.log(criptomonedas[0])


  if (criptomonedas)
  return (
<>
   {/* <Header/> */}
   <Mostrar
    criptomonedas={criptomonedas}
    navigation = {navigation}/>

</>
  );

  else
  return(
    <Text>fede</Text>
  )
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