import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import axios from 'axios';

const BalanceScreen = ({  onTopUp, onCheckBalance, onBack }) => {
  const [balance, setBalance]= useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://172.19.5.178:3000/credit')
        setBalance(response.data);
    }catch(error){
      console.error('Error fething', error);
    }  
  };

  useEffect(() => {
    fetchData();
  }, []);
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saldo Rekening Anda</Text>
      <Text style={styles.balance}>Rp {balance}</Text>

      <View style={styles.buttonsContainer}>
        <Button title="Top Up" onPress={onTopUp} />
        <Button title="Cek Saldo" onPress={onCheckBalance} />
      </View>

      <Button title="Back" onPress={onBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  balance: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginBottom: 20,
  },
});

export default BalanceScreen;
