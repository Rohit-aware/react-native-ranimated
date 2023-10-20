import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Back from '../../assets/svg/login/back'
import fontStyles from '../../styles/font-style'
import commonStyles from '../../styles/common-styles'
import Credit from '../../local-data/UserData'
const TrolleyCredit = ({navigation}) => {

    const tyep=[
        {
            name:'All'
        },
        {
            name:'PAID'
        },
        {
            name:'CASH'
        },
    ]

    const [selectedIndex,setSelectedIndex]=useState(0)

    const filterData = () => {
        if (selectedIndex === 0) {
          return Credit; // Display all data
        } else {
          const selectedType = tyep[selectedIndex].name;
          return Credit.filter(item => item.payment_type.toLowerCase() === selectedType.toLowerCase());
        }
      };

    const  BottomRenderList = (item,index) =>{
        return(
            <View style={{padding:20,backgroundColor:'#ffff', borderRadius:20}}>
                <View style={[commonStyles.flexRowJSBAC,{paddingBottom:10}]}>
                    <Text style={[
                        fontStyles.MontserratBold14,
                        {fontWeight:'800'}
                    ]}>
                        {item.payment_type}
                    </Text>
                    <Text style={[
                        fontStyles.MontserratRegular10
                    ]}>
                        {item.payment_id}
                    </Text>
                </View> 
                <View style={[commonStyles.flexRowJSBAC,]}>
                    <Text style={[
                        fontStyles.MontserratBold16
                    ]}>
                        {item.payment_date}
                    </Text>
                    <Text style={[
                        fontStyles.MontserratBold16,
                        {fontWeight:'700'}
                    ]}>
                        {item.payment_price}
                    </Text>
                </View> 
            </View>
        )
    }
    return (
        <View style={{
            flex: 1
        }}>

            <Header
                lable={'Trolley Credit'}
                prependCoponent={Back}
            />
            <View style={[commonStyles.flexRowJCAC,{
                columnGap:20,
                paddingVertical:20,
                backgroundColor:'white'
            }]}>
                {tyep.map((item,index)=>{
                    const  isSelected = index === selectedIndex 
                    return(
                        <TouchableOpacity style={[commonStyles.centerJCAC,{
                            backgroundColor:isSelected ?  '#EBA500':'#ebebeb',
                            height:40,
                            width:100,
                            borderRadius:20,
                            paddingHorizontal:10,
                            
                        }]}
                        onPress={()=>setSelectedIndex(index)}
                        > 
                        <Text style={[fontStyles.MontserratBold16]}>
                            {item.name}
                        </Text>
                        </TouchableOpacity>
                    )
                })}
            </View>

            <ScrollView style={{
                // backgroundColor:'#ebebeb',
                margin:20,
            }}
                showsVerticalScrollIndicator={false}
            >
            <FlatList
                data={filterData()}
                contentContainerStyle={{
                    rowGap:10,
                }}
                showsVerticalScrollIndicator={false}
                renderItem={({item,index})=>BottomRenderList(item,index)}
            />
            </ScrollView>

        </View>
    )
}

export default TrolleyCredit

const styles = StyleSheet.create({})