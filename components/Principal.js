
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import axios from 'axios';

import Mostrar from './Mostrar';



const Principal = ({navigation}) => {  

  const [ criptomonedas, guardarCriptomonedas ] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    const consultarAPI = async () => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
        const resultado = await axios.get(url);
        guardarCriptomonedas(resultado.data.Data);
    }
    consultarAPI();
    //setRefresh(false)
    setRefreshing(false)
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
