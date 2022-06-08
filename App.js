import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

/* export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */

export default function Auth(){
    return(
      <View style={styles.container} >
      <Image style={styles.img} source={require('./img/el.png')} /> 
      <Image style={styles.img2} source={require('./img/el2.png')} /> 
          <Text style={styles.text}>Sign In</Text>
        <Image style={styles.img3} source={require('./img/el3.png')} /> 
      
        <TextInput
        placeholder="email"
        keyboardType="numeric"
        />
      <TextInput
        placeholder="password"
        keyboardType="numeric"
        />
     
    </View>
     
    )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
  },
  text:{
    position: 'absolute',
    left: '8%',
    right: '-8%',
    top: '45%',
    bottom: '0%',
    fontFamily: 'Circular Std',
    fontSize: 32,
    lineHeight: 40,
    color: '#384F7D'
  },
  img2:{
    left: '72.8%',
    right: '-9.07%',
    top: '13.79%',
    bottom: '69.46%'
  },
  img3:{
    left: '62.13%',
    right: '23.03%',
    top: '43.62%',
    bottom: '49.53%'
  },
  input1:{
    width: '315',
    height: '48',
    left: '0',
    top: '0'
  },
  inputField:{
    left: '0%',
    right: '0%',
    top: '72.84%',
    bottom: '-4.48%'
  }
  
})