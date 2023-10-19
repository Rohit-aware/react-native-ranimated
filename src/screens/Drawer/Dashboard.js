import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenHeader from '../../components/header/ScreenHeader'
import Menu from '../../components/Menu'
import { SIZES } from '../../constants'
import { FlatList } from 'react-native-gesture-handler'
import { catagoryListData } from '../../local-data/UserData'
import { moderateScale } from 'react-native-size-matters'
import fontStyles from '../../styles/font-style'
import { colorsArray } from '../../local-data/listColor'

const Dashboard = ({ navigation }) => {

  const getItemColor = (index) => {
    const colorIndex = index % colorsArray.length;
    return colorsArray[colorIndex];
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#ffff' }}>
      <ScreenHeader
        lable={'Category'}
        appendCoponent={Menu}
      />
      <View style={{}}>
        <FlatList
          data={catagoryListData}
          contentContainerStyle={{
            padding: moderateScale(15),
            paddingVertical:moderateScale(20)
          }}
          columnWrapperStyle={{ paddingBottom: moderateScale(10), columnGap: 10 }}
          numColumns={3}
          renderItem={({ item, index }) => {
            const backgroundColor = getItemColor(index);
            return (
              <TouchableOpacity style={[styles.cartStyle,{backgroundColor,}]}
                onPress={()=>{
                  navigation.navigate('CategoryList',{title : item.title})
                }}
              >
                <View style={{ padding: moderateScale(0) }}>
                  <View style={{ height: 35 }}>
                    <Text style={[fontStyles.MontserratMedium14, { overflow: 'hidden', flexWrap: 'wrap' }]} numberOfLines={3} >
                      {item.title}
                    </Text>
                  </View>
                  <View style={{ height: 80 }}>
                    <Image
                      source={item.img}
                      style={{ height: moderateScale(90), width: moderateScale(90), }}
                      resizeMode='contain'
                    />
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  cartStyle: {
    width: '32%',
    justifyContent: 'space-between',
    
    padding: moderateScale(10),
    borderRadius: moderateScale(5)
  },
})