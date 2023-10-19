import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenHeader from '../../components/header/ScreenHeader'
import Menu from '../../components/Menu'

const DrawerProfile = () => {
  return (
    <View style={{ flex: 1 }}>
    <ScreenHeader
        lable={'Category'}
        appendCoponent={Menu}
    />
    </View>
  )
}

export default DrawerProfile

const styles = StyleSheet.create({})