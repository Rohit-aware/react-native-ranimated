import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Header = ({
    prependCoponent,
    appendCoponent,
    lable,
    onPressLeft
}) => {
    return (
        <View style={{ height: 70, width: '100%', backgroundColor: 'white', flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center' }}>
            <TouchableOpacity style={{
                width: '10%',
                alignItems: 'flex-start'
            }}
                onPress={onPressLeft}
            >
                {prependCoponent && React.createElement(prependCoponent)}
            </TouchableOpacity>
            <View style={{ width: '80%',alignItems:'center'}}>
                <Text style={{
                    fontSize: 22,
                    fontWeight: '800',
                    lineHeight: 30,
                }}>{lable}</Text>
            </View>
            <TouchableOpacity style={{
                width: '10%',
                alignItems: 'flex-end'
            }}>
                {appendCoponent && React.createElement(appendCoponent)}
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})