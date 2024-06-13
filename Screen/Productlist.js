import { StyleSheet, Text, View, FlatList, Image_path, Image, TouchableOpacity, SearchBar } from 'react-native'
import React, { useState, useEffect } from 'react'
//import { Fontisto } from '@expo/vector-icons';
//import { Entypo } from '@expo/vector-icons';
//import { Ionicons } from '@expo/vector-icons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
//import Fontistocons from 'react-native-vector-icons/Fontisto'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'

import { Server_url } from './Service/Api_Constants'

const Productlist = ({route, navigation }) => {
 const{sendscreen}=route.params;
    const [qty, setqty] = useState(1);
    const improving = () => {
        setqty(qty + 1);
    }
    const decreaseqty = () => {
        if (qty > 1) {
            setqty(qty - 1);
        }
    }


    const products11 = [{
        id: 1, name: 'Name:marielight',
        Stock: 'Stock:140',
        Purchase_price: 'Purchase_price:₹8',
        MRP: 'MRP:₹10', price: 'Price: ₹10',
        Image_path: require('../assets/m.jpeg')
    },

    {
        id: 2, name: ' Name:marybiscut',
        Stock: 'Stock:180',
        Purchase_price: 'Purchase_price:₹8',
        MRP: 'MRP:₹10', price: 'Price: ₹10', Image_path: require('../assets/m1.jpeg')
    },
    { id: 3, name: ' Name: parleg', Stock: 'Stock:100', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹10', Image_path: require('../assets/m2.jpeg') },
    { id: 4, name: ' Name: sunfeast', Stock: 'Stock:90', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹5', Image_path: require('../assets/m3.jpeg') },
    { id: 5, name: ' Name: 5050', Stock: 'Stock:140', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price :₹10', Image_path: require('../assets/m4.jpeg') },
    { id: 6, name: ' Name:milkbikis', Stock: 'Stock:200', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹10', Image_path: require('../assets/m6.jpeg'), },
    { id: 7, name: ' Name: Bour bon', Stock: 'Stock:140', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹30', Image_path: require('../assets/m8.jpeg') },
    { id: 8, name: ' Name: Oreo', Stock: 'Stock:60', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹10', Image_path: require('../assets/m9.jpeg') },
    { id: 9, name: ' Name: Nutri choice', Stock: 'Stock:70', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹10', Image_path: require('../assets/m10.jpeg') },
    { id: 10, name: ' Name: Yum yum', Stock: 'Stock:40', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹10', Image_path: require('../assets/m11.jpeg') },
    { id: 11, name: ' Name: Galaxy', Stock: 'Stock:30', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹10', Image_path: require('../assets/m12.jpeg') },
    { id: 12, name: ' Name: Dairymilk', Stock: 'Stock:20', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹10', Image_path: require('../assets/m18.jpeg') },
    { id: 13, name: ' Name: Kitket', Stock: 'Stock:40', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹10', Image_path: require('../assets/m15.jpeg') },
    { id: 14, name: ' Name: Snickers', Stock: 'Stock:10', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹10', Image_path: require('../assets/m20.jpeg') },
    { id: 15, name: ' Name: Darkchoclate', Stock: 'Stock:25', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹10', Image_path: require('../assets/m21.jpeg') },
    { id: 16, name: ' Name: 5start', Stock: 'Stock:20', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹10', Image_path: require('../assets/m22.jpeg') },
    { id: 17, name: ' Name: Milkybar', Stock: 'Stock:20', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹10', Image_path: require('../assets/m23.jpeg') },
    { id: 18, name: ' Name: shots', Stock: 'Stock:20', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'one box Price: ₹116', Image_path: require('../assets/m24.jpeg') },
    { id: 19, name: ' Name: Mumch', Stock: 'Stock:20', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹10', Image_path: require('../assets/m25.jpeg') },
    { id: 20, name: ' Name: kurkure', Stock: 'Stock:20', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹10', Image_path: require('../assets/m27.jpeg') },
    { id: 21, name: ' Name: Lays', Stock: 'Stock:20', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹10', Image_path: require('../assets/m28.jpeg') },
    { id: 22, name: ' Name: Bingo', Stock: 'Stock:20', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹10', Image_path: require('../assets/m29.jpeg') },
    { id: 23, name: ' Name: Bingo Tangles', Stock: 'Stock:20', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹10', Image_path: require('../assets/m30.jpeg') },
    { id: 24, name: ' Name: icecreams', Stock: 'Stock:20', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹10', Image_path: require('../assets/m31.jpeg') },
    { id: 25, name: ' Name: cone icecreamsallflavour', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', Stock: 'Stock:20', price: 'Price: ₹50', Image_path: require('../assets/m32.jpeg') },
    { id: 28, name: ' Name: BrownRice', Stock: 'Stock:20', Quantity: 'Quantity 1KG', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹105', Image_path: require('../assets/m33.jpeg') },
    { id: 29, name: ' Name: Basmati Rice', Stock: 'Stock:20', Quantity: 'Quantity 1KG', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹133', Image_path: require('../assets/m35.jpeg') },
    { id: 30, name: ' Name: JasminRice', Stock: 'Stock:20', Quantity: 'Quantity 1KG', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹50', Image_path: require('../assets/m36.jpeg') },
    { id: 31, name: ' Name:  mograrice', Stock: 'Stock:20', Quantity: 'Quantity 1KG', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹50', Image_path: require('../assets/m37.jpeg') },
    { id: 32, name: ' Name:Bamboo rice', Stock: 'Stock:20', Quantity: 'Quantity 1KG', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹200', Image_path: require('../assets/m38.jpeg') },
    { id: 33, name: ' Name: Black rice', Stock: 'Stock:20', Quantity: 'Quantity 1KG', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹300', Image_path: require('../assets/m39.jpeg') },
    { id: 34, name: ' Name: Red rice', Stock: 'Stock:20', Quantity: 'Quantity 1KG', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹120', Image_path: require('../assets/m40.jpeg') },
    { id: 35, name: ' Name: White rice', Stock: 'Stock:20', Quantity: 'Quantity 1KG', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹20', Image_path: require('../assets/m41.jpeg') },
    { id: 36, name: ' Name: Split gram', Stock: 'Stock:20', Quantity: 'Quantity 1KG', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹120', Image_path: require('../assets/m42.jpeg') },
    { id: 37, name: ' Name: Bengal gram ', Stock: 'Stock:20', Quantity: 'Quantity 1KG', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹80', Image_path: require('../assets/m43.jpeg') },
    { id: 38, name: ' Name:  Split/Whole Black gram', Stock: 'Stock:20', Quantity: 'Quantity 1KG', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹110', Image_path: require('../assets/m44.jpeg') },
    { id: 39, name: ' Name: Chickpeas (white) ', Stock: 'Stock:20', Quantity: 'Quantity 1KG', Purchase_price: 'Purchase_price:₹8', MRP: 'MRP:₹10', price: 'Price: ₹140', Image_path: require('../assets/m46.jpeg') },


    ]



    const [products, setProducts] = useState('');
    const [selected, set_Selected] = useState([]);
    const filter_item = () => {
        const selected_item = products.filter(item =>
            item.temp_qty > 0
        )
        // alert(selected_item.length)
        set_Selected(selected_item);
        navigation.navigate(sendscreen,{items:selected_item})
    }

    const get_item_list = () => {

        const itemlistparam = {
            Company_name: "POS",
            category_code: 0

        };

        fetch(Server_url + '/api/pos/Items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(itemlistparam),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Item List data:', data);
                setProducts(data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    useEffect(() => {
        if (!products) {
            get_item_list()
        }
    })

    const handleprss = ((item) => {
        //  alert(item.item_name)
        const updated_data = products.map((a) =>
            a.item_name === item.item_name ?
                { ...a, temp_qty: item.temp_qty + 1 } : a
        );
        setProducts(updated_data)
        
    })

    const handleprss_decrease = ((item) => {
        //  alert(item.item_name)
        const updated_data = products.map((a) =>
            a.item_name === item.item_name && item.temp_qty > 0 ?
                { ...a, temp_qty: item.temp_qty - 1 } : a
        );
        setProducts(updated_data)
        
    })    
        



    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>

            {/*<ImageBackground source={require('../assets/pc9.jpeg')}
                style={{ width: '100%', height: '100%', borderTopLeftRadius: 10 }}>*/}



            <View style={{
                flexDirection: 'row',
                width: '90%', height: 45, backgroundColor: 'black', marginTop: 20,
                marginLeft: 20,
                // borderRadius: 10,
                borderColor: 'gold', borderBottomWidth: 0.9
            }}>
                <View style={{ marginLeft: 10, marginTop: 5 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Dashboard') }}>
                        < FontAwesomeIcon name="arrow-circle-o-left" size={34} color="white" />
                    </TouchableOpacity>
                </View>
                <Text style={{
                    fontSize: 23, fontWeight: 'bold'
                    , marginLeft: 60, color: 'white', marginTop: 5
                }}>
                    Productlist
                </Text>
                <View style={{ flexDirection: 'row', marginLeft: 70, marginTop: 5 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Searchproduct') }}>
                        <IoniconsIcon name="search" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('ProductAdd') }}>
                        <EntypoIcon name="add-to-list" size={30} color="white"
                            style={{ marginLeft: 20 }} />
                    </TouchableOpacity>
                </View>

            </View>

            <View style={{ flex: 1 }} >



                <FlatList
                    data={products}
                    keyExtractor={(item) => item.item_code
                    }

                    renderItem={({ item }) => (



                        <TouchableOpacity onPress={(item) => navigation.navigate('Bill', { item: item })}>
                            <View style={{
                                backgroundColor: '#17181B', width: '95%', height: 200, marginLeft: 10,
                                margin: 10, borderRadius: 20, borderBottomWidth: 1,
                                borderTopWidth: 1,
                                borderLeftWidth: 1, borderRightWidth: 1,
                                borderEndWidth: 1, flexDirection: 'row', borderColor: 'gold'
                            }}>

                                <Image
                                    source={{ uri: item.Image_path }}
                                    style={{
                                        height: '90%',
                                        width: '50%', marginLeft: 10, marginTop: 10
                                    }} />



                                <View style={{ marginLeft: 9, width: 170 }}>
                                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'white' }}>Name:{item.item_name}</Text>
                                    <Text style={{ fontSize: 18, color: 'white' }}>Stock:{item.Opening_stock}</Text>
                                    <Text style={{ fontSize: 18, color: 'white' }}>Purchase price:{item.purchase_price}</Text>
                                    <Text style={{ fontSize: 18, color: 'white' }}>MRP:{item.Mrp}</Text>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'gold' }}>selling price:{item.selling_price * qty}</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                                        <View >

                                            <TouchableOpacity onPress={()=>handleprss_decrease(item)}>
                                                <EntypoIcon name='squared-minus' size={24} color='gold'
                                                    style={{ marginLeft: 6 }} />

                                            </TouchableOpacity>
                                        </View>

                                        <Text style={{ color: 'white', fontSize: 20 }}> {item.temp_qty}</Text>
                                        <View style={{}}>
                                            <TouchableOpacity onPress={()=>handleprss(item)}>
                                                <EntypoIcon name='squared-plus' size={24} color='gold'
                                                    style={{ marginLeft: 10 }} />

                                            </TouchableOpacity>
                                        </View>
                                        
                                    </View></View>
                                   
                            </View>


                        </TouchableOpacity>




                    )}> </FlatList>
                     <View style={{height:'10%',width:'90%',marginLeft:20}}>
                                        <TouchableOpacity onPress={filter_item}>
                                            <Text style={{color:'gold',fontWeight:'bold',fontSize:20
                                            ,marginLeft:140,marginTop:30,borderWidth:2,
                                            borderColor:'white',marginRight:90,paddingLeft:20}}>ADDTOBILL</Text>
                                        </TouchableOpacity>
                                    </View>



            </View>


        </View>

    )
}

export default Productlist

const styles = StyleSheet.create({})