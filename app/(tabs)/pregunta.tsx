import { StyleSheet, ImageBackground, Image, Pressable} from 'react-native';
import { Text, View } from '@/components/Themed';
import QuestionDisplay from '@/components/questionDisplay';
import { useState } from 'react';
import { Link } from 'expo-router';

type GridItem = {
    key: string;
    text: string;
};

const answers = [
    { key: '1', text: '84', correct: false },
    { key: '2', text: '83', correct: true },
    { key: '3', text: '82', correct: false },
    { key: '4', text: '67', correct: false },
  ];

export default function Pregunta() {
    const [result, setResult] = useState(false)
    const [coins, setCoins] = useState(0);

    const handleQuestionResult = (isCorrect:boolean) => {
        if (isCorrect) {
            setResult(isCorrect)
            setCoins(coins + 10)
        } 
    };

    return (
        <ImageBackground 
        style={styles.container}
        source={require('../../assets/images/bg_galaxy.png')}
        >
            <Image style={styles.imagePlanet} source={require('../../assets/images/PlanetaAritmética.png')}/>
            <View style={styles.coins} >
                <Image source={require('../../assets/images/moneda.png')}/>
                <Text style={{fontSize:18, width:70, marginLeft:10}}>{coins}</Text>
            </View>
            <Text style={styles.diagTitle}>¡Desafíate!</Text>
            <Image style={styles.titleLine} source={require('../../assets/images/Línea_título.png')}/>
            <View style={styles.barraProgreso}>
                <View style={[styles.barraProgresoInterna, {width: result ? '20%':'0%'}]}/>
            </View>
            <QuestionDisplay question='75 + 8' answers={answers} onResultChange={handleQuestionResult}/>
            
            <Link href="/puntaje" asChild>
                <Pressable
                    onPress={()=>{console.log('hola')}}
                    style={styles.buttonStyle}
                >
                    <Text style={[styles.standarText, {color:'#133362', fontSize: 16, fontWeight:'700'}]}>SIGUIENTE</Text>
                </Pressable>
            </Link>
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
        marginVertical:30,
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