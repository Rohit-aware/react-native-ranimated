import TabBuyMore from "../screens/tabScreens/TabBuyMore";
import TabCart from "../screens/tabScreens/TabCart";
import TabHome from "../screens/tabScreens/TabHome";
import TabPofile from "../screens/tabScreens/TabPofile";

const { createBottomTabNavigator } = require("@react-navigation/bottom-tabs");



const Tab = createBottomTabNavigator();

const Tabs = () =>{
    return(
        <Tab.Navigator initialRouteName="TabHome" screenOptions={{headerShown:false}}>
            <Tab.Screen name="TabHome" component={TabHome} optionsptions={{headerShown:false}}/>
            <Tab.Screen name="TabCart" component={TabCart}/>
            <Tab.Screen name="TabPofile" component={TabPofile}/>
            <Tab.Screen name="TabBuyMore" component={TabBuyMore}/>
        </Tab.Navigator>
    )
}

export default Tabs;