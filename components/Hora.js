import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import {Icon} from 'react-native-elements';



const Hora = ({cripto}) => {

	const [showHora, setShowHora] = useState(false)

	if (showHora){

	return(
		
		<View style={styles.view}>
			
		<Text style={styles.title}>Datos de la última hora</Text>
		

		<View style={styles.detail}>
			<Text style={styles.leftText}>
				Variación: 
					<Text style={[cripto.DISPLAY.USD.CHANGEPCTHOUR<0 ? styles.negative : styles.noNegative]}> {cripto.DISPLAY.USD.CHANGEPCTHOUR}% </Text> 
				 ({cripto.DISPLAY.USD.CHANGEHOUR})
			</Text>
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

		<Pressable onPress={()=>setShowHora(!showHora)}>
			<Icon
			type='material-community'
			name='chevron-up'
			underlayColor='#517fa4'
			/>
		</Pressable>


		</View>

	);}

	else return(

		<View style={styles.view}>
			
		<Text style={styles.title}>Datos de la última hora</Text>
		

		<View style={styles.detail}>
			<Text style={styles.leftText}>
				Variación: 
					<Text style={[cripto.DISPLAY.USD.CHANGEPCTHOUR<0 ? styles.negative : styles.noNegative]}> {cripto.DISPLAY.USD.CHANGEPCTHOUR}% </Text> 
				 ({cripto.DISPLAY.USD.CHANGEHOUR})
			</Text>
		</View>

		<Pressable onPress={()=>setShowHora(!showHora)}>
			<Icon
			type='material-community'
			name='chevron-down'
			underlayColor='#517fa4'
			/>
		</Pressable>


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
		textAlign: 'left'
	},

	negative:{
		color:'red',
		fontWeight:'bold'
	},

	noNegative:{
		color:'green',
		fontWeight:'bold'
	}

})