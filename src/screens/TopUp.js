import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, Button, Alert, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios';

const TopUp = () =>{
    const [saldo, setSaldo] = useState([]);

    const handleTopUp = async () => {
    try {
        const response = await axios.post('http://172.19.5.178:3000/', {
    
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ credit: 10000})
        });
     
    
    const topupsaldo = await response.json();
    console.log('TopUp Saldo:', topupsaldo);
    
    } catch (error) {
      console.error('Top Up Gagal:', error);
    }
}

        fetchData();
    }, []);

    return (
       <View style={StyleSheet.container}>
        <TextInput
        style={styles.input}
        placeholder='Masukkan Nominal'
        value={saldo}
        onChange={Number => setSaldo(Number)}
        />
        <TouchableOpacity style={styles.button} onPress={handleTopUp}>
            <Text style={styles.buttonText} >Submit</Text>
        </TouchableOpacity>
       </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
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

export default PostList;