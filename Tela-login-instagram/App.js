import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF" translucent={false} />

    <Image resizeMode='center'
    
    source={require('../insta/src/assets/logo.png')}
    style={styles.logo}
    />

    <TextInput
    placeholder='Celular, username ou email'
    style={styles.input}
    />

    <TextInput
    placeholder='Sua senha'
    style={styles.input}
    />

    <View style={styles.forgotPass}>
      <TouchableOpacity>
        <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

    </View>

    <TouchableOpacity style={styles.loginButton}>
      <Text style={styles.loginText}>Acessar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.facebookButton}>
      <FontAwesome5 name="facebook" size={25} color="#399fff" />
      <Text style={styles.facebookText}>Continue como Ryan</Text>
    </TouchableOpacity>

    <View style={styles.divisor}>
    <View style={styles.line}></View>
    <Text style={{ marginHorizontal: '3%' }}>Ou</Text>
    <View style={styles.line}></View>
    </View>

    <View style={styles.signup}>
    <Text style={styles.signupText}>Não possui uma conta?</Text>
    <TouchableOpacity>
      <Text style={styles.signupButton}>Cadastre-se</Text>
    </TouchableOpacity>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  logo: {
    width: 230,
    height: 230,
    marginTop: Platform.OS === 'android' ? '0%' : '3%',
    marginBottom: Platform.OS === 'android' ? '1%' : '1%'
  },

  input: {
    width: '90%',
    height: 42,
    backgroundColor: '#F4F3F3',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0'
  },

  forgotPass: {
    width: '90%',
    alignItems: 'flex-end'

  },

  forgotText: {
    color: '#399fff'
  },

  loginButton: {
    marginTop: '5%',
    backgroundColor: '#399fff',
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5

  },

  loginText: {
    color: '#FFF',
    fontSize: 17
  },

  facebookButton:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '12%'
  },

  facebookText: {
    color: '#399fff',
    paddingLeft: 8,
    fontSize: 17
  },

  divisor: {
    marginTop: '10%',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  line: {
    width: '45%',
    height: 2,
    backgroundColor: '#EFEDED'
  },

  signup: {
    flexDirection: 'row',
    marginTop: '10%',

  },

  signupText: {
    color: '#C4C4C4',
    paddingRight: 5
  },

  signupButton: {
    color: '#399FFF',
    fontWeight: 'bold'
  }
  
});
