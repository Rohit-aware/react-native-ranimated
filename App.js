import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { Walkthrough, Welcome,ForgotPassword,Home } from "./src/screens";
import AuthMain from "./src/screens/Authentication/AuthMain";
import Tabs from "./src/routes/TabNavigation";
import MyTabs from "./src/routes/Mytabs";
import Login from "./src/screens/Authentication/login";
import SendOtp from "./src/screens/otp/SendOtp";
import VarifyCode from "./src/screens/otp/VarifyCode";
import SignIn from "./src/screens/Authentication/SignIn";
import HomeScreen from "./src/screens/Home/HomeScreen";
import DrawerProfile from "./src/screens/Drawer/DrawerProfile";
import Dashboard from "./src/screens/Drawer/Dashboard";
import TermsPolicy from "./src/screens/Drawer/Terms-policy";
import LastOffer from "./src/screens/Drawer/LastOffer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerComp from "./src/routes/MyDrawer";
import { Dimensions } from "react-native";
import CategoryList from "./src/screens/category-list/category.list.screen";
import TrolleyCredit from "./src/screens/trolley-credit/trolley-credit.screen";
import Orders from "./src/screens/Order-listing/Orders";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
    return (
      <Drawer.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{
          unmountOnBlur: true,
          drawerStyle: {
            width: Dimensions.get('window').width / 1.25,
          },
          headerShown: false,
          drawerPosition:"right" 
        }}
        drawerContent={(props) => <DrawerComp {...props} />}
      >
        <Drawer.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="DrawerProfile"
          component={DrawerProfile}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="TrolleyCredit"
          component={TrolleyCredit}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Orders"
          component={Orders}
          options={{ headerShown: false }}
        />
        {/* Add other Drawer.Screen components for other screens */}
      </Drawer.Navigator>
    );
  };
  

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Welcome'}
            >
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Walkthrough" component={Walkthrough} />
                <Stack.Screen name="AuthMain" component={AuthMain} /> 
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> 
                <Stack.Screen name="Home" component={Home} /> 
                <Stack.Screen name="Tabs" component={Tabs} /> 
                <Stack.Screen name="MyTabs" component={MyTabs} /> 
                <Stack.Screen name="Login" component={Login} /> 
                <Stack.Screen name="SendOtp" component={SendOtp} /> 
                <Stack.Screen name="VarifyCode" component={VarifyCode} /> 
                <Stack.Screen name="SignIn" component={SignIn} /> 
                {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />  */}
                <Stack.Screen name="DrawerStack" component={DrawerStack} /> 
                <Stack.Screen name="DrawerProfile" component={DrawerProfile} /> 
                <Stack.Screen name="Dashboard" component={Dashboard} /> 
                <Stack.Screen name="TermsPolicy" component={TermsPolicy} /> 
                <Stack.Screen name="LastOffer" component={LastOffer} /> 
                <Stack.Screen name="CategoryList" component={CategoryList} /> 
                <Stack.Screen name="TrolleyCredit" component={TrolleyCredit} /> 
                <Stack.Screen name="Orders" component={Orders} /> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;