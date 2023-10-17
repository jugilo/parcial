import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Tabla from './Components/tabla.js';
import Cadena from './Components/Cadena.js';
import Calculadora from './Components/Calculadora.js';

export default function App() {
  return (
    <View style={styles.View}>
      <View style={styles.View}>
        <Text>#1 EJERCICIO DE LA TABLA</Text>
        <Tabla/>
      </View>
      <View style={styles.View}>
        <Text>#2 EJERCICIO DE INGRESAR CADENA</Text>
        <Cadena/>
      </View>
      <View style={styles.View}>
        <Text>#3 EJERCICO DE OPERACIONES</Text>
        <Calculadora/>
      </View>

    </View>

    
    
  );
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    margin: 5,
    padding:20,
  },
});
