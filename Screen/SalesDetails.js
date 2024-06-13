import { StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import React , { useState, useEffect } from 'react'
{/*import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';*/}
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
 import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons'
 import { Server_url } from './Service/Api_Constants'
const sales_detailed1 = [{
  id: 1, name: 'dairymilk', Quqntity: 100, Price: 10, Total_Rate: 1000},
{ id: 2, name: 'milkybar', Quqntity: 100, Price: 10, Total_Rate: 1000 },
{ id: 3, name: 'milkybar', Quqntity: 100, Price: 10, Total_Rate: 1000 },
{ id: 4, name: 'milkybar', Quqntity: 100, Price: 10, Total_Rate: 1000 },
{ id: 5, name: 'milkybar', Quqntity: 100, Price: 10, Total_Rate: 1000 },
{ id: 6, name: 'milkybar', Quqntity: 100, Price: 10, Total_Rate: 1000 },
{ id: 7, name: 'milkybar', Quqntity: 100, Price: 10, Total_Rate: 1000 },
{ id: 8, name: 'milkybar', Quqntity: 100, Price: 10, Total_Rate: 1000 },
{ id: 9, name: 'milkybar', Quqntity: 100, Price: 10, Total_Rate: 1000 },
{ id: 10, name: 'milkybar', Quqntity: 100, Price: 10, Total_Rate: 1000 },
{ id: 11, name: 'milkybar', Quqntity: 100, Price: 10, Total_Rate: 1000 },
{ id: 12, name: 'milkybar', Quqntity: 100, Price: 10, Total_Rate: 1000 },
{ id: 13, name: 'milkybar', Quqntity: 100, Price: 10, Total_Rate: 1000 },
{ id: 14, name: 'milkybar', Quqntity: 100, Price: 10, Total_Rate: 1000 },
{ id: 15, name: 'milkybar', Quqntity: 100, Price: 10, Total_Rate: 1000 },
{ id: 16, name: 'milkybar', Quqntity: 100, Price: 10, Total_Rate: 1000 },
{ id: 17, name: 'milkybar', Quqntity: 100, Price: 10, Total_Rate: 1000 },
{ id: 18, name: 'milkybar', Quqntity: 100, Price: 10, Total_Rate: 1000 },
{ id: 19, name: 'milkybar', Quqntity: 100, Price: 10, Total_Rate: 1000 },
{ id: 20, name: 'milkybar', Quqntity: 100, Price: 10, Total_Rate: 1000 },
{ id: 21, name: 'milkybar', Quqntity: 100, Price: 10, Total_Rate: 1000 },



]

 

const SalesDetails = ({ route,navigation }) => {
  const [Sale_itemdetail, setSale_itemdetail] = useState('');
  const show_Sale_itemdetail= () => {
    alert('check')
    const param = {
      bill_no  :billno
    };
    fetch(Server_url + '/api/pos/View/bill/detail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(param),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Sale item detail:', data);
            setSale_itemdetail(data)
        })
        .catch(error => {
            console.error('Error:', error);
        });
};
useEffect(()=>{
  if(!Sale_itemdetail){
    show_Sale_itemdetail()
  }
})


  const {billno,date,cust_name,amt}=route.params;
  return (
    <View style={{ flex: 1,backgroundColor:'black'}}>

      <View style={{
        width: '90%', height: 45,// backgroundColor: 'black', 
        marginTop: 29, marginLeft: 20,
         borderRadius: 10,borderColor:'gold'
         ,borderBottomWidth: 1,
         // borderTopWidth: 5,
        //borderLeftWidth: 3, borderRightWidth: 3,
        //borderEndWidth: 3,
      }}>
        <View style={{ flexDirection: 'row',marginLeft:10 }}>

          <TouchableOpacity onPress={() => { navigation.navigate('Dashboard') }}>
            <FontAwesomeIcon name="arrow-circle-o-left" size={34} color="gold" />
          </TouchableOpacity>
<View style={{marginLeft:80}}>
          <MaterialCommunityIconsIcon name="account-details" size={29} color="white" />
    </View>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 10, color: 'white' }}>
            SalesDetails</Text>

        </View>
      </View>
      < View style={{ height: 150, width: 402, marginTop: 30, 
        marginLeft: 5, flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column' }}>
          <View style={{ marginLeft: 10 }}>




            <Text style={{ fontSize: 20, fontWeight: 'bold' ,color:'white'}}>Customer
            </Text>
          </View>
          <View style={{ marginTop: 10, marginLeft: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: '400' ,color:'white'}}>{cust_name}</Text>
            <Text style={{ fontSize: 18, fontWeight: '400',color:'white' }}>93,minnagar,cdm</Text>
            <Text style={{ fontSize: 18, fontWeight: '400',color:'white' }}>9344787689</Text>
          </View>

        </View>


        <View>
        </View>
        <View style={{ flexDirection: 'column', marginTop: 20, width: '95%' }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginLeft: 70, fontSize: 20, fontWeight: 'bold',color:'white' }}>Bill no:</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold',color:'white' }}>{billno}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 70 }}>


            <Text style={{ fontSize: 20, fontWeight: 'bold',color:'white' }}>BillDate:</Text>
            <Text style={{ fontSize: 19, fontWeight: '400',color:'white' }}>{date.split('T')[0]}</Text>

          </View>

        </View>
      </View>
      <View style={{
        width: '94%',
        borderBottomWidth: 0.9, borderLeftWidth: 0.9,
         borderEndWidth: 0.9, borderTopWidth: 0.9,
        borderColor:'gold',marginLeft:10,
      }} >
        <View style={{ flexDirection: 'row', backgroundColor: '#E1E1E1', }}>
          <View style={{ marginLeft: 15, marginTop: 10, marginRight: 5, marginBottom: 10,
             alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.tablehead}> Item
            </Text>
          </View>

          <View style={{ marginLeft: 17, marginTop: 10, marginRight: 5, marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.tablehead}>qty</Text>
          </View>
          <View style={{ marginLeft: 15, marginTop: 10, marginRight: 5, marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.tablehead}>price</Text>
          </View>
          <View style={{ marginLeft: 15, marginTop: 10, marginRight: 5, marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.tablehead}>Total Rate</Text>
          </View>
        </View>
        <View style={{ height: 280, marginLeft: 5, marginRight: 5 }}>
          <FlatList
            data={Sale_itemdetail}
            keyExtrector={(item) => item.id}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 30, width: 80, alignItems: 'flex-start', justifyContent: 'center' }}>
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ marginLeft: 10, fontWeight: 'bold',color:'white' }}>{item.item_name}</Text>
                  </View>
                </View>
                <View style={{ height: 30, width: 60, marginLeft: 20, marginTop: 5 }}>
                  <Text style={{ marginLeft: 20,color:'white', fontWeight: 'bold' }}>{item.qty}</Text>
                </View>
                <View style={{ height: 30, width: 80, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ marginLeft: 20,color:'white', fontWeight: 'bold' }}>{item.rate}</Text>
                </View>
                <View style={{ height: 30, width: 150, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ marginLeft: 20 ,color:'white', fontWeight: 'bold'}}>{item.qty*item.rate}</Text>
                </View>

              </View>
            )}
          ></FlatList>
        </View>
      </View>
      
      <View style={{ flexDirection: "row" }}>
        <View style={{
          marginTop: 20, marginLeft: 200, width: 70, height: 30,
          alignItems: 'center', backgroundColor: 'orange'
        }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold',color:'black' }}>Total:</Text>
        </View>
        <View style={{
          marginTop: 20, marginLeft: 20, width: 70,
          alignItems: 'center', backgroundColor: 'green'
        }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' ,color:'black'}}>{amt}</Text>
        </View>

      </View>


    </View>







  )
}

export default SalesDetails

const styles = StyleSheet.create({
  tablehead: {
    marginLeft: 10,
    marginTop: 10,
    marginRight: 5, marginBottom: 2, alignItems: 'center',
    justifyContent: 'center', fontWeight: 'bold', fontSize: 23,color:'black',
  },
  tableheadstyle: {
    fontSize: 20, fontWeight: 'bold'
  }
})