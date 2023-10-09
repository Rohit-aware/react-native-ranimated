import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { Walkthrough, Welcome,ForgotPassword,Home } from "./src/screens";
import AuthMain from "./src/screens/Authentication/AuthMain";


const Stack = createStackNavigator();

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
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;