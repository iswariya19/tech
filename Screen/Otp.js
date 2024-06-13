import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React,{useState} from 'react'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'


const Otp = ({ navigation }) => {
  const [otp,setotp]=useState('');
  const [otp1,setotp1]=useState('');
  const [otp2,setotp2]=useState('');
  const [otp3,setotp3]=useState('');
  const [msgshow,setMessageshow]= useState(false);
  const [msgcontent,setMsgcontent]= useState(''); 
  
  const Setpin_validation=()=>{
    if (otp === ''){
      setMsgcontent('plese enter otpno')
      setMessageshow(true)
     // setMessageshow(false)
      
      //alert('please enter the name');
    }
    else if (otp1=== ''){
      setMsgcontent('plese enter otpno')
      setMessageshow(true)
     
    
  
      //alert('please enter the name');
    } 
    else if (otp2 === ''){
      setMsgcontent('plese enter otp')
     
      setMessageshow(true)
      
    
  
      //alert('please enter the name');
    } 
    else if (otp3 === ''){
      setMsgcontent('plese enter otp')
      
      setMessageshow(true)
      
    
  
      //alert('please enter the name');
    }
    else {
      setMessageshow(false)

      navigation.navigate('Setpin')


} 
  }
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
     }} >
        <View style={{ flexDirection: 'row',marginLeft:10 }}>

<TouchableOpacity onPress={() => { navigation.navigate('Forgetpin') }}>
  <FontAwesomeIcon name="arrow-circle-o-left" size={34} color="gold"
  style={{marginTop:12}} />
</TouchableOpacity>
<Text style={{color:'white',fontSize:25,
fontWeight:'bold',marginLeft:50,marginTop:13}}>VERIFICATION CODE</Text>
     
     </View>
     </View>
     <View>
        <Text style={{color:'white',marginLeft:20,marginTop:30,fontSize:20,fontWeight:'bold'}}>ENTER YOUR OTP :</Text>
     </View>
     <View style={{flexDirection:'row'}}>
     <View style={{width:50,height:50,marginLeft:30,marginTop:50,
     borderBottomWidth: 2, borderTopWidth: 1,
          borderLeftWidth: 2, borderRightWidth: 2,
          borderEndWidth: 2,borderColor:'gold',borderRadius:10,shadowColor:'gold',elevation:20}} >
        <TextInput placeholder='0'placeholderTextColor={'grey'} color='gold'
          maxLength={1} keyboardType={'numeric'}
          onChangeText={value=>
          {setMessageshow(false)
          setotp(value)}} 
          style={{fontSize:28,fontWeight:'bold',
          marginLeft:10,padding:2,shadowColor:'gold',elevation:20}}></TextInput>
    

     </View>
    
     <View style={{width:50,height:50,marginLeft:50,marginTop:50,
     borderBottomWidth: 2, borderTopWidth: 1,
          borderLeftWidth: 2, borderRightWidth: 2,
          borderEndWidth: 2,borderColor:'gold',borderRadius:10,shadowColor:'gold',elevation:20}} >
        <TextInput placeholder='0'placeholderTextColor={'grey'} color='gold'
          maxLength={1} keyboardType={'numeric'} 
          onChangeText={value=>
            {setMessageshow(false)
            setotp1(value)}} 
          style={{fontSize:28,fontWeight:'bold',
          marginLeft:10,padding:2,shadowColor:'gold',elevation:20}}></TextInput>
    

     </View>
     <View style={{width:50,height:50,marginLeft:50,marginTop:50,
     borderBottomWidth: 2, borderTopWidth: 1,
          borderLeftWidth: 2, borderRightWidth: 2,
          borderEndWidth: 2,borderColor:'gold',borderRadius:10,shadowColor:'gold',elevation:20}} >
        <TextInput placeholder='0'placeholderTextColor={'grey'} color='gold'
        onChangeText={value=>
          {setMessageshow(false)
          setotp2(value)}} 
          maxLength={1} keyboardType={'numeric'} style={{fontSize:28,fontWeight:'bold',
          marginLeft:10,padding:2,shadowColor:'gold',elevation:20}}></TextInput>
    

     </View>
     <View style={{width:50,height:50,marginLeft:50,marginTop:50,
     borderBottomWidth: 2, borderTopWidth: 1,
          borderLeftWidth: 2, borderRightWidth: 2,
          borderEndWidth: 2,borderColor:'gold',borderRadius:10,shadowColor:'gold',elevation:20}} >
        <TextInput placeholder='0'placeholderTextColor={'grey'} color='gold'
          maxLength={1} keyboardType={'numeric'}
          onChangeText={value=>
            {setMessageshow(false)
            setotp3(value)}} 
          style={{fontSize:28,fontWeight:'bold',
          marginLeft:10,padding:2,shadowColor:'gold',elevation:20}} ></TextInput>
          

     </View>
     </View>
     { msgshow ?
      (<View>
        <Text style={{marginLeft:150,color:'#C0392B',fontWeight:'bold',marginTop:30}}>{msgcontent}</Text>
      </View>):null

}
     
     
     <View style={{borderBottomWidth: 1, borderTopWidth: 1,
          borderLeftWidth: 1, borderRightWidth: 1,
          borderEndWidth: 1, fontSize: 20,
          marginTop:80,borderColor:'gold',width:150,height:50,borderRadius:10,marginLeft:130,shadowColor:'gold',elevation:20}}>
   <TouchableOpacity  onPress={Setpin_validation}>
          <View style={{flexDirection:'row'}}>
            {/*<View style={{marginLeft:25,marginTop:5}}>
          <FontAwesome name="sign-in" size={30} color="white" />
</View><View style={{ marginTop: 6, marginLeft: 20, width: 30 }}>
              <EntypoIcon name='log-out' size={28} color='white' />
          </View>*/}
          
            <Text style={{fontSize:24,color:'white',
            fontWeight:'bold',marginLeft:20,marginTop:10,shadowColor:'red',elevation:20}}>CONTINUE</Text>
            </View>
          </TouchableOpacity>
      </View>

     </View>

  )
}

export default Otp

const styles = StyleSheet.create({})