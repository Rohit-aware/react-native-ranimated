import React, {useState, useEffect} from 'react';
import { GoogleSignin, statusCodes  } from '@react-native-google-signin/google-signin';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {
  CountryDropDown,
  TextButton,
  FormInput,
  IconButton,
  CheckBox,
} from '../../components';
import {COLORS, SIZES, images, FONTS, icons} from '../../constants';
import {MotiView, useAnimationState} from 'moti';
import {Shadow} from 'react-native-shadow-2';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import auth, { firebase } from '@react-native-firebase/auth';


const AuthMain = ({navigation}) => {
  // Country
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showCountryModal, setShowCountryModal] = useState(false);

   //   State
   const [Data, setData] = useState({
    uid: '',
    email:'',
    // Add other user data you want to store
  });
   const [name, setName] = useState();
   const [phone, setPhone] = useState();
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [isVisible, setIsVisible] = useState(false);
   const [termsChecked, setTermsChecked] = useState(false);
   const [mode, setMode] = useState('signIn');


   console.log("Email: " + email)
   console.log("Password: " + password)

  //  Sign In FireBase using social netwoeking account: 
  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("User info: ....................." + JSON.stringify(userInfo.user))
      console.log("User info Data: ....................." + !!userInfo.user)
      !!userInfo.user ? 
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      }) : null
    
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log("error.........................",error)
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log("error.........................",error)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
          console.log("error.........................",error)
      } else {
        // some other error happened
      }
    }
  };

  // sign in using email and password creating account
  const signUnFun = () =>{
    try {
      auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User account created & signed in!');
    navigation.navigate('AuthMain');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
    } catch (error) {
     console.log("errror in email password: " + error); 
    }
  }

