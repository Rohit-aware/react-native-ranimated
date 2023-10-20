import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenHeader from '../../components/header/ScreenHeader'
import Menu from '../../components/Menu'
import { SIZES } from '../../constants'
import { moderateScale } from 'react-native-size-matters'
import commonStyles from '../../styles/common-styles'
import { BuyAgainListData, SubCategoryDisplayData } from '../../local-data/UserData'
import fontStyles from '../../styles/font-style'
import CartIcon from '../../assets/svg/trolly/CartIcon'

const DrawerProfile = ({ navigation }) => {
  const count = 0
  const [selectedItem, setSelectedItem] = useState(0);
  const [isSelected, setIsSelected] = useState();

  const topSideList = (item, index) => {
    const isSelected = index === selectedItem;

    return (
      <TouchableOpacity style={{
        justifyContent: 'space-evenly',
        backgroundColor: isSelected ? '#FCF1D9' : 'white',
        borderTopLeftRadius: isSelected ? moderateScale(15) : 0,
        borderTopRightRadius: isSelected ? moderateScale(15) : 0,
        borderTopWidth: isSelected ? 2 : 0,
        borderTopColor: isSelected ? '#EBA500' : '#FCF1D9',
      }}
        onPress={() => {
          setSelectedItem(index);
        }}
      >
        <View>
          <Image
            source={item.img}
            style={{
              width: moderateScale(75),
              height: moderateScale(50),
              resizeMode: 'contain'
            }}
          />
        </View>
        <View style={{
          width: moderateScale(75),

        }}>
          <Text style={{ flexWrap: 'wrap', textAlign: 'center' }} numberOfLines={2}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const renderBottomSide = (item, index) => {
    return (
      <View style={{ flexGrow: 1, width: '45%', backgroundColor: '#fff', }}>
        <View style={{
          left: 0
        }}>
          <Image
            source={require('../../assets/images/offPercent.png')}
            style={{ width: 70, height: 25 }}
          />
        </View>
        <View style={{ paddingHorizontal: moderateScale(10) }}>
        <View>
          <Image
            source={item.img}
            style={{ width: moderateScale(140), height: moderateScale(140), alignSelf: 'center' }}
            resizeMode='contain'
          />
        </View>
        <View style={{ paddingVertical: moderateScale(5) }}>
          <Text style={{ color: '#555', fontWeight: '800', }}>
            {item.title}
          </Text>
        </View>
        <View style={{ paddingVertical: moderateScale(5) }}>
          <Text style={{ color: '#555', fontSize: moderateScale(10) }}>
            {item.quantity}
          </Text>
        </View>
        <View style={{ paddingTop: moderateScale(5) }}>
          <Text style={{ color: '#555', fontSize: moderateScale(10), textDecorationLine: 'line-through' }}>
            {item.price}
          </Text>
        </View>
        <View style={{ paddingBottom: moderateScale(5), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ color: '#333', fontSize: moderateScale(14), fontWeight: '600' }}>
            {item.price}
          </Text>
          <TouchableOpacity>
            <CartIcon />
          </TouchableOpacity>
        </View>
        </View>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader
        lable={`Category(${count})`}
        appendCoponent={Menu}
      />
      <View>
        <Image
          source={require('../../assets/images/fasterEasier.png')}
          resizeMode='contain'
          style={{ width: SIZES.width, height: moderateScale(140) }}
        />
      </View>
      <View style={[commonStyles.boxShadow, { width: SIZES.width, borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: -15, }]}>
        <ScrollView style={{}}>
          <View style={{ paddingVertical: 20, marginHorizontal: 15 }}>
            <Text style={[fontStyles.MontserratBold16]}>
              Finely Curated
            </Text>
          </View>
          <View>
            <FlatList
              data={BuyAgainListData}
              showsHorizontalScrollIndicator={false}
              style={{
                width: SIZES.width,
                height: moderateScale(100)
              }}
              contentContainerStyle={{
                marginHorizontal: 10
              }}
              horizontal
              renderItem={({ item, index }) => topSideList(item, index)}
            />
          </View>
          <View style={{ backgroundColor: '#FCF1D9' }}>
            <FlatList
              data={SubCategoryDisplayData}
              numColumns={2}
              contentContainerStyle={{}}
              columnWrapperStyle={{
                columnGap: 10,
                padding: 15
              }}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => renderBottomSide(item, index)}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default DrawerProfile

const styles = StyleSheet.create({})