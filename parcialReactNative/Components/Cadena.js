import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';

const Cadena = () => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (text) => {
      setInputText(text);
    };
  
    const handleSave = () => {
      const uppercaseText = inputText.toUpperCase();
      console.log(uppercaseText)
      Alert.alert('Texto en mayúsculas', uppercaseText);
    };
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          style={{ borderWidth: 1, padding: 10, width: 200,}}
          placeholder="Ingrese una cadena"
          onChangeText={handleInputChange}
          value={inputText}
        />
        <Button title="Guardar" onPress={handleSave}/>
      </View>
    );
  };

export default Cadena;