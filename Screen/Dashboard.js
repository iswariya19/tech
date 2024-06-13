import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Alert, ImageBackground ,Image} from 'react-native'
import React,{useState,useEffect} from 'react'
//import { MaterialCommunityIcons } from '@expo/vector-icons';
import MaterialCommunityIconsIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import { Server_url } from './Service/Api_Constants'




const Dashboard = ({ navigation }) => {
  const [dashboarddata, setdashboarddata] = useState('')
  const [no_of_bill,set_no_of_bill] = useState(0)
  const [total_amt,set_total_amt] = useState(0);

  const get_dashboarddetail = () => {
    fetch(Server_url + '/api/pos/Dashboard_data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('dashboarddata:', data);
        setdashboarddata(data)
        set_no_of_bill(data[0].no_of_bill)
        set_total_amt(data[0].bill_amt)
       // setflatlistdata(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    if (!dashboarddata) {
      get_dashboarddetail()
    }
  })


  
  
  

  return (

    <View style={{ flex: 1,backgroundColor:'black' }}>
      {/*<ImageBackground source={require('../assets/pc11.jpeg')}
        style={{ width:410 , height:825  }}>*/}


<View style={{flexDirection:'row'}}>
  <TouchableOpacity onPress={() => navigation.openDrawer() }>
    <View style={{marginTop:25,marginLeft:10}}>
        <AntDesignIcon name="menu-fold" size={30} color="gold" />
       </View>
       </TouchableOpacity>
<View style={{marginTop:25,marginLeft:100}}>
        <MaterialCommunityIconsIcons name="view-dashboard" size={30} color="white" />
       </View>

        <Text style={{ fontSize: 30, fontWeight: 'bold',color:'white',
        marginTop:20,  }}>DASHBOARD</Text>
      
        </View>
        <View style={{ flexDirection: 'row',marginTop:40 }}>
          <View style={{
            backgroundColor: '#202124', width: 160,
            height: 160, margin: 20, borderRadius: 10, borderBottomWidth: 1, borderTopWidth: 1,
            borderLeftWidth: 1, borderRightWidth: 1,
            borderEndWidth: 1,borderColor:'gold'
          }}>
           
           
              
              <Text style={{
                fontSize: 40,
                fontWeight: 'bold', marginLeft: 60, marginTop:29,marginRight:50,
                color:'gold'
              }}>{no_of_bill} </Text> 
              <View>
                <Text style={{
                fontSize: 25,
                fontWeight: 'bold', marginLeft: 10, marginTop:35,color:'white'
              }} >No.of Bills</Text>
              </View>
            
          </View>

          <View style={{
            backgroundColor: '#202124', width: 160,
            height: 160, margin: 20, borderRadius: 10, borderBottomWidth: 1, borderTopWidth: 1,
            borderLeftWidth: 1, borderRightWidth: 1,
            borderEndWidth: 1,borderColor:'gold'
          }}>
            <TouchableOpacity 
            //</View>onPress={() => { navigation.navigate('Amount') }}
            >
            <View style={{marginTop:20,marginLeft:20,width:100,height:70}}>
              <Text  style={{
                fontSize: 30,
                fontWeight: 'bold', marginLeft: 20,marginTop:20,color:'gold',width:90,height:'60%'}}>{total_amt> 0?total_amt:0}
              </Text>
              </View>
            
            <View >
              <Text style={{
                fontSize: 25, color: 'white',
                fontWeight: 'bold', marginLeft: 5, marginTop:30
              }}>SalesAmount</Text>
              </View>
            </TouchableOpacity></View>
        </View>
        <View style={{flexDirection:'row'}}>
        <View style={{
            backgroundColor: '#17181B', width: 160,
            height: 160, margin: 20, borderRadius: 10, borderBottomWidth: 1, borderTopWidth: 1,
            borderLeftWidth: 1, borderRightWidth: 1,
            borderEndWidth: 1,borderColor:'gold'
          }}>
            <TouchableOpacity onPress={() => { navigation.navigate('Productlist',{sendscreen:''}) }}>
            <Image source={require('../assets/dp2.jpeg')}
              style={{width:'80%',height:'70%',marginLeft:15,marginTop:10,borderRadius:110}}></Image>
              <Text style={{
                fontSize: 25, color: 'white',
                fontWeight: 'bold', marginLeft: 18
              }}>Productlist</Text>  
            </TouchableOpacity>
          </View>
          <View style={{
            backgroundColor: '#17181B', width: 160,
            height: 160, margin: 20, borderRadius: 10, borderBottomWidth: 1, borderTopWidth: 1,
            borderLeftWidth: 1, borderRightWidth: 1,
            borderEndWidth: 1,borderColor:'gold'
          }}>
            <TouchableOpacity onPress={() => { navigation.navigate('Customerlist') }}>
            <Image source={require('../assets/dc1.jpeg')}
              style={{width:'80%',height:'70%',marginLeft:15,marginTop:10,borderRadius:110}}></Image>
              <Text style={{marginLeft:3,
                fontSize: 25, color: 'white',
                fontWeight: 'bold'
              }}>Customerlist</Text>  
            </TouchableOpacity>
          </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
          <View style={{
            backgroundColor: '#17181B', width: 160,
            height: 160, margin: 20, borderRadius: 10, borderBottomWidth: 1, borderTopWidth: 1,
            borderLeftWidth: 1, borderRightWidth: 1,
            borderEndWidth: 1,borderColor:'gold'
          }}>
            <TouchableOpacity onPress={() => { navigation.navigate('Salesreport') }}>
            <Image source={require('../assets/ds1.jpeg')}
              style={{width:'80%',height:'70%',marginLeft:20,marginTop:10,borderRadius:110}}></Image>
              <Text style={{
                fontSize: 25, color: 'white',
                fontWeight: 'bold', marginLeft: 10
              }}>Salesreport</Text> 
            </TouchableOpacity>
          </View>
          <View style={{
            backgroundColor: '#17181B', width: 160,
            height: 160, margin: 20, borderRadius: 10, borderRadius: 10, borderBottomWidth: 1,
            borderTopWidth:1,
            borderLeftWidth: 1, borderRightWidth: 1,
            borderEndWidth: 1,borderColor:'gold'
          }}>
            <TouchableOpacity onPress={() => { navigation.navigate('Salesreturn') }}>
            <Image source={require('../assets/dr2.jpeg')}
              style={{width:100,height:100,marginLeft:25,marginTop:15,borderRadius:110}}></Image>
              <Text style={{
                fontSize: 25, color: 'white',
                fontWeight: 'bold',marginLeft:8
              }}>Salesreturn</Text> 
            </TouchableOpacity>
          </View>
         
        </View>
        


        </View>
       

      

    








  )
}

export default Dashboard

const styles = StyleSheet.create({})
