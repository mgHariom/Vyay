import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import {firebase} from "../firebase";

export default Home = () => {
      return (
        <View style={styles.containar}>
          <View style={styles.containar2}>
            <TouchableOpacity onPress={() => firebase.auth().signOut()} style={styles.btn}>
              <Text style={styles.btnText}>logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
  containar: {
      flex: 1,
      backgroundColor: '#23282E',
      justifyContent: 'center',
  },
  imgContainar: {
      justifyContent: 'center',
      alignItems: 'center'
  },
  containar2: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40
  },
  image: {
      width: '75%',
      objectFit: 'cover',
  },
  input: {
      width: '85%',
      height: 60,
      borderRadius: 10,
      backgroundColor: '#F5F5F5',
      opacity: 50,
      paddingLeft: 10,
      marginTop: 20
  },
  btn: {
      width: '85%',
      height: 60,
      borderRadius: 50,
      backgroundColor: '#F45B5B',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30
  },
  btnText: {
      fontSize: 24,
      color: '#fff',
      fontWeight: '600'
  }
})