// login using created account
const handleSignIn = async () => {
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    console.log('User signed in:', user);

    // Store user data locally (you might want to use AsyncStorage or another solution)
    // For simplicity, storing in state here
    setData({
      uid: user.uid,
      email: user.email,
      // Add other user data you want to store
    });

    // Navigate to the next screen (replace 'NextScreen' with your screen name)
    navigation.navigate('Home');
  } catch (error) {
    console.error('Error signing in:', error);
  }
};


 useEffect(() => {

  GoogleSignin.configure();
    // Fetch countires
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => {
        let countryData = data.map(item => {
          return {
            code: item.alpha2Code,
            name: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://countryflagsapi.com/png/${item.alpha2Code}`,
          };
        });

        setCountries(countryData);
      });
  }, []);

  // Render

  function renderCountryModal() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showCountryModal}>
        <TouchableWithoutFeedback onPress={() => setShowCountryModal(false)}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.dark80,
            }}>
            <View
              style={{
                height: 400,
                width: SIZES.width * 0.8,
                backgroundColor: COLORS.light,
                borderRadius: SIZES.radius,
              }}>
              <FlatList
                data={countries}
                keyExtractor={item => item.code}
                contentContainerStyle={{
                  paddingHorizontal: SIZES.padding,
                  paddingBottom: SIZES.padding,
                }}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: SIZES.radius,
                      }}
                      onPress={() => {
                        console.log(item);
                        setSelectedCountry(item);
                        setShowCountryModal(false);
                      }}>
                      <Image
                        source={{uri: item.flag}}
                        resizeMode="contain"
                        style={{
                          width: 40,
                          height: 30,
                        }}
                      />
                      <Text
                        style={{
                          flex: 1,
                          marginLeft: SIZES.radius,
                          ...FONTS.body3,
                        }}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

  //   Animation State
  const animationState = useAnimationState({
    signIn: {
      height: SIZES.height * 0.55,
    },
    signUp: {
      height: SIZES.height * 0.7,
    },
  });

  useEffect(() => {
    animationState.transitionTo('signIn');
  }, []);

  //   Render Function
  const renderSignIn = () => {
    return (
      <MotiView
        state={animationState}
        style={{
          marginTop: SIZES.padding,
          height: SIZES.height * 0.55,
        }}>
        <Shadow>
          <View style={[styles.authContainer, {paddingTop: 15}]}>
            <Text
              style={{
                width: '60%',
                lineHeight: 45,
                color: COLORS.dark,
                ...FONTS.h1,
              }}>
              SignIn to continue
            </Text>

            <KeyboardAwareScrollView
              enableOnAndroid={true}
              keyboardDismissMode="on-drag"
              keyboardShouldPersistTaps={'handled'}
              extraScrollHeight={-300}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center',
                paddingTop: 60,
                paddingBottom: 50,
              }}>
              {/* Email Input */}
              <FormInput
                containerStyle={{
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.error,
                }}
                placeholder={'Email'}
                prependComponent={
                  <Image
                    source={icons.email}
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.font,
                      alignSelf: 'center',
                    }}
                  />
                }
                value={email}
                onChange={txt => setEmail(txt)}
              />
              {/* Password Input */}
              <FormInput
                containerStyle={{
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.error,
                  marginTop: SIZES.radius,
                }}
                placeholder={'Password'}
                prependComponent={
                  <Image
                    source={icons.lock}
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.font,
                      alignSelf: 'center',
                    }}
                  />
                }
                value={password}
                onChange={txt => setPassword(txt)}
                appendComponent={
                  <IconButton
                    icon={isVisible ? icons.eye_off : icons.eye}
                    iconStyle={{
                      tintColor: COLORS.grey,
                    }}
                    onPress={() => setIsVisible(!isVisible)}
                  />
                }
                secureTextEntry={!isVisible}
              />

              <View style={{alignItems: 'flex-end'}}>
                <TextButton
                  label={'Forgot Password'}
                  contentContainerStyle={{
                    marginTop: SIZES.radius,
                    backgroundColor: null,
                  }}
                  labelStyle={{
                    color: COLORS.support3,
                    ...FONTS.h4,
                  }}
                  onPress={()=>navigation.navigate('ForgotPassword')}
                />
              </View>
            </KeyboardAwareScrollView>

            <TextButton
              label={'Login'}
              contentContainerStyle={{
                height: 55,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary,
              }}
              labelStyle={{
                ...FONTS.h3,
              }}
              onPress={() =>handleSignIn()}
            />
          </View>
        </Shadow>
      </MotiView>
    );
  };
  const renderSignUp = () => {
    return (
      <MotiView
        state={animationState}
        style={{
          marginTop: SIZES.padding,
        }}>
        <Shadow>
          <View style={[styles.authContainer, {paddingTop: 15}]}>
            <Text
              style={{
                lineHeight: 25,
                ...FONTS.h1,
              }}>
              Create new account
            </Text>

            <KeyboardAwareScrollView
              enableOnAndroid={true}
              keyboardDismissMode="on-drag"
              keyboardShouldPersistTaps={'handled'}
              extraScrollHeight={-300}
              contentContainerStyle={{
                flexGrow: 1,
                paddingTop: 10,
                paddingBottom: 15,
              }}>
              {/* Name */}
              <FormInput
                placeholder={'Name'}
                containerStyle={{
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.error,
                }}
                value={name}
                onChange={txt => setName(txt)}
                prependComponent={
                  <Image
                    source={icons.person}
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.base,
                      alignSelf: 'center',
                    }}
                  />
                }
              />

              {/* Email */}
              <FormInput
                placeholder={'Email'}
                containerStyle={{
                  marginTop: SIZES.radius,
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.error,
                }}
                value={email}
                onChange={txt => setEmail(txt)}
                prependComponent={
                  <Image
                    source={icons.email}
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.base,
                      alignSelf: 'center',
                    }}
                  />
                }
              />

              {/* Phone */}
              <FormInput
                placeholder={'Phone'}
                containerStyle={{
                  marginTop: SIZES.radius,
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.error,
                }}
                value={phone}
                onChange={txt => setPhone(txt)}
                prependComponent={
                  <Image
                    source={icons.phone}
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.base,
                      alignSelf: 'center',
                    }}
                  />
                }
                keboardType="numeric"
              />
              {/* Country Dropdown */}
              <CountryDropDown
                containerStyle={{
                  marginTop: SIZES.radius,
                }}
                selectedCountry={selectedCountry}
                onPress={() => setShowCountryModal(!showCountryModal)}
              />
              {/* Password Input */}
              <FormInput
                containerStyle={{
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.error,
                  marginTop: SIZES.radius,
                }}
                placeholder={'Password'}
                prependComponent={
                  <Image
                    source={icons.lock}
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.font,
                      alignSelf: 'center',
                    }}
                  />
                }
                value={password}
                onChange={txt => setPassword(txt)}
                appendComponent={
                  <IconButton
                    icon={isVisible ? icons.eye_off : icons.eye}
                    iconStyle={{
                      tintColor: COLORS.grey,
                    }}
                    onPress={() => setIsVisible(!isVisible)}
                  />
                }
                secureTextEntry={!isVisible}
              />
              {/* Terms And Condition */}
              <CheckBox
                containerStyle={{marginTop: SIZES.radius}}
                isSelected={termsChecked}
                onPress={() => setTermsChecked(!termsChecked)}
              />
            </KeyboardAwareScrollView>
            <TextButton
              label={'Create Account'}
              contentContainerStyle={{
                height: 55,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary,
              }}
              labelStyle={{
                ...FONTS.h3,
              }}
              onPress={() => {
                console.log('Create Account');
                signUnFun();
              }}
            />
          </View>
        </Shadow>
      </MotiView>
    );
  };

  const renderAuthContainerFooter = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
          height: 80,
          marginTop: -20,
          marginHorizontal: SIZES.radius,
          paddingBottom: SIZES.radius,
          borderBottomLeftRadius: SIZES.radius,
          borderBottomRightRadius: SIZES.radius,
          backgroundColor: COLORS.light60,
          zIndex: 0,
        }}>
        <Text
          style={{
            color: COLORS.grey,
            ...FONTS.body5,
          }}>
          {mode == 'signIn'
            ? "Don't have an account?"
            : 'I already have an account'}
        </Text>
        <TextButton
          label={mode == 'signIn' ? 'Create New Account' : 'sign In'}
          contentContainerStyle={{
            marginLeft: SIZES.base,
            backgroundColor: null,
          }}
          labelStyle={{
            color: COLORS.support3,
            ...FONTS.h5,
          }}
          onPress={() => {
            if (animationState.current == 'signIn') {
              animationState.transitionTo('signUp');
              setMode('signUp');
            } else {
              animationState.transitionTo('signIn');
              setMode('signIn');
            }
          }}
        />
      </View>
    );
  };

  const renderSocialLogins = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: -30,
          zIndex: -1,
        }}>
        <Text
          style={{
            color: COLORS.dark,
            ...FONTS.body3,
          }}>
          Or Login With
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
          }}>
          <IconButton
            icon={icons.twitter}
            iconStyle={{
              tintColor: COLORS.dark,
            }}
            containerStyle={styles.socialBtnContainer}
          />
          <IconButton
            icon={icons.google}
            iconStyle={{
              tintColor: COLORS.dark,
            }}
            containerStyle={{
              ...styles.socialBtnContainer,
              marginLeft: SIZES.radius,
            }}
            onPress={()=>googleLogin()}
          />
          <IconButton
            icon={icons.linkedin}
            iconStyle={{
              tintColor: COLORS.dark,
            }}
            containerStyle={{
              ...styles.socialBtnContainer,
              marginLeft: SIZES.radius,
            }}
          />
        </View>
      </View>
    );
  };
  const renderAuthContainer = () => {
    if (mode == 'signIn') {
      return renderSignIn();
    } else if (mode == 'signUp') {
      return renderSignUp();
    }
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.lightGrey,
      }}>

      {/* LOGO  */}
      <Image
        source={images.logo}
        style={{
          alignSelf: 'center',
          marginTop: SIZES.padding * 0.3,
          width: 50,
          height: 50,
        }}
      />

      {/* OFF COntainer */}
      <View style={{zIndex: 1, paddingBottom: -10}}>
        {renderAuthContainer()}
      </View>

      {renderAuthContainerFooter()}

      {mode == 'signIn' && renderSocialLogins()}

      {/* Country Modal */}
      {renderCountryModal()}
    </View>
  );
};

export default AuthMain;
const styles = StyleSheet.create({
  authContainer: {
    width: SIZES.width - SIZES.padding * 2,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.light,
    zIndex: 1,
  },
  socialBtnContainer: {
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.grey20,
  },
});
