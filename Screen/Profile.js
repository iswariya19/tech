import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState ,useContext} from 'react'
//import { AntDesign } from '@expo/vector-icons';

//import { MaterialIcons } from '@expo/vector-icons';
//import { Ionicons } from '@expo/vector-icons';
//import { AntDesign } from '@expo/vector-icons';
//import { MaterialIcons } from '@expo/vector-icons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import Mycontext from './Mycontext'


const Profile = ({ navigation }) => {
  const {username,setUsername}=useContext(Mycontext)
  const {Mobileno,setMobileno}=useContext(Mycontext)
  const{Pinno,setPinno}=useContext(Mycontext)
  
  const [mobileno,setmobileno]=useState(9944111478)
  return (
    <View style={{ flex: 1,backgroundColor:'white' }}>



<View style={{ flex: 1}}>
        <View style={{backgroundColor:"white",
        marginTop: 20, color: 'black', marginLeft: 20, borderRadius: 10, 
        borderBottomWidth: 2, borderTopWidth: 5,
        borderLeftWidth: 5, borderRightWidth: 5,
        borderEndWidth: 2,marginRight:20,height:50,width:'90%',flexDirection:'row'
      }}>
        
        <View style={{flexDirection:'row',marginTop:5,marginLeft:10}}>
        <TouchableOpacity  onPress={() => { navigation.goBack() }}>
        <FontAwesomeIcon name="arrow-circle-o-left" size={34} color="black" />
        </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row',marginTop:5,marginLeft:70}}>
        <AntDesignIcon name="profile" size={34} color="black" />
    </View>
    
        <Text style={{ color: 'black', fontSize: 34, fontWeight: 'bold', 
        marginLeft: 10, }}>
            PROFILE</Text>
            
            

      </View>
      <View >
        <View style={{ marginTop: 20 }}>
          <Image source={require('../assets/pp2.jpeg')}
            style={{ width: 130, height: 130, marginLeft: 140, marginTop: 10 }}></Image>
        </View>
      </View>


      <View style={{ flexDirection: 'row', marginTop: 30,
       marginLeft: 40, marginRight: 40, height: 60, width: '90%' }}>


        <View style={{
          
marginTop:30,
          //alignItems: 'center',
          //justifyContent: 'center', 
          borderBottomWidth: 0.5,
          //paddingLeft: 150,
          width: '90%',flexDirection:'row'


        }}>
         
            <MaterialIconsIcon name="drive-file-rename-outline" size={24} color="black" />
      
            <Text style={{
              fontSize: 20, fontWeight: "bold", color: 'grey',
              marginLeft: 70
            }}>{username}

            </Text>
          
        </View>






      </View>
      <View style={{ flexDirection: 'row', marginLeft: 40, marginRight: 40, height: 80, width: '95%' }}>


        <View style={{
          marginTop: 40,

         // alignItems: 'center',
          //justifyContent: 'center', 
          borderBottomWidth: 0.9,
          //paddingLeft: 150,
          width: '90%'


        }}>

          <View style={{ flexDirection: 'row' }}>

           <View style={{
              alignItems: 'flex-start',
              justifyContent: 'flex-start'
            }}>
              <AntDesignIcon name="mobile1" size={24} color="black" />
          </View>



            <Text style={{ marginLeft: 70, fontSize: 20,
               fontWeight: "bold", color: 'grey' }}>{Mobileno}

            </Text>
          </View>
        </View>






      </View>
      <View style={{ flexDirection: 'row', marginLeft: 40, marginRight: 40, height: 80, width: '95%' }}>


        <View style={{
          marginTop: 40,

         // alignItems: 'center',
          //justifyContent: 'center', 
          borderBottomWidth: 0.5,
          //paddingLeft: 150,
          width: '90%'


        }}>

          <View style={{ flexDirection: 'row' }}>

            <View style={{
              alignItems: 'flex-start',
              justifyContent: 'flex-start'
            }}>
              <FontAwesomeIcon name='expeditedssl' size={30} color='black' />
          </View>



            <Text style={{ marginLeft: 70, 
              fontSize: 20, fontWeight: "bold", color: 'grey', }}>{Pinno}

            </Text>
          </View>
        </View>
        






      </View>
      

      <View style={{flexDirection:'row'}}>


      <View style={{
        marginLeft: 40, marginTop: 40, backgroundColor: "black",
         borderRadius: 10, borderBottomWidth: 5, borderTopWidth: 5,
        borderLeftWidth: 5, borderRightWidth: 5,
        borderEndWidth: 5, width: '40%', height: 70, borderColor: "black"
      }}>
        
        <TouchableOpacity onPress={() => { navigation.navigate('Changepin',{sendmobileno:mobileno}) }}> 
        
        <View style={{marginTop:20,flexDirection:'row'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft:8,color:'white'}}>CHANGEPIN</Text>
          <View style={{}}>
        <MaterialIconsIcon name="published-with-changes" size={29} color="white" />
    </View>
         
        </View>
        
        
        </TouchableOpacity>
        
      </View>
      
      <View style={{
        marginLeft: 20, marginTop: 40, backgroundColor: "black", borderRadius: 10, 
        borderBottomWidth: 5, borderTopWidth: 5,
        borderLeftWidth: 5, borderRightWidth: 5,
        borderEndWidth: 2, width: '40%', height: 70, borderColor: "black"
      }}>
        <TouchableOpacity onPress={() => { navigation.navigate('Signin') }}>
          <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10, color: 'white' }}>LOGOUT
          <View >
          <AntDesignIcon name="logout" size={24} color="white" />
    </View>
          </Text>
          </View>
          
        </TouchableOpacity>
      </View>
      </View>
      <View style={{
        marginLeft: 130, marginTop: 40, backgroundColor: "black",
         borderRadius: 10, borderBottomWidth: 5, borderTopWidth: 5,
        borderLeftWidth: 5, borderRightWidth: 5,
        borderEndWidth: 5, width: '40%', height: 70, borderColor: "silver"
      }}>
        
        <TouchableOpacity onPress={() => { Alert.alert('delete') }}> 
        
        <View style={{marginTop:20,flexDirection:'row'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft:8,color:'white'}}>DELETE</Text>
          <View style={{marginLeft:20}}>
        <AntDesignIcon name="delete" size={29} color="white" />
    </View>
         
        </View>
        
        
        </TouchableOpacity>
        
      </View>
      

    </View>
    </View>
    
  )
}

export default Profile

const styles = StyleSheet.create({})