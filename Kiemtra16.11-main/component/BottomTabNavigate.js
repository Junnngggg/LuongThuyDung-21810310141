import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screen/HomeScreen.js'
import SearchScreen from '../screen/SearchScreen.js'
import Scan from '../screen/Scan.js'
import Profile from '../screen/Profile.js'
import Cart from '../screen/Cart.js'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
const Tab=createBottomTabNavigator();
   
const BottomTabs=()=>{
    return(
        <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} 
            options={{
                tabBarLabel: "Home",tabBarActiveTintColor:'#2DC0FF',tabBarStyle:{height:70, paddingBottom: 6,
                    paddingTop:10,} ,headerShown: false,headerTitleAlign: 'center',
                tabBarIcon: ({ focused }) => focused ? (<AntDesign name="home" size={30} color="#2DC0FF" />) :
                    <AntDesign name="home" size={28} color="#BBBBBB" />
            }}/>
        <Tab.Screen name="Notification" component={SearchScreen}
           options={{
                tabBarLabel: "Notification",tabBarActiveTintColor:'#2DC0FF',tabBarStyle:{height:70, paddingBottom: 6,
                    paddingTop:10,} , headerShown: false,headerTitleAlign: 'center',
                tabBarIcon: ({ focused }) => focused ? <Ionicons name="notifications-outline" size={30} color="#2DC0FF" /> :
                <Ionicons name="notifications-outline" size={28} color="#BBBBBB" />
            }} />
             <Tab.Screen name="Scan" component={Scan}
            options={{
                tabBarLabel: "Scan",tabBarActiveTintColor:'#2DC0FF',tabBarStyle:{height:70, paddingBottom: 6,
                    paddingTop:10,} , headerShown: false,headerTitleAlign: 'center',
                tabBarIcon: ({ focused }) => focused ? <MaterialCommunityIcons name="line-scan" size={30} color="#2DC0FF" /> :
                <MaterialCommunityIcons name="line-scan" size={28} color="#BBBBBB" />
            }} />
             <Tab.Screen name="History" component={Profile}
            options={{
                tabBarLabel: "History",tabBarActiveTintColor:'#2DC0FF',tabBarStyle:{height:70, paddingBottom: 6,
                    paddingTop:10,} , headerShown: false,headerTitleAlign: 'center',
                tabBarIcon: ({ focused }) => focused ?<MaterialIcons name="history" size={30} color="#2DC0FF"/>:
                <MaterialIcons name="history" size={28} color="#BBBBBB" />
            }} />
             <Tab.Screen name="Cart" component={Cart}
            options={{
                tabBarLabel: "Cart",tabBarActiveTintColor:'#2DC0FF',tabBarStyle:{height:70, paddingBottom: 6,
                    paddingTop:10,} , headerShown: false,headerTitleAlign: 'center',
                tabBarIcon: ({ focused }) => focused ?<Ionicons name="cart-outline" size={30} color="#2DC0FF" />:
                <Ionicons name="cart-outline" size={28} color="#BBBBBB" />
            }} />
    </Tab.Navigator>
    
    );
}
export default BottomTabs

