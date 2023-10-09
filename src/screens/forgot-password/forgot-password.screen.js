import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import OTPPin from '../../components/otp/OTPPin'
import { moderateScale } from 'react-native-size-matters';
import { COLORS, icons,FONTS, SIZES } from '../../constants';
import { IconButton } from '../../components';

const ForgotPassword = () => {
  const [otpNumber, setOtpNumber] = useState('');
  const setOtp = otp => {
    setOtpNumber(otp);
  };

  const renderHeader =()=>{
    return(
      <View style={{backgroundColor:COLORS.light,flexDirection:'row',alignItems:'center',width :SIZES.width , columnGap:SIZES.padding,height:SIZES.padding * 2.1,paddingHorizontal:SIZES.radius}}>
        <IconButton
          icon={icons.arrow_left}
          iconStyle={{
            width :24,
            height :24
          }}
        />
        <Text style={{
          color:COLORS.dark60,
          ...FONTS.h2
        }}> Forgot Password</Text>
      </View>
    )
  }


  return (
    <View style={{ flex: 1, backgroundColor:COLORS.lightGrey}}>
      {renderHeader()}
      <View style={{width:SIZES.width,height:SIZES.padding*4,marginTop:SIZES.padding,alignItems:'center'}}>
      <OTPPin
        contentContainerStyle={{
          marginTop: moderateScale(20)
        }}
        setOtp={setOtp}
      />
      </View>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({})