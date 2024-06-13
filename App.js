import * as React from 'react';
import { useState } from 'react';
import { View, Text, ImageBackground, Image, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import Launch from './Screen/Launch';
import Signin from './Screen/Signin';
import Signup from './Screen/Signup';
import Dashboard from './Screen/Dashboard';
import Customerlist from './Screen/Customerlist';
import Productlist from './Screen/Productlist';
import Salesreport from './Screen/Salesreport';
import SalesDetails from './Screen/SalesDetails';
import Profile from './Screen/Profile';
import ProductAdd from './Screen/ProductAdd';
import Salesreturn from './Screen/Salesreturn';
import CustomerAdd from './Screen/CustomerAdd';
import ReturnDetails from './Screen/ReturnDetails';
import Changepin from './Screen/Changepin';
import Bill from './Screen/Bill';
import Forgetpin from './Screen/Forgetpin';
import Otp from './Screen/Otp';
import Setpin from './Screen/Setpin';
import About from './Screen/About';
import Mycontext from './Screen/Mycontext';
import ReturnBills from './Screen/ReturnBills';

import Searchproduct from './Screen/Searchproduct';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReturnBill from './Screen/ReturnBills';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function Bottom_nav() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false, tabBarStyle: {
        backgroundColor: 'black',
      }, tabBarLabelStyle: { fontSize: 15, fontWeight: 'bold' }



    })}>
      <Tab.Screen name="Home" component={Dashboard}
        options={{
          headerShown: false
          , tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={27} color={'white'} />



          )
        }} />
      <Tab.Screen name="Bill"
        initialParams={{ items: '' }}
        component={Bill} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="file-invoice" size={24} color={'white'} />
          ), tabBarStyle: { display: "none" }
        }} />
              <Tab.Screen name="ReturnBills"
        initialParams={{ items: '' }}
        component={ReturnBills} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="file-invoice" size={24} color={'white'} />
          ), tabBarStyle: { display: "none" }
        }} />
    
    </Tab.Navigator>

  );
}

const CustomDrawer = props => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <DrawerContentScrollView {...props} >
        <View>
          <ImageBackground source={{ uri: 'https://imageio.forbes.com/specials-images/imageserve/5f8dd9b7e4b6e33ea7467081/A-person-using-a-tablet-with-a-shopping-cart-icon--digital-payment-concept-/960x0.jpg?format=jpg&width=960' }}
            style={{ width: '100%', height: 200 }}>
            <View style={{
              flexDirection: 'row', marginTop: 120,
              //width:'96%'
              //,borderColor:'gold',borderBottomWidth: 1, borderTopWidth: 1,
              //borderLeftWidth: 1, borderRightWidth: 1,
              //borderEndWidth: 1,borderRadius:30
            }}>
              <Image source={{ uri: 'https://thumbs.dreamstime.com/b/d-stylized-user-profile-icon-golden-vector-isolated-symbol-illustration-dark-background-glossy-volumetric-shadow-137570051.jpg' }}
                style={{ width: 80, height: 80, borderRadius: 110, marginLeft: 20, }}></Image>
              <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginTop: 10, marginLeft: 30 }}>Iswariya</Text>
              </View>
            </View>

          </ImageBackground>

        </View>




        <DrawerItemList {...props} />

      </DrawerContentScrollView>

    </View>
  )
}

function Drawer_nav() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer{...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#202124', drawerInactiveBackgroundColor: '#202124',
        drawerActiveTintColor: "white", drawerInactiveTintColor: 'white',
        drawerLabelStyle: {
          marginLeft: -25, fontWeight: 'bold', fontSize: 20
        }
      }}>
      <Drawer.Screen name="GoHome" component={Bottom_nav} options={{
        title: 'Home',
        headerShown: false, drawerIcon: () => (
          <Ionicons name="home" size={30} color={'gold'} />

        )
      }} />
      <Drawer.Screen name="Salesreport" component={Salesreport}
        options={{
          headerShown: false, drawerIcon: () => (
            <Entypo name="credit" size={27} color={'gold'} />
          )
        }} />
      <Drawer.Screen name="Salesreturn" component={Salesreturn}
        options={{
          headerShown: false, drawerIcon: () => (
            <FontAwesome5 name="sync-alt" size={24} color="gold" />
          )
        }} />
      <Drawer.Screen name="Profile" component={Profile}
        options={{
          headerShown: false, drawerIcon: () => (
            <Ionicons name="ios-person-circle" size={24} color="gold" />
          )
        }} />
      <Drawer.Screen name="About" component={About}
        options={{
          headerShown: false, drawerIcon: () => (
            <MaterialCommunityIcons name="book-information-variant" size={24} color="gold" />
          )
        }} />
    </Drawer.Navigator>
  );
};

function App() {
  const [username, setUsername] = useState('')
  const [Mobileno,setMobileno]=useState('')
  const [Pinno,setPinno]=useState('')
  
  const contextvalues = { username, setUsername,Mobileno,setMobileno,Pinno,setPinno }
  return (
    <Mycontext.Provider value={contextvalues}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Launch" component={Launch} options={{ headerShown: false }} />
          <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={Drawer_nav} options={{ headerShown: false }} />
          <Stack.Screen name="Customerlist" component={Customerlist} options={{ headerShown: false }} />
          <Stack.Screen name="Productlist" component={Productlist} options={{ headerShown: false }} />
          <Stack.Screen name="Salesreport" component={Salesreport} options={{ headerShown: false }} />
          <Stack.Screen name="SalesDetails" component={SalesDetails} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name="ProductAdd" component={ProductAdd} options={{ headerShown: false }} />
          <Stack.Screen name="Salesreturn" component={Salesreturn} options={{ headerShown: false }} />
          <Stack.Screen name="CustomerAdd" component={CustomerAdd} options={{ headerShown: false }} />
          <Stack.Screen name="ReturnDetails" component={ReturnDetails} options={{ headerShown: false }} />
          <Stack.Screen name="Changepin" component={Changepin} options={{ headerShown: false }} />
          <Stack.Screen name="Bill" component={Bill} options={{ headerShown: false }} />
          <Stack.Screen name="Forgetpin" component={Forgetpin} options={{ headerShown: false }} />
          <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
          <Stack.Screen name="Setpin" component={Setpin} options={{ headerShown: false }} />
          <Stack.Screen name="Searchproduct" component={Searchproduct} options={{ headerShown: false }} />
          <Stack.Screen name="ReturnBills" component={ReturnBills} options={{ headerShown: false }} />


        </Stack.Navigator>
      </NavigationContainer>
    </Mycontext.Provider>
  );
}

export default App;