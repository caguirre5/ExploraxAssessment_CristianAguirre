import React, { useEffect, useRef, useState } from 'react'
import {StyleSheet, Image, View, Text, Pressable} from 'react-native'
import LottieView from 'lottie-react-native';

type answersData = {
    key: string;
    text: string;
    correct: boolean;
};

const styles = StyleSheet.create({
    container: {
        width: '85%',
        height:85,
        backgroundColor: '#FFFFFF',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection:'row',
        borderRadius: 10,
        borderColor: '#8D8D8D',
        borderTopWidth: 2,
        borderRightWidth: 1,
        borderBottomWidth: 5,
        borderLeftWidth: 1,
    },
    standarText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#133362'
    },
    grid:{
        backgroundColor:'transparent',
        width: '85%',
        height:180,
        display:'flex',
        flexDirection: 'row',   // Disposición en fila
        flexWrap: 'wrap',       // Permitir envolver los elementos en múltiples líneas\
        justifyContent: 'center',
        alignItems:'center',
        marginTop:10,
    },
    mainContainer: {
        width: '45%',
        height:'45%',
    },
    Answercontainer: {
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

type AnswerBoxProps = {
    answer: string;
    correct: boolean;
    onPress: () => boolean;
    onCorrectAnswer: (isCorrect : boolean) => void;
    pressed: boolean;
};

const AnswerBox: React.FC<AnswerBoxProps> = ({ answer, correct, onPress, onCorrectAnswer }) => {
    const [pressed, setPressed] = useState(false)
    const [answered, setAnswered] = useState(0)
    const lottieRef = useRef(null);

    const handlePress = () => {
        const result = onPress()
        setPressed(result)
        if (!pressed) {
            if (result && correct === true) {
                if (lottieRef.current) {
                    lottieRef.current.play();
                }
                setAnswered(1)
                onCorrectAnswer(true)
            }
            else {
                setAnswered(2)
                onCorrectAnswer(false)
            }
        }
    }

    useEffect(() => {
        console.log('hola')
    },[onPress()])

    return (
        <View style={styles.mainContainer}>
        <Pressable onPress={handlePress} style={[styles.Answercontainer, answered==1 && styles.correctAnswer, answered==2 && styles.incorrectAnswer ]}>
            <Text style={[styles.standarText, {color:'#FFFFFF'}]}>{answer}</Text>
            {pressed && correct ? (
                <Image style={styles.checkMark} source={require('../assets/images/check.png')}/>
            ) : null}
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
};

//Main Component

export default function QuestionDisplay({question, answers, onResultChange} : {question : string; answers : answersData[]; onResultChange : (value:boolean)=>void}) {
    const [pressed, setPressed] = useState(false)

    const onCorrectAnswer = (isCorrect: boolean) => {
        
        onResultChange(isCorrect)
    }

    const handleAnswerPress = () => {
        
        return true
    };

    return (
    <View style={{width:'100%', display:'flex', alignItems:'center',}}>
        <View style={styles.container}>
            <Text style={styles.standarText}>{question}</Text>
            <Text style={styles.standarText}> = </Text>
            <Image style={{width:34, height:50}} source={require('../assets/images/QuestionMark.png')}/>
        </View>
        <View style={styles.grid}>
            {answers.map(answer => (
                <AnswerBox key={answer.key} answer={answer.text} correct={answer.correct} onPress={handleAnswerPress} onCorrectAnswer={onCorrectAnswer} pressed={pressed}/>
            ))}
        </View>
    </View>
  )
}