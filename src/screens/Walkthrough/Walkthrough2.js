import { View, StyleSheet, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';//importing it from to  this insted of react-native because it t gives virtualization warning so avoid that i are using t
import { SIZES, constants, FONTS, images } from '../../constants';
import { Image, MotiImage, useDynamicAnimation } from 'moti';
import { useEffect } from 'react';


const Walkthrough2 = ({ animate }) => {

    const resetInitialState = () => {
        motiImage1.animateTo({
            top: '30%',
            left: '25%',
        });
        motiImage2.animateTo({
            top: '45%',
            left: '15%',
        });
        motiImage3.animateTo({
            top: '58%',
            left: '25%',
        });
        motiImage4.animateTo({
            top: '60%',
            left: '40%',
        });
        motiImage5.animateTo({
            top: '30%',
            left: '50%',
        });
        motiImage6.animateTo({
            top: '45%',
            left: '70%',
        });
    };

    // Moti initial Positions 
    const motiImage1 = useDynamicAnimation(() => ({
        top: '30%',
        left: '25%',
    }))
    const motiImage2 = useDynamicAnimation(() => ({
        top: '45%',
        left: '15%',
    }))
    const motiImage3 = useDynamicAnimation(() => ({
        top: '58%',
        left: '25%',
    }))
    const motiImage4 = useDynamicAnimation(() => ({
        top: '60%',
        left: '40%',
    }))
    const motiImage5 = useDynamicAnimation(() => ({
        top: '30%',
        left: '50%',
    }))
    const motiImage6 = useDynamicAnimation(() => ({
        top: '45%',
        left: '70%',
    }))


    useEffect(() => {
        if (animate) {
            motiImage1.animateTo({
                top: '15%',
                left: '15%',
            })
            motiImage2.animateTo({
                top: '38%',
                left: 1,
            })
            motiImage3.animateTo({
                top: '70%',
                left: '5%',
            })
            motiImage4.animateTo({
                top: '75%',
                left: '40%',
            })
            motiImage5.animateTo({
                top: '15%',
                left: '70%',
            })
            motiImage5.animateTo({
                top: '20%',
                left: '75%',
            })
        } else {
            // Reset styles to initial state when animate is false
            resetInitialState();
        }
    }, [animate])
    return (
        <View style={{ flex: 1, overflow: 'hidden' }}>
            <Image
                source={images.walkthrough_02_01}
                style={{
                    ...styles.image,
                    top: '35%',
                    left: '35%',
                    width: 106,
                    height: 161,
                    zIndex: 1,

                }}
            />
            <Image
                source={images.walkthrough_02_02}
                style={{
                    ...styles.image,
                    top: '50%',
                    left: '50%',
                }}
            />

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
            <MotiImage
                state={motiImage5}
                source={images.walkthrough_02_07}
                style={styles.image}
            />
            <MotiImage
                state={motiImage6}
                source={images.walkthrough_02_07}
                style={styles.image}
            />
        </View>
    )
}

export default Walkthrough2;
const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        width: 86,
        height: 112,
        zIndex: 0,
        borderRadius: SIZES.radius
    }
})