import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Calculadora = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleNum1Change = (text) => {
    setNum1(text);
  };

  const handleNum2Change = (text) => {
    setNum2(text);
  };

  const handleSumar = () => {
    const result = parseFloat(num1) + parseFloat(num2);
    setResult(result);
  };

  const handleRestar = () => {
    const result = parseFloat(num1) - parseFloat(num2);
    setResult(result);
  };

  const handleMultiplicar = () => {
    const result = parseFloat(num1) * parseFloat(num2);
    setResult(result);
  };

  const handleDividir = () => {
    const result = parseFloat(num1) / parseFloat(num2);
    setResult(result);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ borderWidth: 1, padding: 10, width: 200 }}
        placeholder="Ingrese el primer número"
        onChangeText={handleNum1Change}
        keyboardType="numeric"
        value={num1}
      />
      <TextInput
        style={{ borderWidth: 1, padding: 10, width: 200, marginTop: 10 }}
        placeholder="Ingrese el segundo número"
        onChangeText={handleNum2Change}
        keyboardType="numeric"
        value={num2}
      />
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Button title="Sumar" onPress={handleSumar} />
        <Button title="Restar" onPress={handleRestar} />
        <Button title="Multiplicar" onPress={handleMultiplicar} />
        <Button title="Dividir" onPress={handleDividir} />
      </View>
      {result !== null && (
        <Text style={{ marginTop: 10 }}>Resultado: {result}</Text>
      )}
    </View>
  );
};

export default Calculadora;
