import {Button, Card, Input, ListNumber, Modal} from '../components'
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect } from 'react'

const GameScreen = ({handlerScreen}) => {
    const [number, setNumber] = React.useState('')
    const handlerNumber = (text) => {
        setNumber(text.replace(/[^0-9]/g, ''))
    }

    const [list, setList] = React.useState([])
    const handlerList = (num) => {
        if(num === '') return

        num = parseInt(num)
        if(num > 100 || num < 1) {
            setModalErrorText('El número debe estar entre 1 y 100')
            setModalErrorVisible(true)
            return
        }

        if(list.some(item => item.num === num)){
            setModalErrorText('El número ya fue ingresado')
            setModalErrorVisible(true)
            return
        }

        if(num === randomNumber) {
            setModalVictoriaVisible(true)
        }else if(num > randomNumber) {
            setList([...list, {num, mayor: true}])
        }else {
            setList([...list, {num, mayor: false}])
        }
    }

    const [modalFinalizarVisible, setModalFinalizarVisible] = React.useState(false)
    const [modalVictoriaVisible, setModalVictoriaVisible] = React.useState(false)
    const cancelModalFinalizar = () => {
        setModalFinalizarVisible(false)
    }
    const aceptModal = () => {
        setModalFinalizarVisible(false)
        handlerScreen('Start')
    }

    const [modalErrorVisible, setModalErrorVisible] = React.useState(false)
    const [modalErrorText, setModalErrorText] = React.useState('')
    const cancelModalError = () => {
        setModalErrorVisible(false)
    }

    

    const [randomNumber, setRandomNumber] = React.useState(Math.floor(Math.random() * 100) + 1)
    useEffect(() => {
        console.log(randomNumber)
    }, [randomNumber])

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.screen}>
            <Text style={styles.title} >En partida</Text>
            <Card style={styles.inputContainer}>
                <Text>Ingrese un número</Text>
                <Input style={styles.input}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='number-pad'
                    maxLength={2}
                    onChangeText={handlerNumber}
                    value={number.toString()}
                />
                <View style={styles.buttonContainer}>
                    <Button style={styles.buttons} title="Finalizar" onPress={() => {
                        setModalFinalizarVisible(true)
                    }}/>
                    <Button style={styles.buttons} title="Probar" onPress={() => {
                        handlerList(number)
                        setNumber('')
                    }}/>
                </View>
            </Card>
            
            {list.length > 0 && 
                <>
                    <Text style={styles.title} >Intentos</Text>
                    <View style={styles.list}>
                        <ListNumber list={list}/>
                    </View>
                </>
            }
            <Modal title="Finalizar" text="¿Está seguro que desea finalizar el juego?" onAcept={aceptModal} onCancel={cancelModalFinalizar} visible={modalFinalizarVisible}/>
            <Modal title="Victoria" text="Felicidades, has ganado" onAcept={aceptModal} visible={modalVictoriaVisible}/>
            <Modal title="Error" text={modalErrorText} onAcept={cancelModalError} visible={modalErrorVisible}/>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        gap: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    buttons: {
        width: 100
    },
})