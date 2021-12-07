
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ToastAndroid, TextInput, Button } from 'react-native';
import { Icon } from 'react-native-elements';

import axios from 'axios';

import Mostrar from './Mostrar';



const Principal = ({navigation}) => {  

  const [ criptomonedas, guardarCriptomonedas ] = useState([]);
  
  const [refresh, setRefresh] = useState(false);

  const [refreshing, setRefreshing] = useState(false)

  const [search, setSearch] = useState('')

  const horario= () =>{
    const d = new Date()
    const hora = d.getHours();
    const minutos = `${("0"+d.getMinutes()).slice(-2)}`;
    const segundos = `${("0"+d.getSeconds()).slice(-2)}`;

    return (`${hora}:${minutos}:${segundos}`)
   
  };

  useEffect(() => {

    const consultarAPI = async () => {
       
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false';
        const resultado = await axios.get(url);
        guardarCriptomonedas(resultado.data);
        setRefreshing(false)
     

        
     /*   if (horario){
        ToastAndroid.showWithGravityAndOffset(
              `Actualizado a las ${horario()}`,
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              25,
              50
            );

        } */
      }
    consultarAPI();    
}, [refresh])


const onChangeText = (text) =>{
  setSearch(text)
  
}

/* const [searching, setSearching] = useState(false);

const onSearching=()=>{
  setSearching(!searching)
  

}

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        
        <Icon
                type='material-community'
                name= 'magnify'
                color= 'blue'
                onPress={onSearching}
                />
      ),
    });
  }, []); */

  return (
    <>
    
    <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    placeholder="Buscar crypto"
    /> 
    
    
       <Mostrar
        criptomonedas
        ={criptomonedas.filter((cripto) => cripto.name.toLowerCase().includes(search.toLowerCase()) ||cripto.symbol.toLowerCase().includes(search.toLowerCase()))}
        navigation = {navigation}
        refresh={refresh}
        setRefresh={setRefresh}
        refreshing={refreshing}
        setRefreshing={setRefreshing}/>
    
    </>
      )

} ;

export default Principal;

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginHorizontal: '5%',
    marginTop:10,
    borderBottomWidth: 1,
    fontStyle:'italic'
  },

  search:{
    //position:'absolute',
    top:-1,
    width:50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'orange'
  }
});
