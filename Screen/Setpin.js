import { StyleSheet, Text, View ,TouchableOpacity,TextInput} from 'react-native'
import React,{useState} from 'react'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'


const Setpin = ({ navigation }) => {
  const [newpin,setnewpin]=useState('');
  const [repin,setrepin]=useState('');
  const [msgshow,setMessageshow]= useState(false);
  const [msgcontent,setMsgcontent]= useState(''); 
  const [msgshow1,setMessageshow1]= useState(false);
  const [msgcontent1,setMsgcontent1]= useState('');
  const Signin_validation=()=>{
    if (newpin === ''){
      setMsgcontent('plese enter pinno')
      setMessageshow(true)
     // setMessageshow(false)
      
      //alert('please enter the name');
    } 
    else if (newpin.length !== 4){
      setMsgcontent('plese enter 4 digit pinno')
      setMessageshow(true)
      
    
  
      //alert('please enter the name');
    }
    else if (repin === ''){
      setMsgcontent1('plese enter repinno')
      setMessageshow(false)
      setMessageshow1(true)
      
    
  
      //alert('please enter the name');
    }
    else if (repin.length !== 4){
      setMsgcontent('plese enter 4 digit repinno')
      setMessageshow1(true)
      
    
  
      //alert('please enter the name');
    }
    else {
      setMessageshow(false)

      navigation.navigate('Signin')
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
     }} >
        <View style={{ flexDirection: 'row',marginLeft:10 }}>

<TouchableOpacity onPress={() => { navigation.navigate('Otp') }}>
  <FontAwesomeIcon name="arrow-circle-o-left" size={34} color="gold"
  style={{marginTop:12}} />
</TouchableOpacity>
<Text style={{color:'white',fontSize:25,
fontWeight:'bold',marginLeft:100,marginTop:13}}>SETPIN</Text>
     
     </View>
     </View>
     <View>
        <Text style={{color:'white',marginLeft:100,marginTop:20,fontSize:20,fontWeight:'bold'}}>ENTER YOUR NEW PIN</Text>
     </View>
     <View>
    <Text style={{color:'white',marginLeft:20,marginTop:50,fontSize:24,fontWeight:'bold'}}>NEWPIN:</Text>
    <View style={{width:'55%',height:50,borderBottomWidth: 1, borderTopWidth: 1,
        borderLeftWidth: 1, borderRightWidth: 1,borderRadius:10,
        borderColor:'gold',
  borderEndWidth: 1,marginLeft:50,marginTop:10}}>
      <TextInput placeholder="****" placeholderTextColor={"grey"} color='#F7EF8A'
       maxLength={4}  keyboardType={'numeric'}
       onChangeText={value=>
       {setMessageshow(false)
       setnewpin(value)}} 
     // secureTextEntry={eyesee}
       //onChangeText={value=>setpin(value)} 
        style={{marginLeft:20,fontSize:20,fontWeight:'bold'}}>

      </TextInput>
      </View>
      { msgshow ?
      (<View>
        <Text style={{marginLeft:150,color:'#C0392B',fontWeight:'bold',marginTop:30}}>{msgcontent}</Text>
      </View>):null

}
      <View style={{marginTop:4,marginLeft:70}}>
         </View>
         </View>
         <View>
    <Text style={{color:'white',marginLeft:20,marginTop:50,fontSize:24,fontWeight:'bold'}}>REPIN:</Text>
    <View style={{width:'55%',height:50,borderBottomWidth: 1, borderTopWidth: 1,
        borderLeftWidth: 1, borderRightWidth: 1,borderRadius:10,
        borderColor:'gold',
  borderEndWidth: 1,marginLeft:50,marginTop:10}}>
      <TextInput placeholder="****" placeholderTextColor={"grey"} color='#F7EF8A'
       maxLength={4} keyboardType="numeric" 
       onChangeText={value=>
       {setMessageshow(false)
       setrepin(value)}} 
     // secureTextEntry={eyesee}
       //onChangeText={value=>setpin(value)} 
        style={{marginLeft:20,fontSize:20,fontWeight:'bold'}}>

      </TextInput>
      </View>
      { msgshow1 ?
      (<View>
        <Text style={{marginLeft:150,color:'#C0392B',fontWeight:'bold',marginTop:30}}>{msgcontent1}</Text>
      </View>):null

}
      <View style={{marginTop:4,marginLeft:70}}>
         </View>
         </View>
         <View style={{borderBottomWidth: 1, borderTopWidth: 1,
          borderLeftWidth: 1, borderRightWidth: 1,
          borderEndWidth: 1, fontSize: 20,
          marginTop:80,borderColor:'gold',width:150,height:50,borderRadius:10,marginLeft:130}}>
   <TouchableOpacity  onPress={Signin_validation}>
          <View style={{flexDirection:'row'}}>
            {/*<View style={{marginLeft:25,marginTop:5}}>
          <FontAwesome name="sign-in" size={30} color="white" />
</View><View style={{ marginTop: 6, marginLeft: 20, width: 30 }}>
              <EntypoIcon name='log-out' size={28} color='white' />
          </View>*/}
          
            <Text style={{fontSize:24,color:'white',
            fontWeight:'bold',marginLeft:20,marginTop:10}}>SUBMIT</Text>
            </View>
          </TouchableOpacity>
      </View>

     </View>
     
  )
}

export default Setpin

const styles = StyleSheet.create({})