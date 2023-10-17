import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopHome from '../screens/Topscreen/TopHome';
import TopSetting from '../screens/Topscreen/TopSetting';
import TopCart from '../screens/Topscreen/TopCart';
import { Dimensions, StatusBar } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#e91e63',
      tabBarLabelStyle: { fontSize: 15,textTransform:'capitalize' },
      tabBarStyle: { backgroundColor: 'powderblue' },
      tabBarStyle: StatusBar.currentHeight,
      tabBarInactiveTintColor: '#3333',
      tabBarActiveTintColor: 'red',
      tabBarIndicatorStyle: { backgroundColor: 'red' },
      tabBarContentContainerStyle: {
        elevation: 0,
        height:50
      }, 
      tabBarPressColor: 'powderblue',
    }}>
      <Tab.Screen name="Home" component={TopHome} />
      <Tab.Screen name="Setting" component={TopSetting} />
      <Tab.Screen name="Cart" component={TopCart} />
    </Tab.Navigator>
  );
}


export default MyTabs;