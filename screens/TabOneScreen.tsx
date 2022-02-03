import { StyleSheet, TextInput, Button } from 'react-native';
import React,{useState} from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
interface Form {
  name: string,
  age: number,
  city: string,
  department: string
}
const initState = {
  name:"",
  age:0,
  city: "",
  department: ""
}

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [formObj, setFormObj] = useState(initState)

  const save = () =>{
    console.log('obj:', formObj)
    alert(
       formObj
    )
  }

 
  return (
    <View style={styles.container}>
      
      <View>
        <TextInput style={styles.input} placeholder='Name' onChange={(e:any)=>{setFormObj({...formObj, ...{name: e.target.value}})}}/>
        <TextInput style={styles.input} placeholder='Age' onChange={(e:any)=>{setFormObj({...formObj, ...{age: e.target.value}})}} keyboardType="numeric"/>
        <TextInput style={styles.input} placeholder='City' onChange={(e:any)=>{setFormObj({...formObj, ...{city: e.target.value}})}}/>
        <TextInput style={styles.input} placeholder='Department' onChange={(e:any)=>{setFormObj({...formObj, ...{department: e.target.value}})}}/>
        
      </View>
      <View style={styles.button}>
      <Button
          onPress={save}
          title="Save"
          color="#841584"        
        />
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input : {
    backgroundColor: "#eee",
    borderRadius: 10,
    fontWeight: "700",
    marginBottom: 7,
    borderWidth:1,
    height:40,
    width: "70%",
    padding:10,
    marginLeft: 10,
    marginTop: 10
  },
  button:{
    width: "40%",
    margin: 20,
    borderRadius: 10,
  }
});
