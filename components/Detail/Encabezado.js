import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';



const Encabezado = ({cripto}) => {

	const re_pricing = (price) =>{
		if (price<10){
			return Math.round(price*1000)/1000
		}
		else if (price < 100){
			
			return Math.round(price*100)/100
		}
		else if (price < 1000){
			
			return Math.round(price*10)/10
		}
		else return Math.round(price)
	};
    	
	return(

		<View style = {styles.encabezado}>


		 	<View style={styles.image}>
				<Image 
					style={styles.image_pic}
					source = {{uri:`${cripto.image}`}}
				/>		
			</View>

			<View style={styles.viewText}>

				<Text style={styles.fullName}>{cripto.name}</Text>

				<Text style = {styles.name}>{cripto.symbol.toUpperCase()}</Text>

				<Text style = {styles.price}>${re_pricing(cripto.current_price)}</Text>

				 <View style={styles.detail}>
					<Text style={styles.leftText}>Oferta: {Math.round(cripto.circulating_supply/100000)/10} millones</Text>
				</View>


				<View style={styles.detail}>
					<Text style={styles.leftText}>Market Cap: ${Math.round(cripto.market_cap/100000000
						)/10} billons (nº {cripto.market_cap_rank})</Text>
				</View>


				<View style={styles.detail}>
					<Text style={styles.leftText}>Precio Máximo: {cripto.ath} ({Math.round((cripto.ath/cripto.current_price-1)*1000)/10}%)</Text>
				</View>

			</View>

		</View>

)};

export default Encabezado;

const styles = StyleSheet.create({

	encabezado:{
        width: '95%',
        justifyContent: 'center',
        marginTop: 70,
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

    image:{
        width: 90,
        height: 90,
       
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        position: 'absolute',
	    top: -45,
        borderRadius: 45,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
      },
      
    image_pic:{
        width: '90%',
       	height: '90%',
		borderRadius:45, 
		
    },

	viewText:{
		width: '100%',
		justifyContent: 'center',
        marginTop: 50,
        
	},

	fullName:{
		fontSize: 22,
		fontWeight: 'bold',
        textAlign: 'center',
	},

	name:{
        textAlign: 'center',
				
	},

	price:{
		fontSize: 22,
		fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
	},

	detail:{
		flexDirection: 'row',
		width: '100%',
        marginVertical: 2.5	
	},

	leftText:{
		textAlign: 'center',
		width:'100%'		
	},

	rightText:{
		textAlign: 'left',
		width:'50%'		
	}


})