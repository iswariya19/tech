import { ImageBackground, StyleSheet, Text, View, } from 'react-native'
import React, { useEffect,useState } from 'react'
import Signin from './Signin'
import Signup from './Signup'
//import {AsyncStorage} from 'react-native';

const Launch = ({navigation}) => {
  const [logindata,setLogindata]= useState("");
   
  
    useEffect(()=>
    {
     // AsyncStorage.getItem("@user_name").then((value) => {
       // setLogindata(JSON.parse(value)); })
        setTimeout(()=>{ 
         // if (logindata){
           // navigation.navigate('Dashboard')

          //}
          //else{
            navigation.navigate('Signup')
          }
          
           // navigation.navigate('Signup')},1000);
        //}
        ,1000
        );
      })
      return (<View>
        <ImageBackground source={require('../assets/b1.jpeg')}
        style={{width:'150%',height:'100%',marginTop:'3%',}}>
            
            
            
        </ImageBackground>

      
    </View>
    
  )
}

export default Launch

const styles = StyleSheet.create({})
