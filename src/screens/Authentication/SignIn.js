import { Dimensions, Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../components/header/Header';
import Back from '../../assets/svg/login/back';
import InputBoxField from '../../components/login/FormInput';
import commonStyles from '../../styles/common-styles';
import { moderateScale } from 'react-native-size-matters';
import CustomButtons from '../../components/Custom-Button/CustomButton';


const width = Dimensions.get('screen').width
const SignIn = ({navigation}) => {
    return (
        <View style={{ flex: 1, }}>
            <Header lable={'Login'} prependCoponent={Back} />
            <View style={{
                paddingHorizontal: 20,
                marginTop: 50,
            }}>
                <View style={[commonStyles.RowJFSAC, { marginTop: 30 }]}>
                    <InputBoxField
                        labelField="Email"
                        placeholder={'E-mail'}
                    />
                </View>
                <View style={[commonStyles.RowJFSAC, { marginTop: 30 }]}>
                    <InputBoxField
                        labelField="password"
                        placeholder={'Password'}
                    />
                </View>

                <View style={[{ marginTop: 30 }]}>
                    <CustomButtons
                        onPress={() => navigation.navigate('DrawerStack')}
                        lable={'sign in'}
                    />
                </View>
                <View style={[commonStyles.flexRow, { justifyContent: 'center' }]}>
                    <Text style={{ fontSize: 16, fontWeight: '400' }}>
                        Don’t have an account?
                    </Text>
                    <TouchableOpacity  onPress={()=>navigation.navigate('Login')}>
                        <Text style={{ fontSize: 16, fontWeight: '400', color: '#ff5252', paddingLeft: 5 }}>
                            sign up
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{...commonStyles.RowJFSAC,borderRadius:moderateScale(10),borderWidth:moderateScale(0.8),padding:moderateScale(10),marginTop:moderateScale(40)}}>
                    <View style={{width:'20%',paddingLeft:moderateScale(10)}}>
                        <Image
                            source={require('../../assets/images/Google.png')}
                            style={{width:moderateScale(30),height:moderateScale(30)}}
                        />
                    </View>
                    <View style={{width:'80%',justifyContent:'center',paddingLeft:moderateScale(20)}}>    
                        <Text style={{fontSize:18,fontWeight:'600',color:'black'}}>Sign in with google</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1,marginTop:moderateScale(140,0.5),}}>
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

export default SignIn

const styles = StyleSheet.create({})