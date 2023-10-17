import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Bag from '../../assets/svg/home/Bag'

const TabCart = () => {
  const data=[
    {
      img :Bag,
      txt :'Search for the job in different catgories, choose the one that category and place that suits you'
    },
    {
      img :Bag,
      txt :'Build a profesional resume, that attracts recruters for better oppertunities.'
    },
    {
      img :Bag,
      txt :'Stay in touch with recruters, to know from them and have more chancs.'
    },
  ]
  return (
    <View style={{ flex: 1, backgroundColor: '#EC4545' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', height: 80 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white', letterSpacing: 10 }}>Gigs</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', height: 50 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white', letterSpacing: 1 }}>You can find your dream job here!</Text>
      </View>
      <FlatList
        data={data}
        contentContainerStyle={{
          rowGap:50,
          alignItems:'center',
          paddingTop:40,
        }}
        renderItem={({ item, index }) => {
          return (
            <View style={{ alignItems: 'center', justifyContent: 'space-around', height: 100, flexDirection: 'row', columnGap: 10, paddingHorizontal: 10 }}>
              <View style={{ width: '20%', left: 5 }}>
                {React.createElement(item.img)}
              </View>
              <View style={{ paddingHorizontal: 10, width: '80%' }}>
                <Text style={{ flexWrap: 'wrap', fontWeight: '400', fontSize: 16, color: 'white', letterSpacing: 1, textAlign: 'justify' }} numberOfLines={3} >{item.txt}</Text>
              </View>
            </View>
          )
        }}
      />

      <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10,marginHorizontal:'4%'}}>
        <TouchableOpacity style={{width:'48%',backgroundColor:'white', padding:10,borderRadius:15,alignItems:'center'}}>
          <Text style={{color:'black',fontSize:16,fontWeight:'600'}}>Start as a condidate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'48%', padding:10,borderRadius:15,borderWidth:1,borderColor:'white',alignItems:'center'}}>
          <Text style={{color:'white',fontSize:16,fontWeight:'600'}}>Start as a recruiter</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TabCart

const styles = StyleSheet.create({})