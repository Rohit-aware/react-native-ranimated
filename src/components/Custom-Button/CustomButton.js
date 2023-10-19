import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../constants/colors';
import fontStyles from '../../styles/font-style';
import commonStyles from '../../styles/common-styles';

const CustomButtons = ({lable, onPress, onPressAnyIssue}) => {
  const isAnyIssueButton = lable === 'Any Issue?';

  const buttonStyle = isAnyIssueButton
    ? [commonStyles.centerJCAC, styles.anyIssueButton]
    : [commonStyles.centerJCAC, commonStyles.boxShadow, styles.markButton];

  const textStyle = isAnyIssueButton
    ? styles.anyIssueButtonText
    : styles.markButtonText;

  const onPressHandler = isAnyIssueButton ? onPressAnyIssue : onPress;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPressHandler}>
      <Text style={textStyle}>{lable}</Text>
    </TouchableOpacity>
  );
};

export default CustomButtons;

const styles = StyleSheet.create({
  markButton: {
    margin: moderateScale(26),
    borderRadius: moderateScale(10),
    padding: moderateScale(12),
    backgroundColor: '#ff5252',
    width:'95%',
    marginHorizontal:10
  },
  anyIssueButton: {
    marginHorizontal: moderateScale(30),
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: Colors.secondaryColor,
    padding: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  markButtonText: {
    ...fontStyles._MontserratMedium(
      'Montserrat-SemiBold',
      moderateScale(16),
      Colors.black,
      '600',
    ),
  },
  anyIssueButtonText: {
    ...fontStyles._MontserratMedium(
      'Montserrat-SemiBold',
      moderateScale(16),
      Colors.secondaryColor,
      '600',
    ),
  },
});
