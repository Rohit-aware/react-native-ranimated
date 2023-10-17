import React, { useRef, useState } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { TextButton } from '../../components';
import { COLORS, SIZES, constants, FONTS } from '../../constants';
import Walkthrough1 from './Walkthrough1';
import Walkthrough2 from './Walkthrough2';
import Walkthrough3 from './Walkthrough3';
import Walkthrough4 from './Walkthrough4';

const Walkthrough = ({ navigation }) => {

  // walkthrough 2
  const [walkthrough2Animate, setWakthrough2Animate] = useState(false);
  const [walkthrough3Animate, setWakthrough3Animate] = useState(false);
  const [walkthrough4Animate, setWakthrough4Animate] = useState(false);
  const [INDEX, setINDEX] = useState();
  const slideRef = useRef(null)


  const onViewChangeRef = useRef(({ viewableItems, changed }) => {
    // console.log("onViewChangeRef called", viewableItems);
    const INDEX = viewableItems[0].index;
    setINDEX(viewableItems[0].index)
    try {
      setWakthrough2Animate(INDEX === 1);
      setWakthrough3Animate(INDEX === 2);
      setWakthrough4Animate(INDEX === 3);
    } catch (error) {
      console.log("error..........", error)
    }
  }
  );

  console.log("Index.............................",INDEX)
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
          const dotWidth = scrollX.interpolate({
            inputRange : [(index - 1) * SIZES.width, index * SIZES.width, (index + 1) * SIZES.width],
            outputRange: [10, 20, 10],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`dots-${index}`}
              style={[{width :dotWidth, backgroundColor:dotColor },styles.dot]}
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
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Tabs' }],
              })
            }}
          />
        </View>
      </View>
    );
  };

  // this maintain the time  to change the index

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 10,
  }).current;

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.light }}>
      <Animated.FlatList
        data={constants.walkthrough}
        keyExtractor={item => item.id}
        horizontal
        snapToInterval={SIZES.width}
        decelerationRate={0.7}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onViewableItemsChanged={onViewChangeRef.current} // this maintain the time  to change the index
        contentContainerStyle={{
          flexGrow: 1,
        }}
        viewabilityConfig={viewabilityConfig}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          },
        )}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: SIZES.width,
                justifyContent: 'center',
              }}>
              {/* Walkthrough Images */}
              <View style={{ flex: 1, justifyContent: 'center' }}>
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
                <Text style={{ ...FONTS.h1 }}>{item.title}</Text>
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

const styles = StyleSheet.create({
  dot:{
    borderRadius: 5,
    marginHorizontal: 6,
    height: 10,
  }
})
