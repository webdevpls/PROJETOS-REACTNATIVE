import react, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Modal, TextInput, AsyncStorage } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Tasklist from './src/components/TaskList';
import * as Animatable from 'react-native-animatable';

const AnimatadeBtn = Animatable.createAnimatableComponent(TouchableOpacity);



export default function App() {

  const [task, setTask] = useState([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  useEffect(()=> {
    async function loadTask(){
      const taskStorage = await AsyncStorage.getItem('@task');

      if(taskStorage){
        setTask(JSON.parse(taskStorage));
      }
    }

    loadTask();

  },[]);

  useEffect(()=> {

  async function saveTasks(){
    await AsyncStorage.setItem('@task', JSON.stringify(task));
  }

  saveTasks();

  }, [task])


  function handleAdd (){
    if(input === '') return;

    const data = {
      key: input,
      task: input
    };

    setTask ([ ...task, data])
    setOpen (false);
    setInput('');

  }

  const handleDelete = useCallback((data) => {
    const find = task.filter(r => r.key !== data.key)
    setTask(find)
  })

 return(
  <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="#171d31" barStyle='light-content'/>
    
  <View style={styles.content}>

    <Text style={styles.title}>Tarefas</Text>

  </View>

  <FlatList
  marginHorizontal={10}
  showsHorizontalScrollIndicator={false}
  data={task}
  keyExtractor={  (item) => String(item.key) }
  renderItem={ ({ item }) =>  <Tasklist  data={item} handleDelete={handleDelete} />}
  
  />
  

   <Modal animationType='slide' transparent={false} visible={open}>
  <SafeAreaView style={styles.modal}>
    <View style={styles.modalHeader}>
    <TouchableOpacity onPress={ () => setOpen(false) }>
      <Ionicons style={{marginLeft: 5, marginRight:5}} name='md-arrow-back' size={40} color="#fff" />
    </TouchableOpacity>

    <Text style={styles.modalTitle}>Nova Tarefa</Text>
    </View>

    <Animatable.View animation="fadeInUp" style={styles.modalBody}>
      <TextInput 
      multiline={true}
      placeholderTextColor='#747474'
      autoCorrect={false}
      placeholder='O que precisa fazer hoje?'
      style={styles.input}
      value={input}
      onChangeText={ (texto) => setInput(texto) }
      />

      <TouchableOpacity style={styles.handleAdd} onPress={handleAdd}>
        <Text style={styles.adicionar}>Adcionar Tarefa</Text>

      </TouchableOpacity>
      
    </Animatable.View>
  

  </SafeAreaView>

  </Modal>

  <AnimatadeBtn 
    style={styles.fab}
    useNativeDriver
    animation="bounceInUp"
    duration={1800}
    onPress={ () => setOpen(true)}
  >
    <Ionicons name="ios-add" size={35} color="#fff" />
  </AnimatadeBtn>

  </SafeAreaView>

 )
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: '#238E68'
  },

  title:{
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },

  fab:{
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#32CD99',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    right: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 9,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset:{
      width: 1,
      height: 3
    }
  },

  modal:{
    flex: 1,
    backgroundColor: '#238E68'

  },

  modalHeader:{
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'

  },

  modalTitle:{
    marginLeft: 15,
    fontSize:20,
    color:'#fff'
  },

  modalBody:{
    marginTop:15,

  },

  input:{
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: '#fff',
    padding: 9,
    borderRadius: 9,
    height: 85,
    color: '#000',
    textAlign: 'center',

    

  },

  handleAdd:{
    backgroundColor: '#fff',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 8,
    height: 40

  },

  adicionar:{
    fontSize: 15

  }



});


   
