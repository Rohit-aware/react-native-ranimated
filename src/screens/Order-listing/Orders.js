import { FlatList, Image, Pressable, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import Header from '../../components/header/Header'
import Back from '../../assets/svg/login/back'
import Colorses from '../../constants/colors'
import { OrderListing } from '../../local-data/UserData'
import commonStyles from '../../styles/common-styles'
import fontStyles from '../../styles/font-style'
import Cancelled from '../../assets/svg/Order-Listing/Cancled'
import OnTheWay from '../../assets/svg/Order-Listing/ontheWay'
import Delivered from '../../assets/svg/Order-Listing/Delivered'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import Orderbag from '../../assets/svg/Order-Listing/orderBag'

const Orders = ({ navigation }) => {

    const [refreshing, setRefreshing] = useState(false)


    const onRefreshs = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const renderItems = (item, index) => {


        let bgColor = Colorses.commonBackground;
        let textColor = Colorses.secondaryColor;

        if (item.payment_status === 'Pending') {
            bgColor = Colorses.orderStatusOnTheWayBg;
            textColor = Colorses.orderStatusOnTheWay;
        } else if (item.payment_status === 'Delivered') {
            bgColor = Colorses.orderStatusDeliveredBg;
            textColor = Colorses.orderStatusDelivered;
        } else if (item.payment_status === 'Cancelled') {
            bgColor = Colorses.orderStatusCancelledBg;
            textColor = Colorses.cancelRed;
        }
        return (
            <View style={[commonStyles.boxShadow, { borderRadius: 12 }]}>
                <TouchableOpacity>
                    <View style={[commonStyles.flexRowJSBAC, { paddingHorizontal: moderateScale(15), paddingTop: moderateVerticalScale(15) }]}>
                        <View style={{ padding: moderateScale(6), backgroundColor: '#F6F7F2', borderRadius: 10 }}>
                            <Text style={[fontStyles.MontserratRegular10]}>{item.payment_id}</Text>
                        </View>
                        <View style={[commonStyles.flexRowJCAC, {
                            backgroundColor: bgColor,
                            padding: moderateScale(6),
                            borderRadius: moderateScale(8),
                        }]}>
                            <View style={{ paddingRight: 10 }}>
                                {item.payment_status == 'Delivered' ? <Delivered /> : item.payment_status == 'Cancelled' ? <Cancelled /> : <OnTheWay />}
                            </View>
                            <View >
                                <Text style={{ ...fontStyles.hindMaduraiSemiBold('HindMadurai-SemiBold', moderateScale(12), textColor) }}>
                                    {item.payment_status == 'Delivered' ? 'Delivered' : item.payment_status == 'Cancelled' ? 'Cancelled' : item.payment_status == 'Pending' ? 'On the Way' : ''}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: moderateScale(20), paddingTop: 10 }}>
                        <Text numberOfLines={1} style={[fontStyles._MontserratBold(
                            'HindMadurai-SemiBold',
                            moderateScale(14, 0.3),
                            Colorses.secondaryColor,
                        ), {

                            flexShrink: 1,
                            width: '100%',
                        }]}>
                            {item.product_count} Items
                        </Text>
                    </View>
                    <View style={[commonStyles.flexRowJSBAC, { padding: moderateScale(15) }]}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={item.imgArray}
                            horizontal
                            contentContainerStyle={{
                                columnGap: 5
                            }}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity style={[styles.productSmallImage, { flex: 1, }]}>
                                        <View style={{}}>
                                            <Image
                                                source={item.img}
                                                style={{ width: 80, height: 80, }}
                                                resizeMode='contain'
                                            />
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>
                    <View style={[commonStyles.flexRowJSBAC, { paddingHorizontal: moderateScale(15), paddingTop: moderateScale(5) }]}>
                        <View>
                            <Text numberOfLines={1} style={[fontStyles._MontserratBold(
                                'HindMadurai-SemiBold',
                                moderateScale(13, 0.3),
                                Colorses.secondaryColor,
                            ), {

                                flexShrink: 1,
                                width: '90%',
                            }]}>
                                Mango Alphonso, Orange Carrot
                            </Text>
                        </View>
                        <View>
                            <Text numberOfLines={1} style={[fontStyles._MontserratBold(
                                'HindMadurai-SemiBold',
                                moderateScale(14, 0.3),
                                Colorses.secondaryColor,
                            ), {

                                flexShrink: 1,
                                width: '100%',
                            }]}>
                                EGP <Text>{item.payment_price}</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={[commonStyles.flexRow, { alignItems: 'center', padding: 15 }]}>
                        <View style={{ paddingRight: 10 }}>
                            <Orderbag />
                        </View>
                        <View>
                            <Text style={{
                                ...fontStyles._MontserratRegular(
                                    'HindMadurai-Regular',
                                    moderateScale(11, 0.4),
                                    Colorses.secondaryLightColor,
                                ),
                            }}>
                                Ordered on {item.payment_date}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View>
                    {item.payment_status == 'Delivered' || item.payment_status == 'Cancelled' ?
                        <View style={[commonStyles.flexRowJSBAC, { padding: moderateScale(15), }]}>
                            <View >
                                <Text style={[fontStyles._MontserratBold(
                                    'HindMadurai-SemiBold',
                                    moderateScale(16, 0.3),
                                    Colorses.secondaryColor,
                                ), {

                                    flexShrink: 1,
                                    width: '100%',
                                }]}>
                                    Rate Order
                                </Text>
                            </View>
                            <TouchableOpacity style={{}}>
                                <Text
                                    style={[
                                        fontStyles._MontserratBold(
                                            'HindMadurai-SemiBold',
                                            moderateScale(18, 0.3),
                                            Colorses.orderStatusOnTheWay,
                                        ),
                                    ]}>
                                    Reorder
                                </Text>
                            </TouchableOpacity>
                        </View>
                        :
                        null
                    }
                </View>
            </View>
        )
    }




    return (
        <View style={{
            flex: 1
        }}>
            <Header
                lable={'Orders'}
                prependCoponent={Back}
                onPressLeft={() => navigation.goBack()}
            />
            <View style={{

            }}>
                <FlatList
                    data={OrderListing}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => renderItems(item, index)}
                    refreshControl={
                        <RefreshControl colors={[Colorses.primaryColor]} refreshing={refreshing} onRefresh={onRefreshs} />
                    }
                    contentContainerStyle={{ flexGrow: 1, rowGap: moderateScale(20), margin: 10, }}
                    ListFooterComponent={<View style={{ height: 100 }} />}
                />

            </View>
        </View>
    )
}

export default Orders

const styles = StyleSheet.create({
    productSmallImage: {
        width: moderateScale(70, 0.3),
        height: moderateScale(70, 0.3),
        backgroundColor: '#FFFAEE',
        borderColor: '#FFEBBB',
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(8),
    },
})