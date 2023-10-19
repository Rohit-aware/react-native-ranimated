import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import ScreenHeader from '../../components/header/ScreenHeader'
import Back from '../../assets/svg/login/back'
import { SubCategoryDisplayData, subCatagoryListData } from '../../local-data/UserData'
import { moderateScale } from 'react-native-size-matters'
import { SIZES } from '../../constants'
import commonStyles from '../../styles/common-styles'
import CartIcon from '../../assets/svg/trolly/CartIcon'

const CategoryList = ({ route, navigation }) => {

    const [selectedItem, setSelectedItem] = useState(0);

    const handleItemPress = (index) => {
        setSelectedItem(index);
    };


    const renderLeftSide = (item, index) => {
        const isSelected = index === selectedItem;

        return (
            <TouchableOpacity style={[styles.leftContainer, { backgroundColor: isSelected ? '#FCF1D9' : 'white', borderRadius: isSelected ? moderateScale(10) : moderateScale(0) }]}
                onPress={() => handleItemPress(index)}
            >
                <View>
                    <Image
                        source={item.img}
                        style={{ width: moderateScale(60), height: moderateScale(60) }}
                    />
                </View>
                <View style={{}}>
                    <Text style={{ fontSize: moderateScale(15), flexWrap: 'wrap', textAlign: 'center', color: '#272727' }} numberOfLines={2} >{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const renderRightSide = (item, index) => {
        return (
            <TouchableOpacity style={{ flexGrow: 1, width: '38%', backgroundColor: '#fff', paddingHorizontal: moderateScale(5) }}>
                <View>
                    <Image
                        source={item.img}
                        style={{ width: moderateScale(100), height: moderateScale(100), alignSelf: 'center' }}
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
                <View style={{ paddingVertical: moderateScale(5) }}>
                    <Text style={{ color: '#555', fontSize: moderateScale(10), textDecorationLine: 'line-through' }}>
                        {item.price}
                    </Text>
                </View>
                <View style={{ paddingVertical: moderateScale(5), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#333', fontSize: moderateScale(14), fontWeight: '600' }}>
                        {item.price}
                    </Text>
                    <TouchableOpacity>
                        <CartIcon />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ flex: 1, }}>
            <ScreenHeader
                lable={route.params.title}
                prependCoponent={Back}
                onPressBack={() => navigation.goBack()}
            />
            <View style={{ flexDirection: 'row' }}>
                <View style={{
                    width: '20%',
                    height: SIZES.height,
                    backgroundColor: 'white'
                }}>
                    <FlatList
                        data={subCatagoryListData}
                        renderItem={({ item, index }) => renderLeftSide(item, index)}
                        showsVerticalScrollIndicator={false}
                        numColumns={1}
                        contentContainerStyle={[commonStyles.boxShadow, {
                            flexGrow: 1,
                            paddingBottom: moderateScale(15),
                            paddingTop: moderateScale(5),
                            // marginTop: moderateScale(5)
                        }]}
                    />
                </View>
                <View style={{
                    width: '80%',
                    height: SIZES.height,
                    backgroundColor: '#ebebeb'
                }}>
                    <FlatList
                        data={SubCategoryDisplayData}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            padding: moderateScale(10),
                            flexGrow: 1,
                        }}
                        columnWrapperStyle={{
                            columnGap: 10,
                            paddingBottom: 10

                        }}
                        renderItem={({ item, index }) => renderRightSide(item, index)}
                    />
                </View>
            </View>
        </View>
    )
}

export default CategoryList

const styles = StyleSheet.create({
    leftContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: moderateScale(10),
        padding: moderateScale(10)
    },

})