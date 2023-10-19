import React, { forwardRef } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Colorses from '../../constants/colors';
import fontStyles from '../../styles/font-style';
import { moderateScale } from 'react-native-size-matters';
import CloseEye from '../../assets/svg/login/close-eye';
import OpenEye from '../../assets/svg/login/open-eye';


const InputBoxField = forwardRef((props, ref) => {
  const {
    showLeftIcon,
    mainView,
    customLableStyle,
    showCountryCode = false,
    label,
    leftIcon,
    customRootView,
    customTextInputStyle,
    customIconStyle,
    labelField,
    onUserChangedText,
    errorMessage,
    errorMessageView,
    inputWrapperView,
    password,
    secureTextEntry = false,
    togglePassword,
    ...textInputProps
  } = props;


  return (
    <View
      style={[
        { paddingBottom: moderateScale(errorMessage ? 20 : 0,), flex: 1,borderRadius:15,borderWidth:1,borderColor:'#FF0000',paddingLeft:20 },
        mainView,
      ]}>
      <View style={[styles.rootView, customRootView]}>
        {!!label && (
          <>
            <View
              style={{
                flex: 1,
                paddingLeft: moderateScale(5),
                paddingVertical: moderateScale(5),
                ...customLableStyle,
              }}>
              <Text style={[]}>{label}</Text>
            </View>
          </>
        )}
      </View>
      <View style={[styles.rootView, customRootView,{paddingVertical:moderateScale(5)}]}>
        {showLeftIcon && (
          <View style={[customIconStyle, { padding: moderateScale(5) }]}>
            {showLeftIcon && !!leftIcon && React.createElement(leftIcon)}
          </View>
        )}
        <View
          style={[
            {
              flex: 0.95,
              flexDirection: 'row',
              alignItems: 'center',
            },
            inputWrapperView,
          ]}>
          <TextInput
            placeholderTextColor={Colorses.textGrey}
            secureTextEntry={secureTextEntry}
            onChangeText={value => {
              // console.log('Mobile Number: ' + value);
              // onUserChangedText(value, labelField);
            }}
            style={[styles.textInputFieldStyle, customTextInputStyle,{ }]}
            {...textInputProps}
          />
          {password && (
            <Pressable
              style={{ paddingRight: moderateScale(10) }}
              onPress={togglePassword}>
              {secureTextEntry ? <CloseEye /> : <OpenEye />}
            </Pressable>
          )}
        </View>
      </View>
      {errorMessage && (
        <>
          <View style={{padding:3}}/>
          <View style={[{ paddingLeft: 50, paddingRight: 3 }, errorMessageView]}>
            <Text style={[fontStyles.MontserratRegular12, { color: Colorses.cancelRed, textAlign:'justify' }]}>
              {/* {[errorMessage].map((message) => message)} */}
              {errorMessage}
            </Text>
          </View>
        </>
      )}
    </View>
  );
});

export default InputBoxField;

const styles = StyleSheet.create({
  rootView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textInputFieldStyle: {
    flex: 1,
    includeFontPadding: false,
    paddingTop: 10,
    borderBottomColor: Colorses.grey,
    paddingHorizontal: moderateScale(5),
    ...fontStyles.MontserratRegular14,
    color: Colorses.black,
    fontStyle:'normal',
    fontWeight:'600',
    fontSize:16
  },
});
