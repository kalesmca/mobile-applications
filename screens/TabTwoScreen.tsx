import { StyleSheet } from 'react-native';
import { useSelector } from "react-redux";
import React,{useEffect} from 'react'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const appState = useSelector((state) => state);

  useEffect(()=>{
    console.log('appState :', appState)
  },[])
  return (
    <View style={styles.container}>
      <Text>Second</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
