import { StyleSheet, Text, View ,FlatList,Image,TouchableOpacity} from 'react-native'
import React,{useState,useEffect} from 'react'
import { SearchBar } from 'react-native-elements';
import { Server_url } from './Service/Api_Constants'
import EntypoIcon from 'react-native-vector-icons/Entypo'


const Searchproduct = ({ navigation }) => {
    const products11 = [
        { id: 1, name: 'marielight', 
        Stock: '140', 
        Purchase_price:'₹8',
        MRP:'₹10',price: ' ₹10', 
        Image_path: require('../assets/m.jpeg') },

        { id: 2, name: ' marybiscut',
         Stock: '180',
         Purchase_price:'₹8',
         MRP:'₹10', price: ' ₹10', Image_path: require('../assets/m1.jpeg') },
        { id: 3, name: '  parleg', Stock: ':100', Purchase_price:'₹8',MRP:'₹10', price: '₹10', Image_path: require('../assets/m2.jpeg') },
        { id: 4, name: '   sunfeast', Stock: '90',Purchase_price:'₹8',MRP:'₹10',  price: ' ₹5', Image_path: require('../assets/m3.jpeg') },
        { id: 5, name: '   5050', Stock: '140',Purchase_price:'₹8',MRP:'₹10',  price: '₹10', Image_path: require('../assets/m4.jpeg') },
        { id: 6, name: '   milkbikis', Stock: '200',Purchase_price:'₹8',MRP:'₹10',  price: ' ₹10', Image_path: require('../assets/m6.jpeg'), },
        { id: 7, name: '   Bour bon', Stock: '140',Purchase_price:'₹8',MRP:'₹10',  price: ' ₹30', Image_path: require('../assets/m8.jpeg') },
        { id: 8, name: '   Oreo', Stock: '60',Purchase_price:'₹8',MRP:'₹10',  price: ' ₹10', Image_path: require('../assets/m9.jpeg') },
        { id: 9, name: '   Nutri choice', Stock: '70',Purchase_price:'₹8',MRP:'10',  price: ' ₹10', Image_path: require('../assets/m10.jpeg') },
        { id: 10, name: ' Yum yum', Stock: '40',Purchase_price:'₹8',MRP:'₹10',  price: ' ₹10', Image_path: require('../assets/m11.jpeg') },
        { id: 11, name: ' Galaxy', Stock: '30', Purchase_price:'₹8',MRP:'₹10', price: ' ₹10', Image_path: require('../assets/m12.jpeg') },
        { id: 12, name: ' Dairymilk', Stock: '20',Purchase_price:'₹8',MRP:'₹10',  price: ' ₹10', Image_path: require('../assets/m18.jpeg') },
        { id: 13, name: ' Kitket', Stock: '40',Purchase_price:'₹8',MRP:'₹10',  price: ' ₹10', Image_path: require('../assets/m15.jpeg') },
        { id: 14, name: ' Snickers', Stock: '10',Purchase_price:'₹8',MRP:'₹10',  price: ' ₹10', Image_path: require('../assets/m20.jpeg') },
        { id: 15, name: ' Darkchoclate', Stock: '25',Purchase_price:'₹8',MRP:'₹10',  price: ' ₹10', Image_path: require('../assets/m21.jpeg') },
        { id: 16, name: ' 5start', Stock: '20',Purchase_price:'₹8',MRP:'₹10',  price: ' ₹10', Image_path: require('../assets/m22.jpeg') },
        { id: 17, name: ' Milkybar', Stock: '20',Purchase_price:'₹8',MRP:'₹10',  price: ' ₹10', Image_path: require('../assets/m23.jpeg') },
        { id: 18, name: ' shots', Stock: '20', Purchase_price:'₹8',MRP:'₹10', price: ' ₹116', Image_path: require('../assets/m24.jpeg') },
        { id: 19, name: 'Mumch', Stock: '20', Purchase_price:'₹8',MRP:'₹10', price: '₹10', Image_path: require('../assets/m25.jpeg') },
        { id: 20, name: ' kurkure', Stock: '20',Purchase_price:'₹8',MRP:'₹10',  price: ' ₹10', Image_path: require('../assets/m27.jpeg') },
        { id: 21, name: ' Lays', Stock: '20', Purchase_price:'₹8',MRP:':₹10', price: ' ₹10', Image_path: require('../assets/m28.jpeg') },
        { id: 22, name: ' Bingo', Stock: '20',Purchase_price:'₹8',MRP:'₹10',  price: ' ₹10', Image_path: require('../assets/m29.jpeg') },
        { id: 23, name: ' Bingo Tangles', Stock: '20', Purchase_price:'₹8',MRP:'₹10', price: ' ₹10', Image_path: require('../assets/m30.jpeg') },
        { id: 24, name: ' icecreams', Stock: '20',Purchase_price:'₹8',MRP:'₹10',  price: ' ₹10', Image_path: require('../assets/m31.jpeg') },
        { id: 25, name: ' cone icecreamsallflavour',Purchase_price:'₹8',MRP:'₹10',  Stock: '20', price: '₹50', Image_path: require('../assets/m32.jpeg') },
        { id: 28, name: 'BrownRice', Stock: 'Stock:20', Quantity: 'Quantity 1KG',Purchase_price:'Purchase_price:₹8',MRP:'MRP:₹10',  price: 'Price: ₹105', Image_path: require('../assets/m33.jpeg') },
        { id: 29, name: ' Basmati Rice', Stock: 'Stock:20', Quantity: 'Quantity 1KG', Purchase_price:'Purchase_price:₹8',MRP:'MRP:₹10', price: 'Price: ₹133', Image_path: require('../assets/m35.jpeg') },
        { id: 30, name: ' JasminRice', Stock: 'Stock:20', Quantity: 'Quantity 1KG', Purchase_price:'Purchase_price:₹8',MRP:'MRP:₹10', price: 'Price: ₹50', Image_path: require('../assets/m36.jpeg') },
        { id: 31, name: ' mograrice', Stock: 'Stock:20', Quantity: 'Quantity 1KG', Purchase_price:'Purchase_price:₹8',MRP:'MRP:₹10', price: 'Price: ₹50', Image_path: require('../assets/m37.jpeg') },
        { id: 32, name: ' Bamboo rice', Stock: 'Stock:20', Quantity: 'Quantity 1KG', Purchase_price:'Purchase_price:₹8',MRP:'MRP:₹10', price: 'Price: ₹200', Image_path: require('../assets/m38.jpeg') },
        { id: 33, name: 'Black rice', Stock: 'Stock:20', Quantity: 'Quantity 1KG', Purchase_price:'Purchase_price:₹8',MRP:'MRP:₹10', price: 'Price: ₹300', Image_path: require('../assets/m39.jpeg') },
        { id: 34, name: 'Red rice', Stock: 'Stock:20', Quantity: 'Quantity 1KG',Purchase_price:'Purchase_price:₹8',MRP:'MRP:₹10',  price: 'Price: ₹120', Image_path: require('../assets/m40.jpeg') },
        { id: 35, name: 'White rice', Stock: 'Stock:20', Quantity: 'Quantity 1KG',Purchase_price:'Purchase_price:₹8',MRP:'MRP:₹10',  price: 'Price: ₹20', Image_path: require('../assets/m41.jpeg') },
        { id: 36, name: 'Split gram', Stock: 'Stock:20', Quantity: 'Quantity 1KG',Purchase_price:'Purchase_price:₹8',MRP:'MRP:₹10',  price: 'Price: ₹120', Image_path: require('../assets/m42.jpeg') },
        { id: 37, name: 'Bengal gram ', Stock: 'Stock:20', Quantity: 'Quantity 1KG',Purchase_price:'Purchase_price:₹8',MRP:'MRP:₹10',  price: 'Price: ₹80', Image_path: require('../assets/m43.jpeg') },
        { id: 38, name: 'split/Whole Black gram', Stock: 'Stock:20', Quantity: 'Quantity 1KG',Purchase_price:'Purchase_price:₹8',MRP:'MRP:₹10',  price: 'Price: ₹110', Image_path: require('../assets/m44.jpeg') },
        { id: 39, name: '  Chickpeas (white) ', Stock: 'Stock:20', Quantity: 'Quantity 1KG', Purchase_price:'Purchase_price:₹8',MRP:'MRP:₹10', price: 'Price: ₹140', Image_path: require('../assets/m46.jpeg') },

    
    ];
    const [products, setProducts] = useState('');
    const [selected, set_Selected] = useState([]);
    const filter_item = () => {
        const selected_item = products.filter(item =>
            item.temp_qty > 0
        )
        // alert(selected_item.length)
        set_Selected(selected_item);
        navigation.navigate('Bill',{items:selected_item})
    }

    const handleprss = ((item) => {
        //  alert(item.item_name)
        const updated_data = products.map((a) =>
            a.item_name === item.item_name ?
                { ...a, temp_qty: item.temp_qty + 1 } : a
        );
        setProducts(updated_data)
        setflatlistdata(updated_data)
        
    })

    const handleprss_decrease = ((item) => {
        //  alert(item.item_name)
        const updated_data = products.map((a) =>
            a.item_name === item.item_name && item.temp_qty > 0 ?
                { ...a, temp_qty: item.temp_qty - 1 } : a
        );
        setProducts(updated_data)
        setflatlistdata(updated_data)
        
    })    
        



    const get_item_list = () => {

        const itemlistparam = {
            Company_name: "POS",
            category_code: 0,
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
                setflatlistdata(data)
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


    const [searchword, setSearchWord] = useState("");
    const [FlatListdata, setflatlistdata] = useState([]);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = products.filter(function (item) {
                const itemData = item.item_name ? item.item_name.toUpperCase() : "".toUpperCase();
                //  alert(itemData)
                const textData = text.toUpperCase();
                
                return itemData.indexOf(textData) > -1;
            });

            //alert(newData[0].name);

            setflatlistdata(newData);
            setSearchWord(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setflatlistdata(products);
            setSearchWord(text);
        }
    };

    return (
        
        <View style={{flex:1,backgroundColor:'black'}}>
            <SearchBar
                placeholder="Search"
                onChangeText={(text) => searchFilterFunction(text)}
                value={searchword}
                style={{backgroundColor: "black"}}
                containerStyle={{backgroundColor: 'black' }}
                inputContainerStyle={{backgroundColor:'black'
                ,borderWidth:1,borderColor:'gold',borderBottomWidth:1,borderRadius:10}}
                inputStyle={{color:'white',fontSize:20,fontWeight:'bold'}}
                searchIcon={{size:30}}
                // cancelIcon={true}
                //lightTheme={true}
            
            />

            <View style={{flex:1}}>
            <FlatList
                    data={FlatListdata}
                    keyExtractor={(item) => item.item_code
                    }

                    renderItem={({ item }) => (



                        <TouchableOpacity onPress={(item) => navigation.navigate('Bill', { item: item })}>
                            <View style={{
                                backgroundColor: '#17181B', width: '95%', height: 170, marginLeft: 10,
                                margin: 10, borderRadius: 20, borderBottomWidth: 1,
                                borderTopWidth: 1,
                                borderLeftWidth: 1, borderRightWidth: 1,
                                borderEndWidth: 1, flexDirection: 'row', borderColor: 'gold'
                            }}>

                                <Image
                                    source={{uri:item.Image_path}}
                                    style={{
                                        height: 140,
                                        width: '50%', marginLeft: 10, marginTop: 10
                                    }} />



                                <View style={{ marginLeft: 9, width: 170 }}>
                                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'white' }}>Name:{item.item_name}</Text>
                                    <Text style={{ fontSize: 18, color: 'white' }}>Stock:{item.Opening_stock}</Text>
                                    <Text style={{ fontSize: 18, color: 'white' }}>Purchase price:{item.purchase_price}</Text>
                                    <Text style={{ fontSize: 18, color: 'white' }}>MRP:{item.Mrp}</Text>
                                    
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'gold' }}>selling price:{item.selling_price}</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                                        <View >

                                            <TouchableOpacity onPress={handleprss_decrease}>
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
                                        
                                    </View>
                             </View>
                                
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
        
    );
};

export default Searchproduct

const styles = StyleSheet.create({})