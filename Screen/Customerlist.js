import { FlatList, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
//import { FontAwesome5 } from '@expo/vector-icons';
//import { MaterialIcons } from '@expo/vector-icons';
//import { Ionicons } from '@expo/vector-icons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons'
import { SearchBar } from 'react-native-elements';
import { Server_url } from './Service/Api_Constants'




const person = [{ id: 1, name: 'chandra', address: '93,minnagar,cdm', lastvisiting_date: '1/1/2023', phone_no: '9344787689' },
{ id: 2, name: 'Swathi', address: '416,shivasakthinagar,cdm', lastvisiting_date: '23/12/2022', phone_no: '9786548064' },
{ id: 3, name: 'Sivapriya', address: '99,east street,cdm', lastvisiting_date: '27/11/2022', phone_no: '7869558432' },
{ id: 4, name: 'reshma', address: '89,palakad street,bvg', lastvisiting_date: '22/11/2022', phone_no: '9940865936' },
{ id: 5, name: 'Gopikirushnan', address: '19,south street,bvg', lastvisiting_date: '19/11/2022', phone_no: '9947865326' },
{ id: 6, name: 'ishwariya', address: '62,main road,perumathur,bvg', lastvisiting_date: '12/11/2022', phone_no: '9785643975' },
{ id: 7, name: 'guru', address: 'c muttlur', lastvisiting_date: '2/11/2022', phone_no: '9786654323' },
{ id: 8, name: 'vinoth', address: '72,south street,sethiyathope', lastvisiting_date: '30/10/2022', phone_no: '9682516357' },
{ id: 9, name: 'kavimithran', address: '72,mainroad,bvg', lastvisiting_date: '29/10/2022', phone_no: '918273465' },
{ id: 10, name: 'Adhithya', address: '89,murugan street,cdm', lastvisiting_date: '25/10/2022', phone_no: '986754321' },
{ id: 11, name: 'Rajapillai', address: '15,balunagar,bvg', lastvisiting_date: '23/11/2022', phone_no: '9587423123' },
{ id: 12, name: 'Vasanth', address: '20,thurabadhiamman street,kmk', lastvisiting_date: '20/11/2022', phone_no: '9458741254871' }]


const Customerlist = ({ navigation }) => {
  const [searchword, setSearchWord] = useState("");
  const [FlatListdata, setflatlistdata] = useState('');
  const [cust_detail, setCustdetail] = useState('')

  const get_customer_list = () => {
    fetch(Server_url + '/api/pos/View/Customer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('customer data:', data);
        setCustdetail(data)
        setflatlistdata(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    if (!cust_detail) {
      get_customer_list()
    }
  })


  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = FlatListdata.filter(function (item) {
        const itemData = item.cust_name ? item.cust_name.toUpperCase() : "".toUpperCase();
        const mobile = item.cust_mobile_no ? item.cust_mobile_no.toUpperCase() : "".toUpperCase();
        
        const textData = text.toUpperCase();
        if (itemData.indexOf(textData) > -1) {
          return itemData.indexOf(textData) > -1;
        } else if (mobile.indexOf(textData) > -1) {
          return mobile.indexOf(textData) > -1;
        }
      });

      //alert(newData[0].name);

      setflatlistdata(newData);
      setSearchWord(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setflatlistdata(cust_detail);
      setSearchWord(text);
    }
  };

  return (

    <View style={{ flex: 1, backgroundColor: 'black' }}>

      {/*<ImageBackground source={require('../assets/cb2.jpeg')}
      style={{ width: '100%', height: '100%',borderTopLeftRadius:10 }}>*/}
      <View style={{
        width: '90%', height: 50, marginTop: 29, marginLeft: 20, borderRadius: 10,
        borderBottomWidth: 3, borderTopWidth: 5,
        borderLeftWidth: 3, borderRightWidth: 3,
        borderEndWidth: 0.1
      }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginLeft: 10 }}>
            <TouchableOpacity onPress={() => { navigation.navigate('Dashboard') }}>
              < FontAwesomeIcon name="arrow-circle-o-left" size={34} color="gold" />
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 30, marginTop: 8 }}>
            <FontAwesome5Icon name="users" size={24} color="white" />
          </View>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 5, marginTop: 5, color: 'white' }}>
            CUSTOMERLIST</Text>
          <View style={{ marginLeft: 40, marginTop: 5 }}>
            <TouchableOpacity onPress={() => { navigation.navigate('CustomerAdd') }}>
              <MaterialIconsIcon name="person-add-alt-1" size={30} color="gold" />
            </TouchableOpacity>
          </View>
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
          , borderWidth: 1, borderColor: 'gold', borderBottomWidth: 1, borderRadius: 10
        }}
        inputStyle={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}
        searchIcon={{ size: 30 }}
      // cancelIcon={true}
      //lightTheme={true}

      />
      <FlatList data={FlatListdata}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{
            backgroundColor: '#202124', marginTop: 20, height: 150, margin: 10,
            flexDirection: 'column', borderRadius: 20, borderBottomWidth: 1, borderTopWidth: 1,
            borderLeftWidth: 1, borderRightWidth: 1,
            borderEndWidth: 1, borderColor: 'gold',width:'95%'
          }}>



            <View >
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../assets/dc2.jpeg')}
                  style={{ width: '30%', height: '90%', marginLeft: 10, marginTop: 10 }}></Image>
                <View style={{ marginLeft: 10, marginTop: 5, width: '75%' }}>

                  <Text style={{ fontSize: 20, fontWeight: '700', color: 'white' }}>

                    name:{item.cust_name} </Text>

                  <Text style={{ color: 'white' }}>Address:{item.Address}</Text>

                  <Text style={{ color: 'white' }}>Lastvisitingdate:{item.lastvisiting_date}</Text>
                  <Text style={{ color: 'white' }}>Phoneno:{item.cust_mobile_no}</Text>
                </View></View>

            </View>
          </View>







        )}></FlatList>

    </View>

  )
}

export default Customerlist

const styles = StyleSheet.create({})