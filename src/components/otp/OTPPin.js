import React, { useRef, useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const OTPPin = (props) => {
  const { applyRTL,contentContainerStyle } = props;
  const textInputRef = useRef(null);
  const [otp, setOtp] = useState([
    {
      OTPValue: '',
    },
    {
      fakeValue: '',
    },
    {
      fakeValue: '',
    },
    {
      fakeValue: '',
    },
  ]);



  const renderItem = ({ index }) => {
    const isLastDigit = index === otp[0].OTPValue.length;

    return (
      <TouchableWithoutFeedback onPress={() => textInputRef.current?.focus()} style={[,{}]}>
        <View
          style={{
            borderWidth: isLastDigit ? moderateScale(1) : 0,
            borderBottomWidth: isLastDigit ? moderateScale(1) : 0,
            backgroundColor: isLastDigit ? '#ffffff' : '#F3F3F3',
            borderTopLeftRadius: isLastDigit ? moderateScale(6) : 0,
            borderBottomLeftRadius: isLastDigit ? moderateScale(6) : 0,
            borderTopRightRadius: isLastDigit ? moderateScale(6) : 0,
            borderBottomRightRadius: isLastDigit ? moderateScale(6) : 0,
            height: moderateScale(60, 0.3),
            width: moderateScale(60, 0.3),
            justifyContent: 'center',
            borderColor: '#E3C133',
            alignItems: 'center',
            flexDirection: applyRTL ? 'row-reverse' : 'row',
          }}
        >
          <Text
            style={[ { color: '#272727' }]}
            children={otp[0].OTPValue[index]}
          />
          {isLastDigit ? (
            <View
              style={[
                StyleSheet.absoluteFillObject,
                {
                  borderWidth: 1,
                  height: '70%',
                  width: 0.1,
                  top: moderateScale(10),
                  left: moderateScale(7),
                },
              ]}
            />
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={{ height: moderateScale(60, 0.3) ,...contentContainerStyle}}>
      <FlatList
        keyboardShouldPersistTaps="handled"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={otp}
        horizontal
        style={{ flex: 1 }}
        ItemSeparatorComponent={() => <View style={{ paddingHorizontal: moderateScale(10) }} />}
        contentContainerStyle={{
          flexDirection: applyRTL ? 'row-reverse' : 'row',
          justifyContent: 'space-between',
        }}
        renderItem={renderItem}
      />

      <TextInput
        ref={textInputRef}
        value={otp[0].OTPValue}
        onChangeText={(text) => {
          const newOTP = otp.map((item, index) => {
            item.OTPValue = text;
            return item;
          });
          setOtp(newOTP);
          props.setOtp(otp[0].OTPValue)
        }}
        keyboardType={"numeric"}
        maxLength={4}
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity: 0,
          textAlign: applyRTL ? 'right' : 'left',
        }}
      />
    </View>
  );
};

export default OTPPin;
