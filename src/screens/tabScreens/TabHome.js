import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TabHome = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}> 
      <Button title='Top Bar' onPress={()=>navigation.navigate('MyTabs')}/>
    </View>
  )
}

export default TabHome

const styles = StyleSheet.create({})