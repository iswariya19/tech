import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
{/*import { Ionicons } from '@expo/vector-icons';*/ }
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import { Server_url } from './Service/Api_Constants'


  const ReturnDetails = ({ navigation, route }) => {
  
    const [return_itemdetail, setreturn_itemdetail] = useState('');
  
  const show_return_itemdetail = () => {
    alert('check')
    const param = {
      bill_no: ReturnBillno
    };
    fetch(Server_url + '/api/pos/View/sales_rtn/detail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    })
      .then(response => response.json())
      .then(data => {
        console.log('return item detail:', data);
        setreturn_itemdetail(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    if (return_itemdetail=='') {
      show_return_itemdetail()
    }
  })
  const { ReturnBillno,ReturAmount, customer,Date } = route.params;


  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{
        width: '90%', height: 45,
        //backgroundColor: 'black',
        marginTop: 29, marginLeft: 20,
        //borderRadius: 10,
        borderBottomWidth: 1,
        //borderTopWidth: 5,
        //borderLeftWidth: 3, borderRightWidth: 3,
        //borderEndWidth: 3,
        borderColor: 'gold'
      }}>
        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
          <TouchableOpacity onPress={() => { navigation.navigate('Dashboard') }}>
            <FontAwesomeIcon name="arrow-circle-o-left" size={34} color="white" />
          </TouchableOpacity>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 80, color: 'white' }}>ReturnDetails</Text>
        </View>
      </View>
      < View style={{ height: 150, width: 402, marginTop: 30, marginLeft: 5, flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column' }}>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Customer
            </Text>
          </View>
          <View style={{ marginTop: 10, marginLeft: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: '400', color: 'white' }}>{customer}</Text>
            <Text style={{ fontSize: 18, fontWeight: '400', color: 'white' }}>93,minnagar,cdm</Text>
            <Text style={{ fontSize: 18, fontWeight: '400', color: 'white' }}>9344787689</Text>
          </View>
        </View>
        <View>
        </View>
        <View style={{ flexDirection: 'column', width: '95%' }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginLeft: 40, fontSize: 20, fontWeight: 'bold', color: 'white' }}>RtnBill no:</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>{ReturnBillno}</Text>
          </View>
          
          <View style={{ flexDirection: 'row', marginLeft: 40 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>ReturnDate:</Text>
            <Text style={{ fontSize: 19, fontWeight: '400', color: 'white' }}>{Date.split('T')[0]}</Text>
          </View>
        </View>
      </View>
      <View style={{
        width: '96%',
        borderBottomWidth: 0.9, borderLeftWidth: 0.9, borderEndWidth: 0.9, borderTopWidth: 0.9,
        borderColor: 'gold', marginLeft: 10
      }} >
        <View style={{ flexDirection: 'row', backgroundColor: '#202124', }}>
          <View style={{ marginLeft: 15, marginTop: 10, marginRight: 5, marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
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
      </View>
      <View style={{
        height: 280, marginLeft: 10, width: '96%', borderBottomWidth: 0.9, borderLeftWidth: 0.9, borderEndWidth: 0.9, borderTopWidth: 0.9,
        borderColor: 'gold'
      }}>
        <FlatList
          data={return_itemdetail}
          keyExtrector={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity onPress={() => (item.id)}>


                <View style={{ flexDirection: 'row' }}>

                  <View style={{ height: 30, width: 80, alignItems: 'flex-start', justifyContent: 'center' }}>
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ marginLeft: 10, fontWeight: 'bold', color: 'white' }}>{item.item_code}</Text>


                    </View>

                  </View>
                  <View style={{ height: 30, width: 60, marginLeft: 20, marginTop: 5 }}>
                    <Text style={{ marginLeft: 20, color: 'white' }}>{item.qty}</Text>
                  </View>
                  <View style={{ height: 30, width: 80, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ marginLeft: 20, color: 'white' }}>{item.rate}</Text>
                  </View>
                  <View style={{ height: 30, width: 150, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ marginLeft: 20, color: 'white' }}>{item.qty*item.rate}</Text>
                  </View>





                </View>

              </TouchableOpacity>
            </View>

          )}
        ></FlatList>
      </View>
      <View style={{ flexDirection: "row", marginTop: 30 }}>
       

      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{
          marginTop: 20, marginLeft: 200, width: 70, height: 30,
          alignItems: 'center', backgroundColor: 'orange'
        }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Total:</Text>
        </View>
        <View style={{
          marginTop: 20, marginLeft: 20, width: 70,
          alignItems: 'center', backgroundColor: 'green'
        }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>{ReturAmount}</Text>

        </View>
      </View>

    </View>


  )
}

export default ReturnDetails

const styles = StyleSheet.create({
  tablehead: {
    marginLeft: 15,
    marginTop: 10,
    marginRight: 5, marginBottom: 10, alignItems: 'center',
    justifyContent: 'center', fontWeight: 'bold', fontSize: 20, color: 'white'
  },
  tableheadstyle: {
    fontSize: 20, fontWeight: 'bold'
  }
})