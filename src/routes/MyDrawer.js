import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import fontStyles from '../styles/font-style';
import { useNavigation } from '@react-navigation/native';
import DashboardIcon from '../assets/svg/Drawer/dashboard';
import ProfileIcon from '../assets/svg/Drawer/ProfileIcon';
import TermsIcon from '../assets/svg/Drawer/TermsIcon';
import HelpIcon from '../assets/svg/Drawer/HelpIcon';
import React from 'react';







const DrawerComp = () => {
    const navigation = useNavigation();

    const DrawerItem = ({
        children,
        Img,
        onPress
    }) => {
        return (
            <TouchableOpacity onPress={onPress} style={{}}>
                <View style={[styles.drawerItem]}>
                    <View
                        style={{ flexDirection: 'row',width: '90%' }}>
                        {React.createElement(Img)}
                        <View
                            style={{
                                marginHorizontal: moderateScale(15),
                            }}>
                            <Text
                                style={[{ ...fontStyles.MontserratMedium14, color: 'black' }]}>
                                {children}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    const navigateToDrawerScreen = (drawerNavigatorName, screenName, params = {}) => {
        navigation.navigate(drawerNavigatorName, {
            screen: screenName,
            params: params,
        });
    };
    return (
        <View style={{ flex: 1, backgroundColor: '#ffff' }}>

            <View style={{ top: moderateScale(15) }}>
                <DrawerItem
                    Img={DashboardIcon}
                    onPress={() => {
                        navigateToDrawerScreen('DrawerStack' ,'HomeScreen');
                    }}>
                    <Text style={{ ...fontStyles.MontserratMedium14 }}>
                        HomeScreen
                    </Text>

                </DrawerItem>
                <DrawerItem
                    Img={DashboardIcon}
                    onPress={() => {
                        navigateToDrawerScreen('DrawerStack' ,'Dashboard');
                    }}>
                    <Text style={{ ...fontStyles.MontserratMedium14 }}>
                        Category
                    </Text>

                </DrawerItem>
                <DrawerItem
                    Img={DashboardIcon}
                    onPress={() => {
                        navigateToDrawerScreen('DrawerStack' ,'DrawerProfile');
                    }}>
                    <Text style={{ ...fontStyles.MontserratMedium14 }}>
                        Cart
                    </Text>

                </DrawerItem>
                <DrawerItem
                    Img={DashboardIcon}
                    onPress={() => {
                        navigateToDrawerScreen('DrawerStack' ,'TrolleyCredit');
                    }}>
                    <Text style={{ ...fontStyles.MontserratMedium14 }}>
                    Trolley Credit
                    </Text>
                </DrawerItem>
                <DrawerItem
                    Img={DashboardIcon}
                    onPress={() => {
                        navigateToDrawerScreen('DrawerStack' ,'Orders');
                    }}>
                    <Text style={{ ...fontStyles.MontserratMedium14 }}>
                    Orders
                    </Text>
                </DrawerItem>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    drawerItem: {
        padding: moderateScale(50),
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: moderateScale(1),
        borderBottomColor: '#EBA50040',
        marginHorizontal: moderateScale(10),
        

    },
})

export default DrawerComp;
