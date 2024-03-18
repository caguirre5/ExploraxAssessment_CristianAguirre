import { StyleSheet, ImageBackground, Image} from 'react-native'
import { Text, View } from '@/components/Themed'
import ResultsBox from '@/components/resultsBox'
import LottieView from 'lottie-react-native'

export default function Puntaje() {
    const monedas = 10

    return (
        <ImageBackground 
        style={styles.container}
        source={require('../../assets/images/bg_galaxy.png')}
        >
            <LottieView
                style={{position:'absolute', width:250, height:250, backgroundColor:'transparent', zIndex:1, top:'13%'}}
                source={require('../../assets/images/D2.json')}
                autoPlay
                loop
            />
            <Image style={styles.imagePlanet} source={require('../../assets/images/PlanetaAritmética.png')}/>
            <View style={styles.coins} >
                <Image source={require('../../assets/images/moneda.png')}/>
                <Text style={{fontSize:18, width:70, marginLeft:10}}>{monedas}</Text>
            </View>
            <View style={styles.barraProgreso}>
                <View style={[styles.barraProgresoInterna, {width:'10%'}]}/>
            </View>
            <ResultsBox></ResultsBox>
            
      <Image source={require('../../assets/images/Chanin.png')} style={{position: 'absolute', bottom:-30, left:0, width:100, height:280}}/>
        </ImageBackground>
      );
    }
    
const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    imagePlanet : {
        width: 80,
        height: 80,
        position: 'absolute',
        zIndex: 1,
        top: '5%',
        left: '5%',
    },
    coins : {
        width: 120,
        height: 80,
        position: 'absolute',
        zIndex: 1,
        top: '5%',
        right: '5%',
        justifyContent: 'space-around',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor: 'transparent'
    },
    buttonStyle : {
        backgroundColor:'#FFFFFF',
        borderRadius: 10,
        borderColor: '#123051',
        borderTopWidth: 2,
        borderRightWidth: 1,
        borderBottomWidth: 5,
        borderLeftWidth: 1,
        paddingHorizontal: 30,
        paddingVertical: 8,
        marginTop:50,
    },
    standarText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#133362'
    },
    barraProgreso : {
        width: '90%',
        height: 18,
        backgroundColor:'#FFFFFF',
        borderRadius: 20,
        marginTop:50,
    },

    barraProgresoInterna : {
        height: 18,
        backgroundColor:'#F1BD42',
        borderRadius: 20,
    },diagTitle: {
        fontWeight:'bold',
        fontSize: 40,
        color:'#FFFFFF',
    },
    titleLine : {
        height: 3,
        width: '100%',
    },
});


