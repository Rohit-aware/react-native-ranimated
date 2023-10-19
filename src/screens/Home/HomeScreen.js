import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Menu from '../../components/Menu'
import ScreenHeader from '../../components/header/ScreenHeader'
import InputBoxField from '../../components/login/FormInput'
import commonStyles from '../../styles/common-styles'
import CustomButtons from '../../components/Custom-Button/CustomButton'

const HomeScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <ScreenHeader
                lable={'Welcome'}
                appendCoponent={Menu}
            />
            <View style={{
                paddingHorizontal: 20,
                marginTop: 50,
            }}>
                <View style={commonStyles.RowJFSAC}>
                    <InputBoxField
                        labelField="Name"
                        placeholder={'Full Name'}
                    />
                </View>
                <View style={[commonStyles.RowJFSAC, { marginTop: 20 }]}>
                    <InputBoxField
                        labelField="Email"
                        placeholder={'E-mail'}
                    />
                </View>
                <View style={[commonStyles.RowJFSAC, { marginTop: 0 }]}>
                    <CustomButtons
                    lable={'search'}
                    />
                </View>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})