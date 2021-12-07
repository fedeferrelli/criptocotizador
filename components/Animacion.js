import React, {useState, useEffect} from 'react';
import {StyleSheet, Animated, View} from 'react-native';

import Rocket from '../assets/rocket.png';


const Animacion = ({setAnimated}) => {
  

  const [position] = useState(new Animated.Value(500));
  const [show] = useState(new Animated.Value(0));
  const [font] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(position, {
        toValue: -500,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.timing(show, {
        toValue: 1,
        duration: 100,
        delay: 1000,
        useNativeDriver: false,
      }),
    ]).start(() =>
      Animated.timing(font, {
        toValue: 200,
        duration: 800,
        delay: 700,
        useNativeDriver: false,
      }).start(() => setAnimated(true)),
    );
  }, []);

    return (

        <View style={styles.container}>
          <Animated.Image
            style={[styles.image, {top: position}]}
            source={Rocket}
          />
          <Animated.Text
            style={[styles.text, {opacity: show, transform: [{scale: font}]}]}>
            Welcome
          </Animated.Text>
        </View>
     
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#142950',
    justifyContent: 'space-around',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 50,
    color: 'rgb(242, 242, 242)',
  },
});

export default Animacion;