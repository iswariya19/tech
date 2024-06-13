import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState ,useContext} from 'react'
import {AsyncStorage} from 'react-native';
{/*import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';*/}
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
//import EntypoIcon from 'react-native-vector-icons/Entypo'
import { Server_url } from './Service/Api_Constants';
//import Mycontext from '../Screen/Context/Mycontext';
import Mycontext  from './Mycontext';




const Signup = ({ navigation }) => {
  const [shopname, setshopname] = useState('');
  const [name, setname] = useState('');
  const [mobileno, setmobileno] = useState('');
  const [pin, setpin] = useState('');
  const [msgshow, setMessageshow] = useState(false);
  const [msgcontent, setMsgcontent] = useState('');
  const [msgshow1, setMessageshow1] = useState(false);
  const [msgcontent1, setMsgcontent1] = useState('');
  const [msgshow2, setMessageshow2] = useState(false);
  const [msgcontent2, setMsgcontent2] = useState('');
  const [msgshow3, setMessageshow3] = useState(false);
  const [msgcontent3, setMsgcontent3] = useState('');
  const [eyesee, seteyesee] = useState(true);
  const {username,setUsername}=useContext(Mycontext)
  const{ Mobileno,setMobileno}=useContext(Mycontext)
  const{Pinno,setPinno}=useContext(Mycontext)
  
  const call_signup_api = () => {
    const Signup_data = {
      mobile_no: mobileno,
      user_name: name,
      pin: pin,
      shop_name: shopname
    };

    fetch(Server_url + '/api/usercreation/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Signup_data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('signup Success:', data);

        if (data[0].status_code == 2) {
          const logindata = [
            {
              mobileno: mobileno,
              pin: pin,
              name: name,
              shopname: shopname,
              shopid: data[0].shop_id,
            }
          ];
          //storeUserDetails(logindata);
          setUsername(name);
          setMobileno(mobileno);
          setPinno(pin)
          navigation.navigate('Dashboard');
        }
        else if (data[0].status_code == 1) {
          alert("Signup failed")
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  const Signup_validation = () => {
    if (shopname === '') {
      setMsgcontent('plese enter shopname')
      setMessageshow(true)
      //alert('please enter the name');
    }

    else if (name === '') {
      //alert('plese enter the mobileno');
      setMessageshow(false)
      setMsgcontent1('plese enter name')
      setMessageshow1(true)


    }
    else if (mobileno === '') {
      setMessageshow(false)
      setMessageshow1(false)
      setMsgcontent2('plese enter mobileno')
      setMessageshow2(true)

    }
    else if (mobileno === '') {
      setMessageshow(false)
      setMessageshow1(false)
      setMessageshow2(true)

      setMsgcontent2('plese enter mobileno')

      //alert('please enter the name');
    }
    else if (mobileno.length !== 10) {
      setMsgcontent2('plese enter 10 digit mobileno')
      setMessageshow2(true)

      //alert('please enter the name');
    }
    else if (mobileno < 6000000000) {
      setMsgcontent2('plese enter validmobileno')
      setMessageshow2(true)

    }
    else if (pin === '') {
      setMessageshow(false)
      setMessageshow2(false)
      setMessageshow3(true)

      setMsgcontent1('plese enter pin')

      // alert('plese enter the password');
    }
    else if (pin.length !== 4) {
      setMsgcontent1('plese enter valid pin')
      setMessageshow1(true)



      //alert('plese enter the password');
    }


    else {

      //navigation.navigate('Dashboard')
      setMessageshow(false)
      setMessageshow1(false)
      setMessageshow2(false)
      setMessageshow3(false)
      //call_signup_api();
      const UserDetails=[{ shopname:shopname,name:name,mobileno:mobileno,pin:pin}];
     // AsyncStorage.setItem(
       // "@user_name",JSON.stringify(UserDetails))
        navigation.navigate('Dashboard');

    }
  };
  
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../assets/ss.jpeg')}
        style={{ width: '100%', height: 810, borderTopLeftRadius: 10 }}>



        <View>
          <Image source={require('../assets/sss.jpeg')}
            style={{ width: 200, height: 190, marginTop: 60, marginLeft: 100, borderRadius: 300 }}>
          </Image>
          {/*<Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginLeft: 150,
            marginTop: 150, color: 'white'
          }}>SIGNUP </Text>*/}
        </View>

        <View style={{
          marginLeft: 10, borderRadius: 100
          , margin: 13,
          borderBottomWidth: 1, borderTopWidth: 1,
          borderLeftWidth: 1, borderRightWidth: 1,
          borderEndWidth: 1, fontSize: 20, marginTop: 50, borderColor: 'gold',
          //alignItems:'center',
          //justifyContent:'center',
          //paddingLeft: 150,
          //paddingLeft:30,
          width: '95%', height: 50, flexDirection: 'row'
        }}>
          {/*<View style={{marginTop:4,marginLeft:30}}>
        <Entypo name="shop" size={24} color="black" />
    </View>*/}

          <View style={{ marginTop: 6, marginLeft: 30, width: 30 }}>
            <FontistoIcon name='shopping-store' size={24} color='gold' />
          </View>
          <View>

            <TextInput placeholder="SHOPNAME" placeholderTextColor={"grey"} color="gold" maxLength={25}
              onChangeText={value => setshopname(value)} style={{
                marginLeft: 40,
                fontSize: 20, fontWeight: 'bold', width: '95%',
              }}>

            </TextInput>
          </View>
        </View>


        {msgshow ?
          (<View>
            <Text style={{ marginLeft: 150, color: '#C0392B', fontWeight: 'bold' }}>{msgcontent}</Text>
          </View>) : null

        }

        <View style={{
          flexDirection: 'row', marginLeft: 10, borderRadius: 100
          , height: 40, margin: 13,
          borderBottomWidth: 1, borderTopWidth: 1,
          borderLeftWidth: 1, borderRightWidth: 1,
          borderEndWidth: 1, fontSize: 20,
          //alignItems:'center',
          //justifyContent:'center',
          //paddingLeft: 150,
          //paddingLeft:30,
          width: '95%', height: 50, borderColor: 'gold'
        }}>
          {/*<View style={{marginTop:4,marginLeft:30}}>
      <FontAwesome name="user-circle-o" size={24} color="black" />
</View>*/}<View style={{ marginTop: 6, marginLeft: 30, width: 30 }}>
            <FontAwesomeIcon name='user-circle-o' size={27} color='gold' />
          </View>
          <View style={{ width: '80%' }}>
            <TextInput placeholder="USERNAME" 
            placeholderTextColor={"grey"} color="gold" maxLength={25} 
            onChangeText={value => setname(value)}
              style={{ marginLeft: 40, fontSize: 20, fontWeight: 'bold' }}>

            </TextInput>
          </View>
        </View>
        {msgshow1 ?
          (<View>
            <Text style={{ marginLeft: 150, color: '#C0392B', fontWeight: 'bold' }}>{msgcontent1}</Text>
          </View>) : null

        }



        <View style={{
          flexDirection: 'row', marginLeft: 10,
          borderRadius: 100
          , height: 40, margin: 13,
          borderBottomWidth: 1, borderTopWidth: 1,
          borderLeftWidth: 1, borderRightWidth: 1,
          borderEndWidth: 1, fontSize: 20,
          //paddingLeft: 30,alignItems:'center',
          //justifyContent:'center',
          width: '95%', height: 50, borderColor: 'gold'
        }}>
          {/*<View style={{marginTop:4,marginLeft:30}}>
      <FontAwesome name="phone" size={24} color="black" /></View>*/}
          <View style={{ marginTop: 6, marginLeft: 30, width: 30 }}>
            <FontAwesome5Icon name='mobile-alt' size={30} color='gold' />
          </View>

          <View style={{ width: '80%', height: 50 }}>
            <TextInput placeholder="MOBILE NO" placeholderTextColor={"grey"} color='gold' maxLength={10} keyboardType="numeric"
              onChangeText={value => {
                setMessageshow2(false)
                setmobileno(value)
              }} style={{ marginLeft: 40, fontSize: 20, fontWeight: 'bold' }}></TextInput>
          </View></View>
        {msgshow2 ?
          (<View>
            <Text style={{ marginLeft: 150, color: '#C0392B', fontWeight: 'bold' }}>{msgcontent2}</Text>
          </View>) : null

        }

        <View style={{
          flexDirection: 'row', marginLeft: 10,
          borderRadius: 100
          , height: 40, margin: 15,
          borderBottomWidth: 1, borderTopWidth: 1,
          borderLeftWidth: 1, borderRightWidth: 1,
          borderEndWidth: 1, fontSize: 20,
          //alignItems:'center',
          //justifyContent:'center',
          //paddingLeft: 30,
          width: '95%', height: 50, borderColor: 'gold'
        }}>
          {/*<View style={{marginTop:4,marginLeft:30}}>
        <FontAwesome5 name="lock" size={24} color="black" />
    </View>*/}<View style={{ marginTop: 6, marginLeft: 30, width: 30 }}>
            <FontAwesomeIcon name='expeditedssl' size={30} color='gold' />
          </View>
          <View style={{ width: '70%', height: 50 }}>
            <TextInput placeholder="PIN" placeholderTextColor={'grey'} color='gold' maxLength={4} keyboardType="numeric"

              secureTextEntry={eyesee}
              onChangeText={value => setpin(value)} style={{ marginLeft: 40, fontSize: 20, fontWeight: 'bold' }}>
            </TextInput>
          </View>
          <View style={{ marginTop: 7 }}>
            <TouchableOpacity onPress={() => seteyesee(!eyesee)}>
              {eyesee ?
                <FontAwesomeIcon name='eye-slash' size={30} color='gold' /> :
                <FontAwesomeIcon name='eye' size={30} color='gold' />

              }

            </TouchableOpacity>

          </View>
        </View>


        {msgshow3 ?
          (<View>
            <Text style={{ marginLeft: 150, color: '#C0392B', fontWeight: 'bold' }}>{msgcontent3}</Text>
          </View>) : null

        }


        <View style={{
          marginLeft: 120, marginRight: 120, marginTop: 20,
          borderBottomWidth: 1, borderTopWidth: 1,
          borderLeftWidth: 1, borderRightWidth: 1,
          borderEndWidth: 1, borderRadius: 10, borderColor: 'gold', width: '45%', height: '5%'
        }}>
          <TouchableOpacity onPress={Signup_validation}>
            <Text style={{ color: 'white', marginLeft: 50, marginTop: 10, fontSize: 20, fontWeight: 'bold' }}>SIGNUP</Text>
          </TouchableOpacity>



        </View>
        <View style={{ flexDirection: 'row', marginLeft: 7, marginTop: 90 }}>
          <View style={{
            marginLeft: 25, marginTop: 5, height: 40,
            //borderBottomWidth: 1, borderTopWidth: 1,
            //borderLeftWidth: 1, borderRightWidth: 1,
            //borderEndWidth: 1,borderRadius:5,borderColor:'gold',backgroundColor:'black'
          }}>
            <Text style={{ fontSize: 20, color: 'white' }}>Already have an account!!</Text>
          </View>


          <View style={{ width: '34%', }}>
            <TouchableOpacity onPress={() => { navigation.navigate('Signin') }}>
              <View style={{
                flexDirection: 'row',
                //  borderBottomWidth: 1, borderTopWidth: 1,
                //borderLeftWidth: 1, borderRightWidth: 1,
                //borderEndWidth: 1,borderRadius:5,
                //borderColor:'gold',

              }}>
                {/*<View style={{marginLeft:25,marginTop:8}}>
          <Entypo name="log-out" size={24} color="white" />
      </View><View style={{ marginTop: 6, marginLeft: 20,  }}>
              <EntypoIcon name='login' size={30} color='white' />
          </View>*/}

                <Text style={{
                  fontSize: 25, color: 'white',
                  fontWeight: 'bold', marginLeft: 10
                }}>signin</Text>

              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

    </View>



  )
}

export default Signup

const styles = StyleSheet.create({})