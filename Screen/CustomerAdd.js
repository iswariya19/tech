import { StyleSheet, Text, View ,ImageBackground,TouchableOpacity, TextInput,ScrollView} from 'react-native'
import React, { useState } from 'react'
//import { Ionicons } from '@expo/vector-icons';
//import { MaterialIcons } from '@expo/vector-icons';
//import { Octicons } from '@expo/vector-icons';
//import { AntDesign } from '@expo/vector-icons';
//import { FontAwesome5 } from '@expo/vector-icons';
//import { Entypo } from '@expo/vector-icons';
import FontAwesomeIcon  from 'react-native-vector-icons/FontAwesome'
import MaterialIconsIconsIcon from 'react-native-vector-icons/MaterialIcons'
import OcticonsIcon from 'react-native-vector-icons/Octicons'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import { Server_url } from './Service/Api_Constants'


const CustomerAdd = ({navigation}) => { 
  const add_customer= () => {
    alert('check')
    //console.log(companyname);
    console.log(name);
    console.log(mobileno);
    console.log(address);
    const param = {
        //Company_name: "POS",
        //category_code: 0
        cust_name :name,
  phone_no : mobileno,
  Address :address
  
    };
    fetch(Server_url + '/api/pos/Add/Customer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(param),
    })
        .then(response => response.json())
        .then(data => {
            console.log('added  customer:', data);
            //setProducts(data)
            //setflatlistdata(data)
        })
        .catch(error => {
            console.error('Error:', error);
        });
};






  const [name,setname]=useState('');
  const [address,setaddress]=useState('');
  
 const [mobileno,setmobileno]=useState('');
  const [msgshow,setMessageshow]= useState(false);
  const [msgcontent,setMsgcontent]= useState('');
  const [msgshow1,setMessageshow1]= useState(false);
  const [msgcontent1,setMsgcontent1]= useState('');
 const [msgshow2,setMessageshow2]= useState(false);
  const [msgcontent2,setMsgcontent2]= useState('');
  const alert =()=>{
    if (name === ''){
      setMsgcontent('plese enter name')
      setMessageshow(true)
      //alert('please enter the name');
    }
  
  else if (address === ''){
    //alert('plese enter the mobileno');
    setMessageshow(false)
    setMsgcontent1('plese enter Address')
      setMessageshow1(true)
    

  }
  
  
else if (mobileno.length !== 10){
setMsgcontent2('plese enter validmobileno')
setMessageshow2(true)

//alert('please enter the name');
}
else {navigation.navigate('Customerlist')
setMessageshow(false)
setMessageshow1(false)
setMessageshow2(false)


}
}
var today_date = new Date().getDate();
var month = new Date().getMonth()+1;
var year = new Date().getFullYear();
var date = year + "/" + month + "/" + today_date
var hours = new Date().getHours();
var min = new Date().getMinutes();
var sec = new Date().getSeconds();
var today_time=hours+":"+min+":"+sec
    
  
  return (

    <View style={{ flex: 1,backgroundColor:'white'}}>
     <View style={{backgroundColor:"grey",
         color: 'black', marginLeft: 20, borderRadius: 10,
          borderBottomWidth: 2, borderTopWidth: 5,
        borderLeftWidth: 5, borderRightWidth: 5,
        borderEndWidth: 2,marginRight:20,marginTop:40
      }}>
        
        <View style={{flexDirection:'row',width:'95%',height:50}}>
          
         <View style={{marginTop:10,marginLeft:30}}>
        <TouchableOpacity  onPress={() => { navigation.navigate('Customerlist') }}>
        <FontAwesomeIcon name="arrow-circle-o-left" size={34} color="black" />
        </TouchableOpacity>
    </View>
        
         
          
      <Text style={{fontSize:24,fontWeight:'bold',marginLeft:50,
      marginTop:10,color:'black'}}>
       CUSTOMERADD</Text>
       </View>
       </View>
       
       <View style={{flexDirection:'row',marginTop:20,height:30,}}>
        
        <Text style={{color:'black',fontSize:25,marginLeft:20,fontWeight:'bold'}}>NAME </Text>
        <Text style={{color:'black',fontSize:25,marginLeft:10,fontWeight:'bold'}}>:</Text>
        </View>
        <View style={{marginLeft:30, 
          backgroundColor: 'white', height: 50, margin: 13,
          borderBottomWidth: 0.7, fontSize: 20,marginTop:20, 
          //alignItems:'center',
          //justifyContent:'center',
          //paddingLeft: 150,
          //paddingLeft:30,
          width:'90%',}}>
            <View style={{flexDirection:'row'}}>
        <TextInput 
         placeholder="ENTER YOUR NAME"maxLength={25}
         onChangeText={value=>{
          setMessageshow(false)
          setname(value)
        }} style={{fontSize:20,
         fontWeight:'bold',marginLeft:80,
         width:'65%'}}>

        </TextInput>
        
        <View >
        <MaterialIconsIconsIcon name="drive-file-rename-outline" size={34} color="black" />
        </View>
         </View>
         </View>
        { msgshow ?
      (<View>
        <Text style={{marginLeft:150,color:'#C0392B',fontWeight:'bold'}}>{msgcontent}</Text>
      </View>):null

}
      
     
        
        < View style={{flexDirection:'row'}}>
        <View style={{marginTop:25,height:30,marginLeft:15}}>
          <Text style={{color:'black',fontSize:25,fontWeight:'bold'}}>ADDRESS</Text>
          </View>
          <View style={{marginTop:25,marginLeft:15,height:30,}}>
          <Text style={{color:'black',fontSize:25,fontWeight:'bold'}}>:</Text>
        </View>
        </View> 
        <View style={{marginLeft:10
          , backgroundColor: 'white', 
          borderWidth:1, fontSize: 20,
          marginTop:20, height:160,
          //alignItems:'center',
          //justifyContent:'center',
          //paddingLeft: 150,
          //paddingLeft:30,
          width:'90%'}}>
            <View style={{flexDirection:'row'}}>
            <TextInput 
         placeholder="ENTER ADDRESS" 
         onChangeText={value=>{
          setMessageshow(false)
          setaddress(value)
        }} numberOfLines={5}  multiline={true} style={{fontSize:20,
         fontWeight:'bold',marginLeft:10,
         width:'70%',
         height:'90%',backgroundColor:'white'}}>

        </TextInput>
        </View>
          </View>
          { msgshow1 ?
      (<View>
        <Text style={{marginLeft:150,color:'#C0392B',fontWeight:'bold'}}>{msgcontent1}</Text>
      </View>):null

}

< View style={{flexDirection:'row'}}>
        <View style={{marginTop:15,marginLeft:20,height:30,}}>
          <Text style={{color:'black',fontSize:25,fontWeight:'bold'}}>MOBILENO</Text>
          </View>
          <View style={{marginTop:15,marginLeft:10,height:30,}}>
          <Text style={{color:'black',fontSize:25,fontWeight:'bold'}}>:</Text>
        </View>
        </View> 
        <View style={{marginLeft:30
          , backgroundColor: 'white', height: 50, margin: 10,
          borderBottomWidth: 0.9, fontSize: 20,marginTop:10, 
          //alignItems:'center',
          //justifyContent:'center',
          //paddingLeft: 150,
          //paddingLeft:30,
          width:'90%'}}>
            <View style={{flexDirection:'row'}}>
            <TextInput 
         placeholder="MOBILE NO" maxLength={10} keyboardType='numeric'
         onChangeText={value=>{
          setMessageshow(false)
          setmobileno(value)
        }} style={{fontSize:20,
         fontWeight:'bold',marginLeft:70,
         width:'65%',}}>

        </TextInput>
        <View style={{marginLeft:10,marginTop:8}}>
        <AntDesignIcon name="mobile1" size={24} color="black" />
         </View>
</View>
          </View>
          { msgshow2 ?
      (<View>
        <Text style={{marginLeft:150,color:'#C0392B',fontWeight:'bold'}}>{msgcontent2}</Text>
      </View>):null

}

      
          <View style={{flexDirection:'row'}}>
          <View style={{backgroundColor:"white",
         color: 'black', marginLeft: 20, borderRadius: 10,
          borderBottomWidth: 2, borderTopWidth: 5,
        borderLeftWidth: 5, borderRightWidth: 5,
        borderEndWidth: 2,marginRight:20,marginTop:20,width:'38%',height:40
      }}>
        <View style={{flexDirection:'row'}}>
            <TextInput 
         placeholder="DATE" defaultValue={date}  style={{fontSize:20,
         fontWeight:'bold',marginLeft:10,
         width:'70%',height:40}}>

        </TextInput>
        <View style={{marginTop:5}}>
        <FontAwesome5Icon name="calendar-alt" size={24} color="black" />
         </View>
</View>
 </View>
 <View style={{backgroundColor:"white",
         color: 'black', marginLeft: 20, borderRadius: 10,
          borderBottomWidth: 5, borderTopWidth:2,
        borderLeftWidth:2, borderRightWidth: 5,
        borderEndWidth: 5,marginRight:20,marginTop:20,width:'38%',height:40
      }}>
        <View style={{flexDirection:'row'}}>
            <TextInput 
         placeholder="TIME" defaultValue={today_time} style={{fontSize:20,
         fontWeight:'bold',marginLeft:10,
         width:'65%',height:40}}>

        </TextInput>
        <View style={{marginTop:5}}>
        <EntypoIcon name="clock" size={24} color="black" />
         </View>
</View>
 </View>
 </View>
 
 <View style={{
          marginLeft: 130, borderRadius: 20,backgroundColor:'green',
          borderBottomWidth: 2, borderTopWidth: 5,
        borderLeftWidth: 5, borderRightWidth: 5,
        borderEndWidth: 2,marginRight:20,marginTop:30,width:'38%',height:40
      }}>
       <TouchableOpacity onPress={add_customer}>
          
          <Text style={{fontWeight:'bold',marginLeft:30,
          marginTop:5,fontSize:20,color:'white',}}>SUBMIT</Text>
    </TouchableOpacity>
          

      </View>
        </View>
 
          
        
        
       

      
      

  )
}

export default CustomerAdd

const styles = StyleSheet.create({})