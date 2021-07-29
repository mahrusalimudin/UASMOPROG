import React, {useEffect} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import Logo from '../../assets/OIP.png';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  });
  return (
    <View style={styles.wrapper}>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    margin: 10,
    resizeMode: 'contain',
    height: '30%',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    paddingBottom: 20,
  },
});
