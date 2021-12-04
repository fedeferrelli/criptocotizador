import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import {Icon} from 'react-native-elements';

const Diario = ({cripto}) => {

	const [showDiario, setShowDiario] = useState(false)


	if (showDiario){

	return(
		
		<View style={styles.view}>
			
		<Text style={styles.title}>Datos del día</Text>
		

		<View style={styles.detail}>
			<Text style={styles.leftText}>
				Variación: 
					<Text style={[cripto.DISPLAY.USD.CHANGEPCTDAY<0 ? styles.negative : styles.noNegative]}> {cripto.DISPLAY.USD.CHANGEPCTDAY}% 
					</Text> ({cripto.DISPLAY.USD.CHANGEDAY})
			</Text>
		</View>

		<View style={styles.detail}>
			<Text style={styles.leftText}>Precio Apertura: {cripto.DISPLAY.USD.OPENDAY}</Text>	
		</View>

		<View style={styles.detail}>
			<Text style={styles.leftText}>Precio Máximo: {cripto.DISPLAY.USD.HIGHDAY}</Text>	
		</View>


		<View style={styles.detail}>
			<Text style={styles.leftText}>Precio Mínimo: {cripto.DISPLAY.USD.LOWDAY}</Text>		
		</View>

		<View style={styles.detail}>
			<Text style={styles.leftText}>Volumen: {cripto.DISPLAY.USD.VOLUMEDAY}</Text>		
		</View>

		<View style={styles.detail}>
			<Text style={styles.leftText}>Volumen: {cripto.DISPLAY.USD.VOLUMEDAYTO}</Text>
		</View>

		<Pressable onPress={()=>setShowDiario(!showDiario)}>
			<Icon
			type='material-community'
			name='chevron-up'
			underlayColor='#517fa4'
			/>
		</Pressable>

		</View>


	)}

	else return(
		<View style={styles.view}>
			
		<Text style={styles.title}>Datos del día</Text>
		

		<View style={styles.detail}>
			<Text style={styles.leftText}>
				Variación: 
					<Text style={[cripto.DISPLAY.USD.CHANGEPCTDAY<0 ? styles.negative : styles.noNegative]}> {cripto.DISPLAY.USD.CHANGEPCTDAY}% 
					</Text> ({cripto.DISPLAY.USD.CHANGEDAY})
			</Text>
		</View>

		<Pressable onPress={()=>setShowDiario(!showDiario)}>
		
			<Icon
			type='material-community'
			name='chevron-down'
			/>
		</Pressable>

		</View>


	)

};

export default Diario;

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