import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const ScreenHeader = ({
    prependCoponent,
    appendCoponent,
    lable,
    onPressBack
}) => {

    const navigation = useNavigation();
    const openDrawer = () =>navigation.openDrawer();
    return (
        <View style={{ height: 60, width: '100%', backgroundColor: 'white', flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center',
            elevation:7
        }}>
            <TouchableOpacity style={{
                width: '10%',
                alignItems: 'flex-start'
            }}
                onPress={onPressBack}
            >
                {prependCoponent && React.createElement(prependCoponent)}
            </TouchableOpacity>
            <View style={{ width: '80%',alignItems:'center'}}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '800',
                    lineHeight: 30,
                    color:'#444'
                }}>{lable}</Text>
            </View>
            <TouchableOpacity style={{
                width: '10%',
                alignItems: 'flex-end'
            }}
            onPress={()=>openDrawer()}
            >
                {appendCoponent && React.createElement(appendCoponent)}
            </TouchableOpacity>
        </View>
    )
}

export default ScreenHeader

const styles = StyleSheet.create({})