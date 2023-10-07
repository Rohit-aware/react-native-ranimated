import {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {SIZES, constants, FONTS, images} from '../../constants';
import {MotiImage, useDynamicAnimation} from 'moti';

const Walkthrough3 = ({animate}) => {
  const resetInitialState = () => {
    motiImage1.animateTo({
      top: -60,
      right: 110,
    });
    motiImage2.animateTo({
      bottom: -60,
      right: 110,
    });
    motiImage3.animateTo({
      left: -50,
      top: 200,
    });
    motiImage4.animateTo({
      right: -50,
      top: 200,
    });
  };
  const motiImage1 = useDynamicAnimation(() => ({
    top: -60,
    right: 110,
  }));
  const motiImage2 = useDynamicAnimation(() => ({
    bottom: -60,
    right: 110,
  }));
  const motiImage3 = useDynamicAnimation(() => ({
    left: -50,
    top: 200,
  }));
  const motiImage4 = useDynamicAnimation(() => ({
    right: -50,
    top: 200,
  }));

  useEffect(() => {
    if (animate) {
      motiImage1.animateTo({
        top: 20,
        left: 80,
      });
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
      <MotiImage
        state={motiImage1}
        source={images.walkthrough_02_03}
        style={styles.image}
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

export default Walkthrough3;
const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    width: 150,
    height: 150,
    zIndex: 0,
    borderRadius: SIZES.radius,
  },
});
