import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {SIZES, COLORS, FONTS} from '../constants';
const FormInput = ({
  containerStyle,
  inputContainerStyle,
  inputStyle,
  value = '',
  prependComponent,
  appendComponent,
  onChange,
  onPress,
  secureTextEntry,
  keboardType = 'default',
  autoComplete = 'off',
  autoCapitlize = 'none',
  maxLength,
  placeHolderTextColor = COLORS.grey60,
  editable,
  placeholder,
}) => {
  return (
    <View style={{...containerStyle}}>
      <View
        style={{
          flexDirection: 'row',
          height: 55,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGrey,
          ...inputContainerStyle,
        }}>
        {prependComponent}
        <TextInput
          style={{
            flex: 1,
            paddingVertical: 0,
            ...FONTS.body3,
            ...inputStyle,
          }}
          value={value}
          placeholderTextColor={placeHolderTextColor}
          secureTextEntry={secureTextEntry}
          keboardType={keboardType}
          autoCapitalize={autoCapitlize}
          autoComplete={autoComplete}
          maxLength={maxLength}
          onChangeText={txt => {
            onChange(txt);
          }}
          onPressIn={onPress}
          editable={editable}
          placeholder={placeholder}
        />

        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({});
