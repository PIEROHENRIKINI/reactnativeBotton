import React from 'react';
import { TouchableOpacity,StyleSheet, Text, View } from 'react-native';





const styles = StyleSheet.create({
  container: {
   alignItems:'center',
   margin:50,
      
  },
  red: {
    color: 'blue',
      
  },
button: {
    backgroundColor:"blue",
    padding:20,
    borderRadius:5,
},
 buttonText:{
    fontSize:30,
    color:'#fff',
 }
});

export default LotsOfStyles = () => {
    return (
      <View style={styles.container}>
        
        <Text style={styles.red}>Alice é uma marvilhosa </Text>
        
              <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
        
        
        
      </View>
    );
}
