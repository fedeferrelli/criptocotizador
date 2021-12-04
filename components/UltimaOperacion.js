import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import {Icon} from 'react-native-elements';


const UltimaOperacion = ({cripto}) => {

	const [showUltimaOperacion, setShowUltimaOperacion] = useState(false)

	if (showUltimaOperacion){

	return(
	
		<View style={styles.view}>

			<Text style={styles.title}>Ultima Transacción</Text>

			<View style={styles.detail}>
				<Text style={styles.leftText}>Precio: {cripto.DISPLAY.USD.PRICE}</Text>
				<Text style={styles.rightText}></Text>
			</View>

			<View style={styles.detail}>
				<Text style={styles.leftText}>Volumen: {cripto.DISPLAY.USD.LASTVOLUME}</Text>
				<Text style={styles.rightText}></Text>
			</View>

			<View style={styles.detail}>
				<Text style={styles.leftText}>Importe: {cripto.DISPLAY.USD.LASTVOLUMETO}</Text>
				<Text style={styles.rightText}></Text>
			</View>

			<View style={styles.detail}>
				<Text style={styles.leftText}>Mercado: {cripto.RAW.USD.LASTMARKET}</Text>
				<Text style={styles.rightText}></Text>
			</View>

			<View style={styles.detail}>
				<Text style={styles.leftText}>Número de Id: {cripto.DISPLAY.USD.LASTTRADEID}</Text>
				<Text style={styles.rightText}></Text>
			</View>

			<Pressable onPress={()=>setShowUltimaOperacion(!showUltimaOperacion)}>
			<Icon
			type='material-community'
			name='chevron-up'
			/>
			</Pressable>

		</View>

	)}

	else return(

		<View style={styles.view}>

		<Text style={styles.title}>Ultima Transacción</Text>


		<Pressable onPress={()=>setShowUltimaOperacion(!showUltimaOperacion)}>
			<Icon
			type='material-community'
			name='chevron-down'
			/>
		</Pressable>

	</View>


	)

};

export default UltimaOperacion;

const styles = StyleSheet.create({

	view:{
        width: '95%',
        justifyContent: 'center',
        marginVertical: 25,
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