import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView , ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const [text, setText] = useState('');
  const [endereco, setEndereco] = useState('');



  function handleChangeText(newText) {
    setText(newText);
  }

  function handleEnderecoChange(newText) {
    setEndereco(newText);
  }


function handlePress() {
    console.log(`O texto digitado é: ${text}`);
  }

  return (
    <ScrollView>
      
    <View style={styles.container}>
    <Image style={{ width: 200, height: 200, resizeMode: 'cover' }} source={require('./assets/images/login.png')} />
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Origem:</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Digite seu endereço"
          value={endereco}
          onChangeText={setEndereco}
          placeholderTextColor={'black'}
        />
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Destino:</Text>
        </View>
        
         <TextInput
          style={styles.input}
          placeholder="Digite seu destino"
          value={text}
          onChangeText={setText}
          placeholderTextColor={'black'}
        />
        
        <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}> Chamar </Text>
        </TouchableOpacity>
      </View>
     
     
    </ScrollView>
     );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c8b6ff',
  },

  card: {
    backgroundColor: 'white',
    width: '80%',
    padding: 20,
    marginLeft: 30,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  
  input: {
    borderWidth: 1,
    borderColor: '#1E90FF',
    borderRadius: 10,
    padding: 9,
    marginVertical: 9,
    width: '100%'
  },
  button: {
    backgroundColor: '#CD5C5C',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 60, 
   
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign : 'center',
   }
});