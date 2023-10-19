import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/header/Header'
import Back from '../../assets/svg/login/back'
import InputBoxField from '../../components/login/FormInput'
import commonStyles from '../../styles/common-styles'
import { moderateScale } from 'react-native-size-matters'
import CustomButtons from '../../components/Custom-Button/CustomButton'


const width = Dimensions.get('screen').width
const SendOtp = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{}}>
        <Header lable={'Varify'} prependCoponent={Back} />
      </View>
      <View style={{ height: moderateScale(496),marginTop:moderateScale(100)}}>
        <View style={[commonStyles.flexRowJCAC, {  marginHorizontal: moderateScale(10) }]}>
          <InputBoxField
            labelField={'mobile'}
            placeholder={'Enter Your Phone Number'}
          />
        </View>
        <View style={[{margin:moderateScale(20)}]}>
          <CustomButtons
            onPress={()=>navigation.navigate('VarifyCode')}
            lable={'Send verification code'}
          />
        </View>
      </View>
      <View style={{ flex: 1}}>
        <Image
          source={require('../../assets/images/Vector.png')}
          style={{
            width: width,
            height: '100%',
            
          }}
          resizeMode='contain'
        />
      </View>
    </View>
  )
}

export default SendOtp

const styles = StyleSheet.create({})