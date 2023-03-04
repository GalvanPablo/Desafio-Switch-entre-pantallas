import {Button, Card} from '../components'
import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const StartGameScreen = ({handlerScreen}) => {
    return (
        <View style={styles.screen}>
            <Text>Comenzar el juego</Text>
            <Card style={styles.card}>
                <Text>Instrucciones</Text>
                <Text>El juego consiste en adivinar un número random del 1 al 99</Text>
                <Text>Cada que se haga un intento se indicará si el número ingresado es mayor o menor con respecto al que tiene que adivinar.</Text>
                <Text>Azul: el numero es menor</Text>
                <Text>Rojo: el numero es mayor</Text>
            </Card>
            <Button title="Empezar" onPress={()=>{
                handlerScreen('Game')
            }}/>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    screen: {
        paddingTop: 20,
        alignItems: 'center',
        height: '100%',
        width: '100%',
        gap: 20,
    },
    card: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        gap: 20,
    },
    rulesContainer: {
        width: '100%',
    },
})