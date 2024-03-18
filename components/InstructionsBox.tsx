import React from 'react'
import {StyleSheet, Pressable, View, Text, Image} from 'react-native'
import { Link } from 'expo-router'

const styles = StyleSheet.create({
    instructionsContainer: {
        backgroundColor:'#204D8D',
        width: '90%',
        height:320,
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
        fontSize: 45,
        color:'#FFFFFF'
    },
    titleLine : {
        height: 3,
        width: '100%',
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
})

export default function InstructionsBox({planet} : {planet : string}) {
  return (
    <View style={styles.instructionsContainer}>
        <Text style={styles.diagTitle}>¡Desafíate!</Text>
        <Image style={styles.titleLine} source={require('../assets/images/Línea_título.png')}/>
        <Text style={[styles.standarText, ]}>Supera estos desafíos y empieza a completar las misiones del</Text>
        <Text style={[styles.standarText, {fontWeight: 'bold'}]}>{planet}</Text>
        <Link href="/pregunta" asChild>
            <Pressable
                style={styles.buttonStyle}
            >
                <Text style={[styles.standarText, {color:'#133362', fontSize: 16, fontWeight:'700'}]}>¡ACEPTO EL RETO!</Text>
            </Pressable>
        </Link>
    </View>
  )
}