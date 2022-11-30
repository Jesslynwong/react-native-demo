import React, { useState} from "react";
import { View, StyleSheet, TextInput,Modal, Button } from 'react-native'

const AddGoalPage = ({isOpen, addGoal, closeModal,aa}) => {
    const [textValue, setTextValue] = useState('')
   
    const handleAddGoal = () => {
        if (textValue !== '') {
            addGoal(textValue)
            closeModal()
            setTextValue('')    
        }
        
    }
    
    const onChangeText = (e) => {
        setTextValue(e)
    }

    return(
            <Modal
                animationType="slide"
                transparent={false}
                visible={isOpen}
            >   
                <View style={styles.modalContainer}>
                    <TextInput style={styles.input}  placeholder="Add a Goal" onChangeText={onChangeText} value={textValue}/>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button} >
                            <Button title='CENCEL' color='#E03984'  onPress={closeModal}  />
                        </View> 
                        <View style={styles.button}>
                            <Button title='ADD GOAL' color='#AA82E9' onPress={handleAddGoal} />
                        </View>    
                    </View>
                </View>
            </Modal>
    )
    
}
const styles = StyleSheet.create({
    modalContainer: {
        width:'100%',
        height: '100%',
        backgroundColor: '#2E1C67',
        display:'flex',
        justifyContent:'center',
        padding:10   
    },
    buttonContainer: {
        display:'flex',
        justifyContent:'center',
        flexDirection:'row'
    },
    button: {
        width:100,
        marginHorizontal: 8,
        borderRadius: 8
    },
    input:{
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
        marginVertical: 10
    }
});
export default AddGoalPage