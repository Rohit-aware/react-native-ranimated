import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FormInputs from '../../components/login/FormInput'
import Header from '../../components/header/Header';
import Back from '../../assets/svg/login/back';
import InputBoxField from '../../components/login/FormInput';
import commonStyles from '../../styles/common-styles';
import { moderateScale } from 'react-native-size-matters';
import CustomButtons from '../../components/Custom-Button/CustomButton';
import BackGround from '../../assets/svg/login/background';


const width = Dimensions.get('screen').width
const Login = ({navigation}) => {
  const [name, setName] = useState();
  return (
    <View style={{ flex: 1}}>
      <Header lable={'Sign Up'} prependCoponent={Back} />
     
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
        <View style={[commonStyles.RowJFSAC, { marginTop: 30 }]}>
          <InputBoxField
            labelField="Email"
            placeholder={'E-mail'}
          />
        </View>
        <View style={[commonStyles.RowJFSAC, { marginTop: 30 }]}>
          <InputBoxField
            labelField="Password"
            placeholder={'Password'}
          />
        </View>
        <View style={[commonStyles.RowJFSAC, { marginTop: 30 }]}>
          <InputBoxField
            labelField="Confirm Password"
            placeholder={'Confirm Password'}
          />
        </View>
        <View style={[{ marginTop: 30 }]}>
          <CustomButtons
          onPress={()=>navigation.navigate('SendOtp')}
            lable={'Create Account'}
          />
        </View>
        <View style={[commonStyles.flexRow, { justifyContent: 'center' }]}>
          <Text style={{ fontSize: 16, fontWeight: '400' }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
            <Text style={{ fontSize: 16, fontWeight: '400', color: '#ff5252', paddingLeft: 5 }}>
              sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex:1,top:46 }}>
      <ImageBackground
        source={require('../../assets/images/Vector.png')}
        style={{
          flex:1,
          // alignSelf:'flex-end',
        }}
        resizeMode='contain'
      />
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})