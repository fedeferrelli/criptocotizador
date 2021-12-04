import React, {useState, useEffect} from 'react';
import {ScrollView, View, ActivityIndicator, StyleSheet, FlatList, RefreshControl} from 'react-native';
import FormatoLista from './FormatoLista';

const Mostrar = ({criptomonedas, navigation, refresh, setRefresh, refreshing, setRefreshing}) => {

   // const [refreshing, setRefreshing] = useState(false)
    
    const onRefresh =() =>{
        setRefreshing(true)
        setRefresh(!refresh)
       // setTimeout(function(){ setRefreshing(false); }, 800); 

        
    }

    if(criptomonedas.length>1)

    return(

        <View style={styles.view}>


                 <FlatList
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                 } 
                 contentContainerStyle = {styles.flatList}
                    data={criptomonedas}
                    renderItem={({item}) =>
                   
                    <FormatoLista
                        cripto={item}
                        navigation={navigation}
                    />    
                }
                   
                    keyExtractor={item => item.CoinInfo.Id}
              
                    />
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