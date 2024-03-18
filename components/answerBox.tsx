import LottieView from 'lottie-react-native';
import React, { useEffect, useRef, useState } from 'react'
import {StyleSheet, Pressable, View, Text, Image} from 'react-native'

const styles = StyleSheet.create({
    mainContainer: {
      width: '45%',
      height:'45%',
    },
    container: {
        backgroundColor: '#6AB1B5',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection:'row',
        borderRadius: 10,
        borderColor: '#448B8C',
        borderTopWidth: 2,
        borderRightWidth: 1,
        borderBottomWidth: 5,
        borderLeftWidth: 1,
        margin: 8,
    },
    standarText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    correctAnswer : {
      backgroundColor: '#6FBA3B',
      borderColor: '#4F9C2F',
    },
    incorrectAnswer : {
      backgroundColor: '#E6333C',
      borderColor: '#B52C41',
    },
    checkMark : {
      position:'absolute',
      width: 50,
      height: 50,
      top:-20,
      right:'-15%',
    }
})

export default function AnswerBox({answer, correct} : {answer : string; correct : boolean}) {
  const [answerType, setAnswerType] = useState(false)
  const [answered, setAnswered] = useState(0);
  const lottieRef = useRef(null);

  const handlePress = () => {
    if (answerType === true) {
      if (lottieRef.current) {
        lottieRef.current.play();
      }
      setAnswered(1)
    }
    else {
      setAnswered(2)
    }
  }

  useEffect(() => {
    setAnswerType(correct)
  },[correct])

  return (
    <View style={styles.mainContainer}>
      <Pressable onPress={handlePress} style={[styles.container, answered==1 && styles.correctAnswer, answered==2 && styles.incorrectAnswer ]}>
        <Text style={styles.standarText}>{answer}</Text>
        <Image style={styles.checkMark} source={require('../assets/images/check.png')}/>
      </Pressable>
      <LottieView
        ref={lottieRef}
        style={{position:'absolute', width:250, height:250, backgroundColor:'transparent', zIndex:-10, top:-80, right:-50, pointerEvents:'none',}}
        source={require('../assets/images/Estrellitas.json')}
        autoPlay={false}
        loop={false}
      />
    </View>
    
  )
}