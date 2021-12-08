import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { LineChart } from "react-native-chart-kit";
import axios from 'axios';


  const Grafico = ({cripto})=>{

    const [ dataGraph, setDataGraph ] = useState([])
    const [ period, setPeriod ] = useState(1)
   
    const  dato =(array)=>{
        let datos=[];

        array.map(item=>{
            datos.push(parseFloat(item[1]))
        })
        return(datos)
    }

    useEffect(() => {

        const consultarAPI_Grafico = async () => {

            setDataGraph([])
           
            const url = `https://api.coingecko.com/api/v3/coins/${cripto.id}/market_chart?vs_currency=usd&days=${period}` 
            const resultado = await axios.get(url);
            setDataGraph(dato(resultado.data.prices))       
          }
          consultarAPI_Grafico(); 
    }, [cripto, period])

    const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length; 

    const inicioPeriodo = dataGraph[0];
    const finPeriodo = dataGraph[dataGraph.length-1];
    const maximoPeriodo = Math.max(...dataGraph);
    const minimoPeriodo = Math.min(...dataGraph);
    const variacionPeriodo = (Math.round((finPeriodo/inicioPeriodo-1)*1000))/10

    const variacionAnualizada = (Math.round((Math.pow((1+variacionPeriodo/100), (365/period))-1)*1000))/10

    const periodoText = period===1 ? 'diario' : period===7 ? 'semanal' : period===30 ? 'mensual' : 'anual';

   // console.log(minimoPeriodo)
    console.log(inicioPeriodo)
    console.log(finPeriodo)
   // console.log(maximoPeriodo)
    console.log(variacionPeriodo)
    console.log(variacionAnualizada)
    

    const chartConfig = {
        backgroundGradientFrom: "white",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "white",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        decimalPlaces: average(dataGraph)>10 ? 0 : 2,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0,
        useShadowColorFromDataset: true // optional

      };

      const screenWidth = Dimensions.get("window").width;

    const data = {
        datasets: [
          {
            data: dataGraph,
            color: finPeriodo/inicioPeriodo>1 ? (opacity = 0) => `rgba(0, 143, 57, ${opacity})`: (opacity = 0) => `rgba(255, 0, 0, ${opacity})` , // optional
            strokeWidth: 3 // optional
          }
        ],
      
      };


      if (dataGraph.length>0){
      return(
<><View style={styles.grafico}>
     {   <View style={styles.botonera}>

            <Button
            title="1d"
            type={period=== 1 ? 'solid' : 'outline'}
            onPress={()=>setPeriod(1)}
            buttonStyle={styles.boton}
            containerStyle={styles.botonContainer}
            titleStyle={styles.botonTexto}
            />
            <Button
            title="7d"
            type={period===7 ? 'solid' : 'outline'}
            onPress={()=>setPeriod(7)}
            buttonStyle={styles.boton}
            containerStyle={styles.botonContainer}
            titleStyle={styles.botonTexto}
            />
            <Button
            title="30d"
            type={period===30 ? 'solid' : 'outline'}
            onPress={()=>setPeriod(30)}
            buttonStyle={styles.boton}
            containerStyle={styles.botonContainer}
            titleStyle={styles.botonTexto}
            />
            <Button
            title="1y"
            type={period===365 ? 'solid' : 'outline'}
            onPress={()=>setPeriod(365)}
            buttonStyle={styles.boton}
            containerStyle={styles.botonContainer}
            titleStyle={styles.botonTexto}
            />

        </View>}

        
        <LineChart
        data={data}
        width={screenWidth*0.92}
        height={220}
        chartConfig={chartConfig}
        withDots={false}
        withInnerLines={false}
       // withOuterLines={false}
       withVerticalLabels={false}
      // withHorizontalLabels={false}
       bezier

        style={styles.lineChart}
        />

        <View style={styles.dataPeriodo}>
            <View style={styles.header}>

                <View style={styles.image}>
                    <Image 
                        style={styles.image_pic}
                        source = {{uri:`${cripto.image}`}}
                    />		
                </View>

                <Text style={[styles.headerText, variacionPeriodo>0 ? {color:'green'} : variacionPeriodo<0 ? {color:'red'} : {color:'black'}]}> {period === 1 ? Math.round(cripto.price_change_percentage_24h*10)/10 : variacionPeriodo}%</Text>

            </View>

            <Text style={styles.dataPeriodoText}>Anualizado: {variacionAnualizada}%</Text>

            <Text style={styles.dataPeriodoText}>Precio máximo: ${Math.round(maximoPeriodo*100)/100}</Text>
            <Text style={styles.dataPeriodoText}>Precio mínimo: ${Math.round(minimoPeriodo*100)/100}</Text>

        </View>

        </View>
    </>    
        )}

        else return(<View style={styles.grafico}>
            {   <View style={styles.botonera}>
       
                   <Button
                   title="1d"
                   type={period=== 1 ? 'solid' : 'outline'}
                   onPress={()=>setPeriod(1)}
                   buttonStyle={styles.boton}
                   containerStyle={styles.botonContainer}
                   titleStyle={styles.botonTexto}
                   />
                   <Button
                   title="7d"
                   type={period===7 ? 'solid' : 'outline'}
                   onPress={()=>setPeriod(7)}
                   buttonStyle={styles.boton}
                   containerStyle={styles.botonContainer}
                   titleStyle={styles.botonTexto}
                   />
                   <Button
                   title="30d"
                   type={period===30 ? 'solid' : 'outline'}
                   onPress={()=>setPeriod(30)}
                   buttonStyle={styles.boton}
                   containerStyle={styles.botonContainer}
                   titleStyle={styles.botonTexto}
                   />
                   <Button
                   title="1y"
                   type={period===365 ? 'solid' : 'outline'}
                   onPress={()=>setPeriod(365)}
                   buttonStyle={styles.boton}
                   containerStyle={styles.botonContainer}
                   titleStyle={styles.botonTexto}
                   />
       
               </View>}
       
               
                <ActivityIndicator size="large" color="#000" 
                style={styles.activityIndicator}
                />
       
               </View>)
  };

  export default Grafico;


const styles = StyleSheet.create({

	grafico:{
        width: '95%',
        justifyContent: 'center',
        marginVertical: 40,
        //alignItems: 'center',
        textAlign: 'center',

        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 2,
        },

        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,

        backgroundColor:'#fff',

       borderRadius: 10,
        paddingLeft: 0,
        //paddingBottom: 10
       
	},

    botonera:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:20,
        marginBottom:30
        
    },

    botonTexto: {
      fontSize:15,
     // color: 'black'
          },

    botonContainer:{
        width:'15%',
        paddingHorizontal: 2.5,
        fontSize:4,
        //height: 32,
        
    },


    dataPeriodo:{
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom:20
    },

    header:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },

    image:{
        width: 35,
        height: 35,
       
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        
        borderRadius: 17.5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,

        marginRight: 2,
      },
      
    image_pic:{
        width: '90%',
       	height: '90%',
		borderRadius:17.5, 
		
    },

    headerText:{
        fontSize: 22,
        fontWeight: 'bold'
    },

    dataPeriodoText:{
        textAlign: 'center',
        marginVertical: 3
    },

    activityIndicator:{
        marginVertical: 166
    }
  

})

