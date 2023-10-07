import {View, Image, Text, StyleSheet} from 'react-native';
import {SIZES, constants, FONTS, images} from '../../constants';
import {MotiImage, useDynamicAnimation} from 'moti';
import {useEffect} from 'react';

const Walkthrough4 = ({animate}) => {
  const resetInitialState = () => {
    motiImage2.animateTo({
      bottom: -60,
      right: 110,
    });
    motiImage3.animateTo({
      left: -80,
      top: 10,
    });
    motiImage4.animateTo({
      right: -50,
      top: 200,
    });
  };

  const motiImage2 = useDynamicAnimation(() => ({
    bottom: 0,
    right: 110,
  }));
  const motiImage3 = useDynamicAnimation(() => ({
    left: 0,
    top: 200,
  }));
  const motiImage4 = useDynamicAnimation(() => ({
    right: 0,
    top: 100,
  }));

  useEffect(() => {
    if (animate) {
      motiImage2.animateTo({
        bottom: 20,
        left: 150,
      });
      motiImage3.animateTo({
        left: 40,
        top: 185,
      });
      motiImage4.animateTo({
        right: 30,
        top: 190,
      });
    } else {
      // Reset styles to initial state when animate is false
      resetInitialState();
    }
  }, [animate]);
  return (
    <View style={{flex: 1, overflow: 'hidden'}}>
      <Image
        source={images.walkthrough_02_03}
        style={{
          top: '35%',
          left: '35%',
          width: 120,
          height: 200,
          zIndex: 1,
        }}
      />
      <MotiImage
        state={motiImage2}
        source={images.walkthrough_02_04}
        style={styles.image}
      />
      <MotiImage
        state={motiImage3}
        source={images.walkthrough_02_05}
        style={styles.image}
      />
      <MotiImage
        state={motiImage4}
        source={images.walkthrough_02_06}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    width: 105,
    height: 120,
    zIndex: 0,
    borderRadius: SIZES.radius,
  },
});

export default Walkthrough4;
