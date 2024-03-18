import React from 'react'
import {StyleSheet, Pressable, View, Text, Image, ImageBackground} from 'react-native'
import { Link } from 'expo-router'

const styles = StyleSheet.create({
    instructionsContainer: {
        backgroundColor:'#204D8D',
        width: '90%',
        height:420,
        borderRadius: 10,
        borderColor: '#123051',
        borderTopWidth: 3,
        borderRightWidth: 2,
        borderBottomWidth: 6,
        borderLeftWidth: 2,
        display:'flex',
        alignItems:'center',
        justifyContent: 'space-between',
        padding: 30,
        marginTop:100,
    },
    diagTitle: {
        fontWeight:'bold',
        fontSize: 40,
        color:'#FFFFFF'
    },
    buttonStyle : {
        backgroundColor:'#FFFFFF',
        borderRadius: 10,
        borderColor: '#123051',
        borderTopWidth: 2,
        borderRightWidth: 1,
        borderBottomWidth: 5,
        borderLeftWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 8,
    },
    standarText: {
        fontSize: 20,
        color:'#FFFFFF',
        textAlign: 'center',
    },
    backgroundMonedas : {
        width: 154,
        height: 80,
        justifyContent:'center',
    },
    backgroundPreguntas : {
        width: 80,
        height: 80,
        justifyContent:'center',
    },
    estrellitas:{
        position: 'absolute',
        width: '60%',
        height: '60%',
        top:-30,
        left:15,
    },
    moneda :{
        position: 'absolute',
        width: 90,
        height: 95,
        top:-10,
        left:-45,
        zIndex: 1,
    }
})

export default function ResultsBox() {
    const preguntas = 20
    const correctas = 17
    const incorrectas = 3
    const monedas = 10

  return (
    <View style={styles.instructionsContainer}>
        <Text style={styles.diagTitle}>¡Buen trabajo!</Text>
        <View style={{flexDirection:'row'}}>
            <ImageBackground style={styles.backgroundPreguntas} source={require('../assets/images/background_conteo_preguntas.png')}>
                <Image source={require('../assets/images/estrella_preguntas.png')} style={styles.estrellitas}/>
                <Text style={[styles.standarText, {fontSize: 30, fontWeight: 'bold', color: '#133362'}]}>{preguntas}</Text>
                <Text style={[styles.standarText, {fontSize: 8, fontWeight: 'bold', color: '#133362'}]}>Incorrectas</Text>
            </ImageBackground>
            <ImageBackground style={styles.backgroundPreguntas} source={require('../assets/images/background_conteo_preguntas.png')}>
                <Image source={require('../assets/images/estrella_correctas.png')} style={styles.estrellitas}/>
                <Text style={[styles.standarText, {fontSize: 30, fontWeight: 'bold', color: '#133362'}]}>{correctas}</Text>
                <Text style={[styles.standarText, {fontSize: 8, fontWeight: 'bold', color: '#133362'}]}>Incorrectas</Text>
            </ImageBackground>
            <ImageBackground style={styles.backgroundPreguntas} source={require('../assets/images/background_conteo_preguntas.png')}>
                <Image source={require('../assets/images/estrella_incorrectas.png')} style={styles.estrellitas}/>
                
                <Text style={[styles.standarText, {fontSize: 30, fontWeight: 'bold', color: '#133362'}]}>{incorrectas}</Text>
                <Text style={[styles.standarText, {fontSize: 8, fontWeight: 'bold', color: '#133362'}]}>Incorrectas</Text>
            </ImageBackground>
        </View>
        <View style={{flexDirection: 'column', marginLeft:20}}>
            <Text style={[styles.standarText, {fontSize:18, marginBottom:10}]}>Monedas obtenidas</Text>
            <ImageBackground style={styles.backgroundMonedas} source={require('../assets/images/background_conteomonedas.png')}>
                <Image source={require('../assets/images/moneda.png')} style={styles.moneda}/>
                <Text style={[styles.standarText, {fontSize: 40, fontWeight: 'bold', color: '#133362'}]}>{monedas}</Text>
            </ImageBackground>
        </View>
        <Link href="/pregunta" asChild>
            <Pressable
                style={styles.buttonStyle}
            >
                <Text style={[styles.standarText, {color:'#133362', fontSize: 16, fontWeight:'700'}]}>INICIAR MISION #1</Text>
            </Pressable>
        </Link>
    </View>
  )
}