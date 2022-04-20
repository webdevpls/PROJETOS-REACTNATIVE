import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function App(){

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    

    if(imc < 18.6){
      alert('Você está abaixo do peso!' + imc.toFixed(2));
    }

    else if(imc >= 18.6 && imc < 24.9){
      alert("Peso ideal!" +imc.toFixed(2));
    }

    else if(imc >= 24.9 && imc < 34.9){
      alert("Você está acima do peso! " + imc.toFixed(2));
    }
  }


  return(
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>

      <TextInput
      style={styles.input}
      value={peso}
      onChangeText={ (peso) => setPeso(peso) }
      keyboardType='numeric'
      placeholder="Peso(kg)"
      />

  <TextInput
      style={styles.input}
      value={altura}
      onChangeText={ (altura) => setAltura(altura) }
      keyboardType='numeric'
      placeholder="Altura(cm)"
      />
      
      <TouchableOpacity 
      style={styles.buttom}
      onPress={handleSubmit}
      >
        <Text style={styles.buttomText}>Calcular</Text>
      

      </TouchableOpacity>

    </View>
  );
   
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center'
  },
  title:{
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30
  },
  input:{
    backgroundColor: '#1212',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: 'black',
    fontSize: 20,
  },

  buttom:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41Aef4',
    padding: 10,
    borderRadius: 10,
  },

  buttomText:{
    color: '#fff',
    fontSize: 15,
  }


})