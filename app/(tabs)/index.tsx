import { StyleSheet, ImageBackground, Image } from 'react-native';

import InstructionsBox from '@/components/InstructionsBox';
import { Text, View } from '@/components/Themed';


import LottieView from 'lottie-react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default function TabOneScreen() {


  return (
    <ImageBackground 
      style={styles.container}
      source={require('../../assets/images/bg_galaxy.png')}
    >
      <LottieView
        style={{position:'absolute', width:250, height:250, backgroundColor:'transparent', zIndex:1, top:110, left:-20}}
        source={require('../../assets/images/D2.json')}
        autoPlay
        loop
      />
      <InstructionsBox planet='Planeta Aritmética'/>
      <Image source={require('../../assets/images/Círculo-morado-1.png')} style={{position: 'absolute', bottom:-180, width:'120%', height:300}}/>
      <Image source={require('../../assets/images/Círculo-morado-2.png')} style={{position: 'absolute', bottom:-180, width:'100%', height:250}}/>
      <Image source={require('../../assets/images/Círculo-morado-4.png')} style={{position: 'absolute', bottom:-180, width:'100%', height:220}}/>
      <Image source={require('../../assets/images/Chanin.png')} style={{position: 'absolute', bottom:-30, left:0, width:100, height:280}}/>
    </ImageBackground>
  );
}


