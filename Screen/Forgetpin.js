import { StyleSheet, Text, View,TouchableOpacity,Image, TextInput } from 'react-native'
import React, { useState }from 'react'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

const Forgetpin = ({ navigation }) => {
  const [mobileno,setmobileno]=useState('');
  const [msgshow,setMessageshow]= useState(false);
  const [msgcontent,setMsgcontent]= useState('');
  const Otp_validation=()=>{
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
  else {
    setMessageshow(false)
  
  navigation.navigate('Otp')
  
}}
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
    <View style={{
      width: '90%', height: 45,// backgroundColor: 'black', 
      marginTop: 29, marginLeft: 20,
       borderColor:'gold'
       ,borderBottomWidth: 1,
       // borderTopWidth: 5,
      //borderLeftWidth: 3, borderRightWidth: 3,
      //borderEndWidth: 3,
     }} ><View style={{ flexDirection: 'row',marginLeft:10 }}>

     <TouchableOpacity onPress={() => { navigation.navigate('Signin') }}>
       <FontAwesomeIcon name="arrow-circle-o-left" size={34} color="gold" />
     </TouchableOpacity>
      <Text style={{color:'white',fontSize:29,fontWeight:'bold',marginLeft:80}}>FORGET PIN</Text>
    </View>
    </View>
    {/*<Image source={require('../assets/f.gif')}
    style={{width:'80%',height:'40%',marginLeft:50,marginTop:10}}></Image>*/}
    <View style={{marginTop:100,marginLeft:100}}>
      <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginLeft:20}}>FORGOT YOUR PIN?</Text>
      </View>
      <View style={{marginLeft:10}}>
        <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginLeft:20}}>Enter yuor mobile number get your OTP</Text>
    
    
    </View>
    
    <View>
        
        <View style={{flexDirection:'row',  borderRadius: 10
          , height: 40, margin: 13,
          borderBottomWidth: 1, borderTopWidth: 1,
          borderLeftWidth: 1, borderRightWidth: 1,
          borderEndWidth: 1, fontSize: 20,marginTop:70,borderColor:'gold', 
          //alignItems:'center',
          //justifyContent:'center',
          //paddingLeft: 150,
          //paddingLeft:30,
          width:'85%',height:50,marginLeft:40}}>
           {/*} <View style={{marginTop:4,marginLeft:30}}>
        
    <AntDesign name="mobile1" size={24} color="black" /></View>*/}
    <View style={{ marginTop: 6, marginLeft: 30, width: 30 }}>
              <FontAwesome5Icon name='mobile-alt' size={30} color='gold' />
            </View>
      <View style={{width:'85%',height:50}}>
        <TextInput placeholder="ENTERMOBILENO" placeholderTextColor={'grey'} color="gold"
         maxLength={10}keyboardType="numeric"
          onChangeText={value=>{setMessageshow(false)
          setmobileno(value)}}style={{marginLeft:30,fontSize:20,fontWeight:'bold'}}>

        </TextInput>
        </View>
      </View>
    
   </View>
   { msgshow ?
      (<View>
        <Text style={{marginLeft:150,color:'#C0392B',fontWeight:'bold'}}>{msgcontent}</Text>
      </View>):null

}
   <View style={{borderBottomWidth: 1, borderTopWidth: 1,
          borderLeftWidth: 1, borderRightWidth: 1,
          borderEndWidth: 1, fontSize: 20,
          marginTop:30,borderColor:'gold',width:80,height:40,borderRadius:10,marginLeft:150,}}>
   <TouchableOpacity  onPress={Otp_validation}>
          <View style={{flexDirection:'row'}}>
            {/*<View style={{marginLeft:25,marginTop:5}}>
          <FontAwesome name="sign-in" size={30} color="white" />
</View><View style={{ marginTop: 6, marginLeft: 20, width: 30 }}>
              <EntypoIcon name='log-out' size={28} color='white' />
          </View>*/}
          
            <Text style={{fontSize:24,color:'white',
            fontWeight:'bold',marginLeft:4,}}>SEND</Text>
            </View>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default Forgetpin

const styles = StyleSheet.create({})