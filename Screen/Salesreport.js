import { StyleSheet, Text, View, ImageBackground, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
{/*import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';*/}
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { SearchBar } from 'react-native-elements';
import { Server_url } from './Service/Api_Constants'


const Saless = [
  { id: 1, Billno: '101', Date: '01/01/2023', Customer: 'Chandra', Amount: '2,500' },
  { id: 2, Billno: '102', Date: '23/12/2022', Customer: 'Swathi', Amount: '900' },
  { id: 3, Billno: '103', Date: '27/11/2022', Customer: 'Sivapriya', Amount: '1500' },
  { id: 4, Billno: '104', Date: '22/11/2022', Customer: 'Reshma', Amount: '800' },
  { id: 5, Billno: '105', Date: '19/11/2022', Customer: 'Gopikrishnan', Amount: '1,500' },
  { id: 6, Billno: '106', Date: '12/11/2022', Customer: 'Iswariya', Amount: '500' },
]






const Salesreport = ({ navigation }) => {

  useEffect(() => {
    if (!Sales) {
      get_Sales()
    }
  })
  const [Sales, setSales] = useState('');

  const get_Sales = () => {

    const param = {
      Company_name: "POS",
    };

    fetch(Server_url + '/api/pos/Sales', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Sales:', data);
        setSales(data)
        setflatlistdata(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const [searchword, setSearchWord] = useState("");
  const [FlatListdata, setflatlistdata] = useState('');

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = Sales.filter(function (item) {
        const itemData = item.cust_name ? item.cust_name.toUpperCase() : "".toUpperCase();
        const Customer = item.cust_name ? item.cust_name.toUpperCase() : "".toUpperCase();
        const Date = item.bill_date ? item.bill_date.toUpperCase() : "".toUpperCase();
        const Bill_no = item.Bill_no? item.Bill_no.toString() : "".toString();
        
        //  alert(itemData)
        const textData = text.toUpperCase();
        if (itemData.indexOf(textData) > -1) {
          return itemData.indexOf(textData) > -1;
        } else if (Customer.indexOf(textData) > -1) {
          return Customer.indexOf(textData) > -1;
        }
        else if (Date.indexOf(textData) > -1) {
          return Date.indexOf(textData) > -1;
        }
        else if (Bill_no.indexOf(textData) > -1) {
          return Bill_no.indexOf(textData) > -1;
        }
      });





      //alert(newData[0].name);

      setflatlistdata(newData);
      setSearchWord(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setflatlistdata(Sales);
      setSearchWord(text);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      {/*<ImageBackground source={require('../assets/cb2.jpeg')}
      style={{ width: '100%', height: '100%',borderTopLeftRadius:10 }}>*/}
      <View style={{
        width: '93%', height: 45,
        // backgroundColor:'gold',
        marginTop: 29, marginLeft: 15,
        // borderRadius:10,
        borderBottomWidth: 0.5,
        // borderTopWidth: 0.9,
        //borderLeftWidth: 0.2, borderRightWidth: 7,
        //borderEndWidth: 0.2,
        borderColor: 'gold'
      }}>
        <View style={{ flexDirection: 'row', marginLeft: 10 }}>

          <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <FontAwesomeIcon name="arrow-circle-o-left" size={34} color="white" />
          </TouchableOpacity>

          <View style={{ marginLeft: 60, marginTop: 6 }}>
            <EntypoIcon name="credit" size={27} color="white" />
          </View>
          <Text style={{
            fontSize: 27, fontWeight: 'bold',
            color: 'white'
          }}>
            Salesreport</Text>
        </View>
      </View>
      <SearchBar
        placeholder="Search"
        onChangeText={(text) => searchFilterFunction(text)}
        value={searchword}
        style={{ backgroundColor: "black" }}
        containerStyle={{ backgroundColor: 'black' }}
        inputContainerStyle={{
          backgroundColor: 'black'
          , borderWidth: 1, borderColor: 'gold', borderBottomWidth: 1,
          borderRadius: 10
        }}
        inputStyle={{ color: 'white', fontSize: 20, fontWeight: 'bold', }}
        searchIcon={{ size: 30 }}
      // cancelIcon={true}
      //lightTheme={true}

      />


      <FlatList data={FlatListdata}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{
            backgroundColor: '#17181B', marginTop: 10, height: 120, margin: 10,
            flexDirection: 'column', borderRadius: 10, borderBottomWidth: 1, borderTopWidth: 1,
            borderLeftWidth: 1, borderRightWidth: 1, borderColor: 'gold',
            borderEndWidth: 1,
          }}>



            <View >
              <TouchableOpacity onPress={() => { navigation.navigate('SalesDetails',{
                billno:item.Bill_no,date:item.bill_date,cust_name:item.cust_name,
                amt:item.Total_bill_amt
              }) 
            }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../assets/sr1.jpeg')}
                    style={{ width: 110, height: 90, marginLeft: 10, }}></Image>
                  <View style={{ marginLeft: 40, marginTop: 7 }}>

                    <Text style={{ fontSize: 20, fontWeight: '700', color: 'gold' }}>Billno:{item.Bill_no} </Text>

                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>Date:{item.bill_date.split('T')[0]}</Text>

                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>Customer:{item.cust_name}</Text>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>Amount:{item.Total_bill_amt}</Text>
                  </View></View></TouchableOpacity>


            </View>

          </View>

        )}></FlatList>


    </View>




  )
}

export default Salesreport

const styles = StyleSheet.create({})