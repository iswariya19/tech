import { StyleSheet, Text, View,TouchableOpacity ,Image,ImageBackground,Alert} from 'react-native'
import React, { useState } from 'react'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons'
import { TextInput } from 'react-native-gesture-handler'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { Server_url } from './Service/Api_Constants'



const Changepin =  ({ route,navigation }) => {
  const{sendmobileno}=route.params;
  
  const [curentpin,setcurentpin]=useState('');
  const [newpin,setnewpin]=useState('');
  const [msgshow,setMessageshow]= useState(false);
  const [msgcontent,setMsgcontent]= useState('');
  const [msgshow1,setMessageshow1]= useState(false);
  const [msgcontent1,setMsgcontent1]= useState('');
  const[eyesee,seteyesee]=useState(true);
  
  const send_newpin = () => {

    const param = {
        mobile_no : sendmobileno,
        pin : curentpin,
        newpin: newpin

    };

    fetch(Server_url + '/api/changepin/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(param),
    })
        .then(response => response.json())
        .then(data => {
            console.log(' data:', data);
            //setProducts(data)
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

  const submit=()=>{
    if (curentpin === ''){
      setMsgcontent('plese enter curentpin')
      setMessageshow(true)
      //alert('please enter the name');
    }
    else if (curentpin.length !== 4){
      setMessageshow(false)
      setMsgcontent('plese enter valid pin')
      setMessageshow(true)
    
    
    
        //alert('plese enter the password');
      }
      else if(newpin === ''){
        setMessageshow(false)
        setMsgcontent1('plese enter newpin')
        setMessageshow1(true)
        //alert('please enter the name');
      }
      else if (newpin.length !== 4){
        setMessageshow(false)
        setMessageshow1(false)
        setMsgcontent1('plese enter valid pin')
        setMessageshow1(true)
      
      
      
          //alert('plese enter the password');
        }
      else {
        setMessageshow(false)
      setMessageshow1(false)
      navigation.navigate('submit')
      
    }}
  
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
      <ImageBackground source={require('../assets/pc10.jpeg')}
        style={{ width:410, height: 800,}}>
      
      <View style={{   width:'85%',height:45,backgroundColor:'white',marginTop:29,marginLeft:30,borderRadius:10,borderBottomWidth: 3, borderTopWidth: 5,
        borderLeftWidth: 3, borderRightWidth: 3,
        //borderColor:'grey',
  borderEndWidth: 3}}>
          <View style={{flexDirection:'row',marginLeft:10}}>
          
        <TouchableOpacity  onPress={() => { navigation.navigate('Dashboard') }}>
        <FontAwesomeIcon name ="arrow-circle-o-left" size={34} color="black" />
        </TouchableOpacity>
        
      <Text style={{fontSize:27,fontWeight:'bold',
      color:'black',marginLeft:50}}>CHANGEPIN</Text>
    </View>
    </View>
    <View style={{ marginTop: 70,marginLeft:170 }}>
      <MaterialCommunityIconsIcon name='message-text-lock' size={100} color='white'/>
    </View>
   {/* <View style={{flex:2,backgroundColor:'#ABB2B9',
    borderTopEndRadius:40,borderTopStartRadius:40,}}>

  </View>
  <View style={{ marginTop: 20 }}>
          <Image source={require('../assets/pc.jpeg')}
            style={{ width: '45%', height: '45%',  marginTop: 10 }}></Image>
  </View>*/}
  <View style={{ marginTop: 20,flexDirection:'row'}}>
<Text  style={{fontSize:27,fontWeight:'bold',
      color:'white',marginLeft:60}}>CURRENTPIN</Text>
      
      <Text  style={{fontSize:26,fontWeight:'bold',
      color:'white',marginLeft:20}}>:</Text>
     
  </View> 
  <View style={{flexDirection:'row',marginLeft:60,
        borderRadius: 100,
        backgroundColor:'white',
         margin: 15,
        borderBottomWidth: 5, borderTopWidth: 2,
        borderLeftWidth: 5, borderRightWidth: 5,
        borderEndWidth: 2, fontSize: 20,
        //alignItems:'center',
        //justifyContent:'center',
       // paddingLeft: 30,
        width:'74%',height:50,borderColor:'black'
      }}>
      { /*<View style={{marginTop:4,marginLeft:30}}>
        <FontAwesome5 name="lock" size={24} color="black" />
    </View>*/}
     <View style={{ marginTop: 6, marginLeft: 30, width: 30 }}>
              <FontAwesomeIcon name='expeditedssl' size={30} color='black' />
            </View>
       <View style={{width:'55%',height:50}}>
      <TextInput placeholder="CURRENTPIN"maxLength={4} keyboardType="numeric"
      //secureTextEntry={eyesee}
       onChangeText={value=>setcurentpin(value)} 
        style={{marginLeft:20,fontSize:20,fontWeight:'bold',}}>
          </TextInput>
          </View>
          </View>
          { msgshow ?
      (<View>
        <Text style={{marginLeft:150,color:'#C0392B',fontWeight:'bold'}}>{msgcontent}</Text>
      </View>):null

}
      
          <View style={{ marginTop: 20,flexDirection:'row'}}>
<Text  style={{fontSize:27,fontWeight:'bold',
      color:'white',marginLeft:60}}>NEWPIN</Text>
      
      <Text  style={{fontSize:27,fontWeight:'bold',
      color:'white',marginLeft:20}}>:</Text>
     
  </View> 
          <View style={{flexDirection:'row',marginLeft:60,
        borderRadius: 100,
        backgroundColor:'white',
        // height: 40,
        margin: 15,
        borderBottomWidth: 5, borderTopWidth: 2,
        borderLeftWidth: 5, borderRightWidth: 5,
        borderEndWidth: 2, fontSize: 20,borderColor:'black',
        //alignItems:'center',
        //justifyContent:'center',
        //paddingLeft: 30,
        width:'74%',height:50
      }}>
      { /*<View style={{marginTop:4,marginLeft:30}}>
        <FontAwesome5 name="lock" size={24} color="black" />
    </View>*/}
     <View style={{ marginTop: 6, marginLeft: 30, width: 30 }}>
              <FontAwesomeIcon name='expeditedssl' size={30} color='black' />
            </View>
       <View style={{width:'55%',height:50}}>
      <TextInput placeholder="NEWPIN"maxLength={4} keyboardType="numeric"
      //secureTextEntry={eyesee}
       onChangeText={value=>setnewpin(value)} 
        style={{marginLeft:20,fontSize:20,fontWeight:'bold',}}>

</TextInput>
</View>
</View>
{ msgshow1 ?
      (<View>
        <Text style={{marginLeft:150,color:'#C0392B',fontWeight:'bold'}}>{msgcontent}</Text>
      </View>):null

}
      
<View style={{flexDirection:'row'}}>
<View style={{backgroundColor:'white',
        marginLeft: 80, marginTop: 40,
         borderRadius: 10, borderBottomWidth: 3, borderTopWidth: 3,
        borderLeftWidth: 3, borderRightWidth: 0.9,
        borderEndWidth: 3, width: '30%', height: 50, borderColor: "black"
      }}>
        
        <TouchableOpacity onPress={() => { Alert.alert('delete') }}> 
        
        <View style={{marginTop:10,flexDirection:'row'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft:8,color:'black'}}>CANCEL</Text>
          <View style={{}}>
        <MaterialIconsIcon name="cancel" size={29} color="black" />
    </View>
         
        </View>
        
        
        </TouchableOpacity>
        
      </View>
      <View style={{
        marginLeft: 20, marginTop: 40,
         borderRadius: 10, borderBottomWidth: 3, borderTopWidth: 3,
        borderLeftWidth: 3, borderRightWidth: 0.9,
        borderEndWidth: 3, width: '30%', height: 50, borderColor: "black",backgroundColor:'white',
      }}>
        
        <TouchableOpacity onPress={send_newpin}> 
        
        
        <View style={{marginTop:10,flexDirection:'row'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft:8,color:'black'}}>SUBMIT</Text>
          <View style={{}}>
        <EntypoIcon name="check" size={29} color="black" />
    </View>
         
        </View>
        
        
        </TouchableOpacity>
        </View>
        
      </View>


</ImageBackground>
    </View>
  )
}

export default Changepin

const styles = StyleSheet.create({})