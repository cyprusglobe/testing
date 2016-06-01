import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
 
 class Home extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Balloon Fiesta 2016</Text>
        </View>
    )
  }
}
 
var styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent:"space-between",
    backgroundColor: '#f2f2f2',
    paddingTop:40,
  },
  heading: {
    fontSize: 30,
    fontWeight: "100",
  }
})
 
 export default Home