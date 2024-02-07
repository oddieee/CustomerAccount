// TopUpModal.js
import React, { useEffect, useState } from 'react';
import { TextInput,View, Modal, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const TopUpModal = ({ visible, onClose, balance, setBalance }) => {

    const handleTopUp = async () => {
        try {
          const response = await axios.post('http://172.19.5.178:3000/topup', { data : balance });
          console.log(response.data);
          setBalance(response.data)
        } catch (error) {
          console.error('Error posting data:', error.message);
        }
      };
  
    return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>Top Up Saldo</Text>
          <TextInput
        style={styles.input}
        placeholder='Masukkan Nominal'
        value={balance}
        onChangeText={(Number => setBalance(Number))}
        />
        <TouchableOpacity style={styles.button} onPress={handleTopUp}>
            <Text style={styles.buttonText} >Submit</Text>
        </TouchableOpacity>
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    input: {
        padding: 35
    },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: '#007bff', // Example color
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff', // Example color
    fontSize: 16,
  },
});

export default TopUpModal;
