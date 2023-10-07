import React, {useRef, useState} from 'react';
import {View, Text, Animated} from 'react-native';
import {TextButton} from '../../components';
import {COLORS, SIZES, constants, images, FONTS} from '../../constants';
import Walkthrough1 from './Walkthrough1';
import Walkthrough2 from './Walkthrough2';
import Walkthrough3 from './Walkthrough3';
import Walkthrough4 from './Walkthrough4';

const Walkthrough = ({navigation}) => {
  // walkthrough 2
  const [walkthrough2Animate, setWakthrough2Animate] = useState(false);
  const [walkthrough3Animate, setWakthrough3Animate] = useState(false);
  const [walkthrough4Animate, setWakthrough4Animate] = useState(false);
  const [press, setPress] = useState(true); // Set initial value to false
  const onViewChangeRef = useRef(({viewableItems, Changed}) => {
    const lastIndex = viewableItems.length - 1;
    if (viewableItems[0].index == 1) {
      //walkthrought page 2
      setWakthrough2Animate(true);
      setWakthrough3Animate(false);
      setWakthrough4Animate(false);
    } else if (viewableItems[0].index == 2) {
      //walkthrought page 2
      setWakthrough2Animate(false);
      setWakthrough3Animate(true);
      setWakthrough4Animate(false);
    } else if (viewableItems[0].index == 3) {
      //walkthrought page 2
      setWakthrough2Animate(false);
      setWakthrough3Animate(false);
      setWakthrough4Animate(true);
    } else if (viewableItems[0].index === lastIndex) {
      // Last index reached, set press to false
      setPress(false);
    }
  });
  // walthrough 1

  const scrollX = useRef(new Animated.Value(0)).current; // this important for view scrolling

  // SO this will be the coloring and alignmet of dots based on index value
  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {constants.walkthrough.map((item, index) => {
          // interpolate : which defines the range based on index where you set the color and sizes etc in the basis of it you can set input
          //  range like if you are current index give index ,
          // if you go ahed from current current index index then index+1 like that , if go back from current index then index-1 like that
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.dark08, COLORS.primary, COLORS.dark08],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`dots-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: 10,
                height: 10,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: SIZES.height * 0.2,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.height > 700 ? SIZES.padding : 20,
        }}>
        <Dots />

        {/* Buttons */}
        <View
          style={{
            flexDirection: 'row',
            height: 55,
          }}>
          <TextButton
            label={'Join Now'}
            contentContainerStyle={{
              flex: 0.5,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightGrey,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
          />
          <TextButton
            label={'Log In'}
            contentContainerStyle={{
              flex: 0.5,
              marginLeft: SIZES.radius,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary,
            }}
            labelStyle={{
              color: COLORS.light,
              ...FONTS.h3,
            }}
            disabled={press}
            onPress={() =>{
              navigation.reset({
                index: 0,
                routes: [{name: 'AuthMain'}],
              })
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.light}}>
      <Animated.FlatList
        data={constants.walkthrough}
        keyExtractor={item => item.id}
        horizontal
        snapToInterval={SIZES.width}
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onViewableItemsChanged={onViewChangeRef.current}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: SIZES.width,
                justifyContent: 'center',
              }}>
              {/* Walkthrough Images */}
              <View style={{flex: 1, justifyContent: 'center'}}>
                {index == 0 && <Walkthrough1 />}
                {index == 1 && <Walkthrough2 animate={walkthrough2Animate} />}
                {index == 2 && <Walkthrough3 animate={walkthrough3Animate} />}
                {index == 3 && <Walkthrough4 animate={walkthrough4Animate} />}
              </View>
              {/* Title And Description */}
              <View
                style={{
                  height: SIZES.height * 0.35,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  paddingHorizontal: SIZES.padding,
                }}>
                <Text style={{...FONTS.h1}}>{item.title}</Text>
                <Text
                  style={{
                    marginTop: SIZES.radius,
                    textAlign: 'center',
                    ...FONTS.body3,
                    color: COLORS.grey,
                  }}>
                  {item.sub_title}
                </Text>
              </View>
            </View>
          );
        }}
      />
      {renderFooter()}
    </View>
  );
};

export default Walkthrough;
