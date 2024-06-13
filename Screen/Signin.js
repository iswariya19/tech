import {  StyleSheet, Text, View,Image, TextInput, Button,Alert, ImageBackground, TouchableOpacity } from 'react-native'
import React , { useState,useContext } from 'react'
{/*import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';*/}
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
//import EntypoIcon from 'react-native-vector-icons/Entypo'
//import { set } from 'react-native-reanimated'
import Forgetpin from './Forgetpin'
import { Server_url } from './Service/Api_Constants'
import Mycontext from './Mycontext'


const Signin = ({navigation}) => {
  
  const [mobileno,setmobileno]=useState('');
  const [pin,setpin]=useState('');
  const [msgshow,setMessageshow]= useState(false);
  const [msgcontent,setMsgcontent]= useState('');
  const [msgshow1,setMessageshow1]= useState(false);
  const [msgcontent1,setMsgcontent1]= useState('');
  const[eyesee,seteyesee]=useState(true);
  const {username,setUsername}=useContext(Mycontext)
  const{ Mobileno,setMobileno}=useContext(Mycontext)
  const{Pinno,setPinno}=useContext(Mycontext)
  
  const Signin_validation =()=>{
    if (mobileno === ''){
      setMsgcontent('plese enter mobileno')
      setMessageshow(true)
     // setMessageshow(false)
      
      //alert('please enter the name');
    }
 else if (mobileno.length !== 10){
    setMsgcontent('plese enter 10 digit mobileno')
    setMessageshow(true)
    
  

    //alert('please enter the name');
  }
  else if (mobileno<6000000000){
    setMsgcontent('plese enter validmobileno')
    setMessageshow(true)
  }
  else if (pin === ''){
    setMessageshow(false)
    setMsgcontent1('plese enter pin')
    setMessageshow1(true)
    
   // alert('plese enter the password');
  }
 else if (pin.length !== 4){
  setMessageshow(false)
  setMsgcontent1('plese enter valid pin')
  setMessageshow1(true)



    //alert('plese enter the password');
  }
  else {
    setMessageshow(false)
  setMessageshow1(false)
  //navigation.navigate('Dashboard')
  call_loginapi();
}}

const call_loginapi = () => {

  const loginvalues = {
    mobile_no: mobileno,
    pin: pin,
  };

  fetch(Server_url + '/api/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginvalues),
  })
    .then(response => response.json())
    .then(data => {
      console.log('login rtn:', data);
      if (data[0].status_code == 2) {
        const logindata = [
          {
            mobileno: data[0].phone_no,
            pin: data[0].pin,
            name: data[0].full_name,
            shopname: data[0].shop_name,
            shopid: data[0].shop_id,
          }
        ];
        setUsername(data[0].full_name);
        setMobileno( data[0].phone_no);
        setPinno(data[0].pin)
        navigation.navigate('Dashboard')
        //navigation.navigate('Home_Screen');
      } else if (data[0].status_code == 0) {
        //setvalidationmsg('Mobile No Not already registered..');
        //setShowvalidationmsg(true);
        alert('Mobile No Not already registered')
      } else if (data[0].status_code == 1) {
        //setvalidationmsg('Mobile No & Pin not matched..');
        //setShowvalidationmsg(true);
        alert('Mobile no & Pin not matched')
     
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

  return (
    
  
    <View style={{ flex: 1 }}>
        
    <ImageBackground source={require('../assets/ss.jpeg')}
      style={{ width: '100%', height: 810,borderTopLeftRadius:10 }}>
<View>
  <Image source={require('../assets/bs6.jpeg')} 
    style={{width:200,height:190,marginTop:90,marginLeft:100,borderRadius:300}}>
  </Image>
    
    
     {/*<Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft:140,
        marginTop:150,color:'gold',borderRadius:10,
        borderBottomWidth: 1, borderTopWidth: 1,
        borderLeftWidth: 1, borderRightWidth: 1,
        borderColor:'gold',backgroundColor:'black',
  borderEndWidth: 1,width:120,height:50,padding:9
      }}>SIGNIN </Text>*/}
      </View>
        
        <View>
        
        <View style={{flexDirection:'row',marginLeft:10,  borderRadius: 100
          , backgroundColor: 'black', height: 40, margin: 13,
          borderBottomWidth: 1, borderTopWidth: 1,
          borderLeftWidth: 1, borderRightWidth: 1,
          borderEndWidth: 1, fontSize: 20,marginTop:70,borderColor:'gold', 
          //alignItems:'center',
          //justifyContent:'center',
          //paddingLeft: 150,
          //paddingLeft:30,
          width:'95%',height:50}}>
           {/*} <View style={{marginTop:4,marginLeft:30}}>
        
    <AntDesign name="mobile1" size={24} color="black" /></View>*/}
    <View style={{ marginTop: 6, marginLeft: 30, width: 30 }}>
              <FontAwesome5Icon name='mobile-alt' size={30} color='gold' />
            </View>
      <View style={{width:'55%',height:50}}>
        <TextInput placeholder="MOBILENO" placeholderTextColor={'grey'} color="gold"
         maxLength={10}keyboardType="numeric"
          onChangeText={value=>{setMessageshow(false)
          setmobileno(value)}}style={{marginLeft:70,fontSize:20,fontWeight:'bold'}}>

        </TextInput>
        </View>
      </View>
      </View>
      { msgshow ?
      (<View>
        <Text style={{marginLeft:150,color:'#C0392B',fontWeight:'bold'}}>{msgcontent}</Text>
      </View>):null

}
      
     
        
      <View style={{flexDirection:'row',marginLeft:10,
        borderRadius: 100,
        backgroundColor:'black', height: 40, margin: 15,
        borderBottomWidth: 1, borderTopWidth: 1,
        borderLeftWidth: 1, borderRightWidth: 1,
        borderEndWidth: 1, fontSize: 20,borderColor:'gold',
        //alignItems:'center',
        //justifyContent:'center',
        //paddingLeft: 30,
        width:'95%',height:50
      }}>
      { /*<View style={{marginTop:4,marginLeft:30}}>
        <FontAwesome5 name="lock" size={24} color="black" />
    </View>*/}
     <View style={{ marginTop: 6, marginLeft: 30, width: 30 }}>
              <FontAwesomeIcon name='expeditedssl' size={30} color='gold' />
            </View>
       <View style={{width:'55%',height:50}}>
      <TextInput placeholder="PIN" placeholderTextColor={"grey"} color='gold' maxLength={4} keyboardType="numeric"
      secureTextEntry={eyesee}
       onChangeText={value=>setpin(value)} 
        style={{marginLeft:70,fontSize:20,fontWeight:'bold',}}>

      </TextInput>
      </View>
      <View style={{marginTop:4,marginLeft:70}}>
          <TouchableOpacity onPress={()=> seteyesee(!eyesee)}>
            {eyesee ?
            
            <FontAwesomeIcon name='eye-slash' size={28} color='gold' /> : 
            <FontAwesomeIcon name='eye' size={28} color='gold' />
            
      }
            
        </TouchableOpacity>
</View>
      </View>
      { msgshow1 ?
      (<View>
        <Text style={{marginLeft:150,color:'#C0392B',fontWeight:'bold'}}>{msgcontent1}</Text>
      </View>):null

}
      
       
       <View style={{ marginLeft: 120, marginRight: 120,marginTop:10,
        borderBottomWidth: 1, borderTopWidth: 1,
            borderLeftWidth: 1, borderRightWidth: 1,
            borderEndWidth: 1,borderRadius:10,borderColor:'gold',width:'45%',height:'5%' }}>
        <TouchableOpacity onPress={Signin_validation  }>
        <Text style={{color:'white',marginLeft:50,marginTop:10,fontSize:20,fontWeight:'bold'}}>SIGNIN</Text> 
        </TouchableOpacity>
        </View>
        

<View>
  <TouchableOpacity onPress={() => { navigation.navigate(Forgetpin) }}>
  <Text style={{color:'white',marginLeft:160,fontSize:20,fontWeight:'600',marginTop:100}}>
    Forget pin</Text>
    </TouchableOpacity></View>       
       
        <View style={{marginLeft:50,marginTop:80,flexDirection:'row',
        alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:20,color:'white'}}>not register?</Text>
          <TouchableOpacity  onPress={() => { navigation.navigate('Signup') }}>
          <View style={{flexDirection:'row'}}>
            {/*<View style={{marginLeft:25,marginTop:5}}>
          <FontAwesome name="sign-in" size={30} color="white" />
</View><View style={{ marginTop: 6, marginLeft: 20, width: 30 }}>
              <EntypoIcon name='log-out' size={28} color='white' />
       </View>*/}
          
            <Text style={{fontSize:24,color:'white',
            fontWeight:'bold',marginLeft:10}}>signup</Text>
            </View>
          </TouchableOpacity>
          
        </View>
        </ImageBackground>
        
  </View>
  
  

 
 )
}

export default Signin

const styles = StyleSheet.create({})
