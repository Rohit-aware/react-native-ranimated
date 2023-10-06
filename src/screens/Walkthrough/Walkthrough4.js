import { View, Image, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';//importing it from to  this insted of react-native because it t gives virtualization warning so avoid that i are using t
import { SIZES, constants,FONTS } from '../../constants';



const Walkthrough4 = () => {
    return(
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{...FONTS.h1}}>
                Hdhifskjf
            </Text>
        </View>
    )
}

export default Walkthrough4;