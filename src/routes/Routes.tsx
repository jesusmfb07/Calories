import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import { RootStackParamList } from "../types";
import Home from "../views/Home";
import AddFood from "../views/AddFood/AddFood";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
           <Stack.Screen 
           name="Home"
           component={Home}
           options={{headerShown: false}}
           />
           <Stack.Screen
            name="AddFood"
            component={AddFood}
            options={{headerShown: false}}
           />
        </Stack.Navigator>   
    </NavigationContainer>


    );
};
  
    
  


export default Routes

