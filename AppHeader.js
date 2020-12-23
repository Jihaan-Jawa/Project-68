import  React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
 render(){
   return(
      <View>
  <Text style={styles.text}>Social Sites</Text>
  </View>
   )
 }
}

const styles=StyleSheet.create({
  text:{
  textAlign:'center',
   backgroundColor:'red',
   fontSize:35,
   fontFamily:'cursive'

  }
})
