import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Hora = ({cripto}) => {

	return(
		
		<View style={styles.view}>
			
		<Text style={styles.title}>Datos de la última hora</Text>
		

		<View style={styles.detail}>
			<Text style={styles.leftText}>Variación: {cripto.DISPLAY.USD.CHANGEPCTHOUR}% ({cripto.DISPLAY.USD.CHANGEHOUR})</Text>
		</View>

		<View style={styles.detail}>
			<Text style={styles.leftText}>Precio Apertura: {cripto.DISPLAY.USD.OPENHOUR}</Text>
		</View>

		<View style={styles.detail}>
			<Text style={styles.leftText}>Precio Máximo: {cripto.DISPLAY.USD.HIGHHOUR}</Text>
		</View>


		<View style={styles.detail}>
			<Text style={styles.leftText}>Precio Mínimo: {cripto.DISPLAY.USD.LOWHOUR}</Text>
		</View>

		<View style={styles.detail}>
			<Text style={styles.leftText}>Volumen: {cripto.DISPLAY.USD.VOLUMEHOUR}</Text>			
		</View>

		<View style={styles.detail}>
			<Text style={styles.leftText}>Volumen: {cripto.DISPLAY.USD.VOLUMEHOURTO}</Text>
		</View>


		</View>

	)

};

export default Hora;

const styles = StyleSheet.create({

	view:{
        width: '95%',
        justifyContent: 'center',
        marginTop: 25,
        alignItems: 'center',

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
paddingHorizontal: 15,
paddingBottom: 10
       
	},

	title:{
		fontSize: 19,
        fontWeight: 'bold',
        marginVertical: 10,		
	},

	detail:{
		flexDirection: 'row',
		width:'100%',
        marginVertical: 2.5	
	},

	leftText:{
		width: '100%',
		textAlign: 'center',
	},

	rightText:{
		width:'50%',
		textAlign: 'left'}

})