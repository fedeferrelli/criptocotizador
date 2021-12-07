import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground} from 'react-native';



const Encabezado = ({cripto}) => {
    
	
	return(

		<View style = {styles.encabezado}>


		 	<View style={styles.image}>
				<Image 
					style={styles.image_pic}
					source = {{uri:`${cripto.image}`}}
					//resizeMode="contain"
				/>		
			</View>

			<View style={styles.viewText}>

				<Text style={styles.fullName}>{cripto.name}</Text>

				<Text style = {styles.name}>{cripto.symbol}</Text>

				<Text style = {styles.price}>${Math.round(cripto.current_price*100)/100}</Text>

				{/* <View style={styles.detail}>
					<Text style={styles.leftText}>Lanzamiento: {cripto.CoinInfo.AssetLaunchDate}</Text>
				</View>


				<View style={styles.detail}>
					<Text style={styles.leftText}>Oferta: {cripto.DISPLAY.USD.SUPPLY}</Text>
				</View>


				<View style={styles.detail}>
					<Text style={styles.leftText}>Capitalización: {cripto.DISPLAY.USD.MKTCAP}</Text>
				</View> */}

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