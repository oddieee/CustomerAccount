// HomeScreen.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Button, StyleSheet, Text, ScrollView, Image } from 'react-native';
import TopUpModal from './TopUpModal';


const HomeScreen = ({ onTopUp, onCheckBalance, onBack }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [balance, setBalance] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchData();
    fetchHistory();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://172.19.5.178:3000/credit');
      setBalance(response.data);
    } catch (error) {
      console.error('Error fetching', error);
    }
  };

  const fetchHistory = async () => {
    try {
      const response = await axios.get('http://172.19.5.178:3000/topup');
      setHistory(response.data);
    } catch (error) {
      console.error('Error fetching history', error);
    }
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/bsi_logo.png')} style={styles.logo} />
        <Text style={styles.title}>Saldo Rekening Anda</Text>
        <Text style={styles.balance}>Rp {balance}</Text>
        <Button title="Top Up Saldo" onPress={handleOpenModal} />
        <TopUpModal balance={balance} setBalance={setBalance} visible={modalVisible} onClose={handleCloseModal} />
      </View>

      <View>
        <Text style={styles.title}>History Saldo</Text>
        <ScrollView style={styles.scrollView}>
          {history.map((item, index) => (
            <View key={timestamp} style={styles.historyItem}>
              <Text>{item.timestamp}</Text>
              <Text>{item.nominal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 120,
    paddingTop: 100,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: '100%',
    height: 48,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingTop:20,
  },
  balance: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    maxHeight: 200,
    marginBottom: 20,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default HomeScreen;