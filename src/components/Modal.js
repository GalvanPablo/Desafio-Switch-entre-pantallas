import { Modal as RModal, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

import Button from './Button'
import React from 'react'

const Modal = ({title, text, onCancel, onAcept, visible}) => {
    return (
        <RModal animationType='fade' transparent={true} visible={visible}>
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalTitle}>
                        <Text style={styles.modalTitleText}>{title}</Text>
                    </View>
                    <View style={styles.modalBody}>
                        <Text style={styles.modalBodyText}>{text}</Text>
                    </View>
                    {onCancel === undefined ?
                        <Button title="Aceptar" styleButton={styles.btnAcept} onPress={onAcept}/>
                        : <View style={styles.modalActions}>
                        <Button title="Cancelar" styleButton={styles.btnCancel} onPress={onCancel}/>
                        <Button title="Aceptar" styleButton={styles.btnAcept} onPress={onAcept}/>
                    </View>
                    }
                </View>
            </View>
        </RModal>
    )
}

export default Modal

const styles = StyleSheet.create({
    modalBackground: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        backgroundColor: '#fff',
        width: '80%',
        borderRadius: 10,
        padding: 15,
        elevation: 10
    },
    modalTitle: {
        alignItems: 'center',
        marginBottom: 10
    },
    modalTitleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    modalBody: {
        alignItems: 'center',
        marginBottom: 10
    },
    modalBodyText: {
        fontSize: 16
    },
    modalActions: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnCancel: {
        backgroundColor: '#ccc',
        width: '45%'
    },
    btnAcept: {
        backgroundColor: '#f00',
        width: '45%'
    }
})