import {View, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler'; //importing it from to  this insted of react-native because it t gives virtualization warning so avoid that i are using t
import {SIZES, constants} from '../../constants';
import {useEffect, useRef, useState} from 'react';

const ITEM_WIDTH = 120;
const Walkthrough1 = () => {
  // ROW 1
  const [row1Images, setRow1Images] = useState([
    ...constants.walkthrough_01_01_images,
    ...constants.walkthrough_01_02_images,
  ]);
  const [currentPosition, setCurrentPosition] = useState(0);
  // Row 2

  const [row2Images, setRow2Images] = useState([
    ...constants.walkthrough_01_02_images,
    ...constants.walkthrough_01_02_images,
  ]);
  const [row2currentPosition, setRow2CurrentPosition] = useState(0);

  // to maintain the postion of automatic scrolling
  const row1FlatListRef = useRef();
  const row2FlatListRef = useRef();

  // Automatic Scrooling using useffects
  useEffect(() => {
    let positionTimer;
    const timer = () => {
      positionTimer = setTimeout(() => {
        // Icrement the scrollPosition with each interval

        // slider1
        setCurrentPosition(prevPosition => {
          const position = Number(prevPosition) + 0.9;
          row1FlatListRef?.current?.scrollToOffset({
            offset: position,
            animated: false,
          });

          const maxOffset =
            constants.walkthrough_01_01_images.length * ITEM_WIDTH;

          if (prevPosition > maxOffset) {
            // Here tried to achieve the infinite scroling based on how much images traveled from it's original postion that is offset
            const offset = prevPosition - maxOffset;

            row1FlatListRef?.current?.scrollToOffset({offset, animated: false});

            return offset;
          } else {
            return position;
          }
        });

        // slider2
        setRow2CurrentPosition(prevPosition => {
          const position = Number(prevPosition) + 0.9;
          row2FlatListRef?.current?.scrollToOffset({
            offset: position,
            animated: false,
          });

          const maxOffset =
            constants.walkthrough_01_02_images.length * ITEM_WIDTH;

          if (prevPosition > maxOffset) {
            const offset = prevPosition - maxOffset;
            row2FlatListRef?.current?.scrollToOffset({
              offset,
              animated: false,
            });
            return offset;
          } else {
            return position;
          }
        });
        timer();
      }, 32);
    };
    timer();
    return () => {
      clearTimeout(positionTimer);
    };
  }, []);

  // render
  return (
    <View style={{}}>
      {/* Slider1 */}
      <FlatList
        ref={row1FlatListRef}
        decelerationRate={'normal'}
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        listkey="Slider1"
        keyExtractor={(_, index) => {
          `Slider1_${index + 1}`;
        }}
        data={row1Images}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: ITEM_WIDTH,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={item}
                style={{
                  width: 110,
                  height: 110,
                }}
              />
            </View>
          );
        }}
      />
      {/* Slider2 */}
      <FlatList
        ref={row2FlatListRef}
        decelerationRate={'normal'}
        horizontal
        scrollEnabled={false}
        contentContainerStyle={{
          marginTop: SIZES.padding,
        }}
        showsHorizontalScrollIndicator={false}
        listkey="Slider2"
        keyExtractor={(_, index) => {
          `Slider2_${index + 1}`;
        }}
        data={row2Images}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: ITEM_WIDTH,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={item}
                style={{
                  width: 110,
                  height: 110,
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Walkthrough1;
