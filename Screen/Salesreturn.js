import { StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SearchBar } from 'react-native-elements';
{/*import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';*/}
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { Server_url } from './Service/Api_Constants'
const salesss = [{ id: 1, Billno: '101', Date: '01/01/2023', Customer: 'Chandra', ReturnAmount: '2,500' },
{ id: 2, Billno: '102', Date: '23/12/2022', Customer: 'Swathi', ReturnAmount: '900' },
{ id: 3, Billno: '103', Date: '27/11/2022', Customer: 'Sivapriya', ReturnAmount: '1500' },
{ id: 4, Billno: '104', Date: '22/11/2022', Customer: 'Reshma', ReturnAmount: '800' },
{ id: 5, Billno: '105', Date: '19/11/2022', Customer: 'Gopikrishnan', ReturnAmount: '1,500' },
{ id: 6, Billno: '106', Date: '12/11/2022', Customer: 'Iswariya', ReturnAmount: '500' },
]
//api code
const Salesreturn = ({ navigation }) => {
    useEffect(() => {
        if (!Sales) {
            get_Sales()
        }
    })
    const [Sales, setSales] = useState('');

    const get_Sales = () => {

        const params = {
            Company_name: "POS",

        };

        fetch(Server_url + '/api/pos/Sales_rtn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Sales:', data);
                setSales(data)
                setflatlistdata(data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };


    const [searchword, setSearchWord] = useState("");
    const [FlatListdata, setflatlistdata] = useState(Sales);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = Sales.filter(function (item) {
                const itemData = item.cust_name ? item.cust_name.toUpperCase() : "".toUpperCase();
                const Customer = item.Customer ? item.Customer.toUpperCase() : "".toUpperCase();
                const Date = item.rtn_date ? item.rtn_date.toUpperCase() : "".toUpperCase();
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
            {/* <ImageBackground source={require('../assets/cb2.jpeg')}
      style={{ width: '100%', height: '100%',borderTopLeftRadius:10 }}>*/}
            <View style={{
                width: '90%', height: 45, marginTop: 29, marginLeft: 20,
                //borderRadius:10,
                borderBottomWidth: 1,
                // borderTopWidth: 5,
                //borderLeftWidth: 3, borderRightWidth: 3,
                //borderEndWidth: 3,
                borderColor: 'gold'
            }}>
                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <View >
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <FontAwesomeIcon name="arrow-circle-o-left" size={34} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 80, marginTop: 5 }}>

                        <FontAwesome5Icon name="sync-alt" size={24} color="gold" />
                    </View>
                    <Text style={{
                        fontSize: 27, fontWeight: 'bold', marginLeft: 20,
                        color: 'white'
                    }}>
                        Salesreturn</Text>
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
                        backgroundColor: 'black', marginTop: 20, height: 120, margin: 10,
                        flexDirection: 'column', borderRadius: 20, borderBottomWidth: 1, borderTopWidth: 1,
                        borderLeftWidth: 1, borderRightWidth: 1,
                        borderEndWidth: 1, borderColor: "gold"
                    }}>



                        <View >
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('ReturnDetails', {
                                    ReturnBillno: item.rtn_bill_no, Date: item.rtn_date, customer: item.cust_name,
                                    ReturAmount: item.Total_rtn_amt
                                })
                            }
                            }>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('../assets/sr3.jpeg')}
                                        style={{ width: '30%', height: '100%', marginLeft: 20, marginTop: 10 }}></Image>
                                    <View style={{ marginLeft: 40, marginTop: 7 }}>

                                        <Text style={{ fontSize: 20, fontWeight: '700', color: 'gold' }}>


                                            ReturnBillno:{item.rtn_bill_no} </Text>

                                        <Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>Date:{item.rtn_date.split('T')[0]}</Text>

                                        <Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>Customer:{item.cust_name}</Text>
                                        <Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>ReturnAmount:{item.Total_rtn_amt}</Text>
                                    </View></View></TouchableOpacity>


                        </View>

                    </View>

                )}></FlatList>





        </View>
    )
}

export default Salesreturn

const styles = StyleSheet.create({})