import { StyleSheet, Text, TextInput, View, Image, Alert, Button, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
//import { MaterialIcons } from '@expo/vector-icons';
//import { Ionicons } from '@expo/vector-icons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { Server_url } from './Service/Api_Constants'
import { add_item } from './Service/Api'
import { SelectList } from 'react-native-dropdown-select-list'
//import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons'
const ProductAdd = ({ navigation }) => {
  const [itemcode, setitemcode] = useState('');
  const [itemName, setitemname] = useState('');
  const [purchase_price, setpurchase_price] = useState(0);
  const [selling_price, setselling_price] = useState(0);
  const [Mrp, setMrp] = useState(0);
  const [Distributor, setDistributor] = useState('');
  const [Opening_stock, setOpening_stock] = useState(0);
  const [selected, setSelected] = React.useState("");
  
  
  
  const data = [
    { key: '1', value: 'gopi' },
    { key: '2', value: 'vinoth' },
    { key: '3', value: 'Kavimithran' },
    { key: '4', value: 'priyas com' },
    { key: '5', value: 'ramsay' }
    
  ]
  //const [Add, setAdd] = useState('');
  const param = {
    item_name: itemName,
    purchase_price: purchase_price,
    selling_price: selling_price,
    MRP: Mrp,
    dist_code: 1,
    opening_stk: Opening_stock,
    category: 0,
    unit: 'unit'
  }

  const add_item_11 = () => {
    fetch(Server_url + '/api/pos/Add/Item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Item ist daata:', data);
        //setProducts(data)
        //setflatlistdata(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <View style={{ flex: 1, marginTop: 10, backgroundColor: 'black' }}>
      <View style={{//backgroundColor:"white",
        marginTop: 20, color: 'black', marginLeft: 20, borderRadius: 10,
        // borderBottomWidth: 2, borderTopWidth: 5,
        //borderLeftWidth: 5, borderRightWidth: 5,
        //borderEndWidth: 2,marginRight:20,
        height: 50, width: '90%', flexDirection: 'row'
      }}>

        <View style={{ flexDirection: 'row', marginTop: 8, marginLeft: 10 }}>
          <TouchableOpacity onPress={() => { navigation.navigate('Productlist') }}>
            <FontAwesomeIcon name="arrow-circle-o-left" size={34} color="gold" />
          </TouchableOpacity>
        </View>


        {/*<View style={{flexDirection:'row',marginLeft:50,marginTop:8}}>
        <MaterialIconsIcon name="add-shopping-cart" size={35} color="white" />
    </View>*/}
        <Text style={{
          fontSize: 26, fontWeight: 'bold', marginLeft: 60, color: 'white',
          marginTop: 8
        }}>ADDPRODUCT</Text>
      </View>
      <View>

      </View>
      <ScrollView>
        <View style={{
          marginLeft: 100, marginTop: 20, borderRadius: 10,
          borderBottomWidth: 1, borderTopWidth: 1,
          borderLeftWidth: 1, borderRightWidth: 1,
          borderEndWidth: 1, marginRight: 100, borderColor: 'white', width: '40%', height: 120
        }}>
          {/*
          <Image source={{ uri: Image_path }}
            style={{ width: 150, height: 100, marginLeft: 5, marginTop: 10 }}></Image>
      */}
        </View>
        <View >
          <View style={{ flexDirection: 'row' }}>
            <View style={{
              marginTop: 10, marginLeft: 10, width: '46%', height: 70,
              borderBottomWidth: 0.9, borderLeftWidth: 0.9, borderEndWidth: 0.9, borderTopWidth: 0.9, borderColor: 'white'
            }}>
              <View style={{ marginTop: 10, marginRight: 5, }}>
                <View style={{
                  marginLeft: 15, marginTop: 5, marginRight: 5, marginBottom: 10, alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Text style={styles.tablehead}> ItemCode
                  </Text>
                </View>
              </View>
            </View>
            <View style={{
              marginTop: 10, width: '46%', height: 70,
              borderBottomWidth: 0.9, borderLeftWidth: 0.5, borderEndWidth: 0.8, borderTopWidth: 0.9, borderColor: 'white'
            }}>
              <View style={{ marginTop: 10, marginRight: 5 }}>
                <View style={{
                  marginLeft: 20, marginTop: 5, marginRight: 5, marginBottom: 10,
                  alignItems: 'center', justifyContent: 'center',
                }}>
                  <Text style={styles.tablehead}> ItemName
                  </Text>
                </View>
              </View>



            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{
              width: '46%', height: 50, marginLeft: 10,
              borderBottomWidth: 0.9, borderLeftWidth: 0.9, borderEndWidth: 0.9,
              borderTopWidth: 0.9, borderColor: 'white', backgroundColor: '#202124'
            }}>
              <View style={{
                marginTop: 5, marginRight: 5, marginLeft: 5,
                width: '90%', height: 45
              }}>
                <TextInput placeholder="0000" onChangeText={value => setitemcode(value)}
                  placeholderTextColor={"grey"} keyboardType={'numeric'} style={{ marginLeft: 25, fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                </TextInput>
              </View>
            </View>
            <View style={{
              width: '46%', height: 50,
              borderBottomWidth: 0.9, borderLeftWidth: 0.9, borderEndWidth: 0.9,
              borderTopWidth: 0.9, borderColor: 'white', backgroundColor: '#202124'
            }}>
              <View style={{ marginTop: 5, marginRight: 5, marginLeft: 10, width: '90%', height: 45 }}>
                <TextInput placeholder="ItemName" onChangeText={value => setitemname(value)} placeholderTextColor={"grey"} style={{ marginLeft: 25, fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                </TextInput>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <View style={{
              marginTop: 10, width: '42%', height: 50, borderColor: 'white',
              borderBottomWidth: 0.9, borderLeftWidth: 0.9, borderEndWidth: 0.9, borderTopWidth: 0.9,
            }}>
              <View style={{ marginTop: 10, marginRight: 5 }}>

                <Text style={styles.tablehead}> PurchasePrice
                </Text>

              </View>
            </View>
            <View style={{
              marginTop: 10, width: '35%', height: 50, borderColor: 'white',
              borderBottomWidth: 0.9, borderLeftWidth: 0.9, borderEndWidth: 0.9, borderTopWidth: 0.9,
            }}>
              <View style={{ marginTop: 10, marginRight: 5 }}>

                <Text style={styles.tablehead}> SellingPrice
                </Text>

              </View>
            </View>
            <View style={{
              marginTop: 10, width: '25%', height: 50, borderColor: 'white',
              borderBottomWidth: 0.9, borderLeftWidth: 0.9, borderEndWidth: 0.9, borderTopWidth: 0.9,
            }}>
              <View style={{ marginTop: 10, marginRight: 5 }}>

                <Text style={styles.tablehead}> MRP
                </Text>

              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{
              width: '42%', height: 50, borderColor: 'white', backgroundColor: '#202124',
              borderBottomWidth: 0.9, borderLeftWidth: 0.9, borderEndWidth: 0.9, borderTopWidth: 0.9,
            }}>
              <View style={{ marginTop: 5, marginRight: 5, marginLeft: 10, width: '90%', height: 45 }}>
                <TextInput placeholder="0000" placeholderTextColor={"grey"} keyboardType={'numeric'}
                  onChangeText={value => setpurchase_price(value)} style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                </TextInput>
              </View>
            </View>
            <View style={{
              width: '35%', height: 50, borderColor: 'white', backgroundColor: '#202124',
              borderBottomWidth: 0.9, borderLeftWidth: 0.9, borderEndWidth: 0.9, borderTopWidth: 0.9,
            }}>
              <View style={{ marginTop: 5, marginRight: 5, marginLeft: 10, width: '90%', height: 45 }}>
                <TextInput placeholder="0000" onChangeText={value => setselling_price(value)} placeholderTextColor={"grey"} keyboardType={'numeric'} style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                </TextInput>
              </View>
            </View>
            <View style={{
              width: '25%', height: 50, borderColor: 'white', backgroundColor: '#202124',
              borderBottomWidth: 0.9, borderLeftWidth: 0.9, borderEndWidth: 0.9, borderTopWidth: 0.9,
            }}>
              <View style={{ marginTop: 5, marginRight: 5, marginLeft: 20, width: '90%', height: 45 }}>
                <TextInput placeholder="0000" onChangeText={value => setMrp(value)} placeholderTextColor={"grey"} keyboardType={'numeric'} style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                </TextInput>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <View style={{
              marginTop: 10, marginLeft: 10, width: 190, height: 70, borderColor: 'white',
              borderBottomWidth: 0.9, borderLeftWidth: 0.9, borderEndWidth: 0.9, borderTopWidth: 0.9,
            }}>
              <View style={{ marginTop: 10, marginRight: 5 }}>
                <View style={{ marginLeft: 15, marginTop: 5, marginRight: 5, marginBottom: 10, alignItems: 'center', justifyContent: 'center', }}>
                  <Text style={styles.tablehead}> Distributor
                  </Text>
                </View>
              </View>
            </View>
            <View style={{
              marginTop: 10, width: 190, height: 70,
              borderBottomWidth: 0.9, borderLeftWidth: 0.5, borderEndWidth: 0.3, borderTopWidth: 0.9, borderColor: 'white'
            }}>
              <View style={{ marginTop: 10, marginRight: 5 }}>
                <View style={{ marginLeft: 20, marginTop: 5, marginRight: 5, marginBottom: 10, alignItems: 'center', justifyContent: 'center', }}>
                  <Text style={styles.tablehead}> Openingstock
                  </Text>
                </View>
              </View>



            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{
              width: 190, height: 50, marginLeft: 10, borderColor: 'white', backgroundColor: '#202124',
              borderBottomWidth: 0.9, borderLeftWidth: 0.9, borderEndWidth: 0.9, borderTopWidth: 0.9,
            }}>
              <View style={{marginTop: 5, marginRight: 5, marginLeft: 5, width: '90%', height: 45}}>
                {/*<TextInput placeholder="Name" onChangeText={value => setDistributor(value)} placeholderTextColor={"grey"} style={{ marginLeft: 20, fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                </TextInput>*/}<SelectList
              setSelected={(val) => setSelected(val)}
              placeholder='Select type'
              data={data}
              save="value"
              dropdownTextStyles={{color:'black',}}
              dropdownStyles={{backgroundColor:'white'}}
              
             
              />
              </View>
            </View>
            <View style={{
              width: 190, height: 50, borderColor: 'white', backgroundColor: '#202124',
              borderBottomWidth: 0.9, borderLeftWidth: 0.9, borderEndWidth: 0.9, borderTopWidth: 0.9,
            }}>
              <View style={{ marginTop: 5, width: '90%', height: 45, marginRight: 5, marginLeft: 10 }}>
  
                <TextInput placeholder="0000" onChangeText={value => setOpening_stock(value)} placeholderTextColor={"grey"} keyboardType={'numeric'} style={{ marginLeft: 20, fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                </TextInput>

              </View>

            </View>


          </View>

        </View>
        <View style={{ marginLeft: 120, marginRight: 120, marginTop: 50 }}>
          <Button title='Submit' onPress={()=>add_item(itemName,purchase_price,
            selling_price,Mrp,Opening_stock)} />
        </View>
      </ScrollView>

    </View>


  )
}

export default ProductAdd

const styles = StyleSheet.create({
  tablehead: {
    marginLeft: 15,

    marginRight: 5, marginBottom: 10, alignItems: 'center',
    justifyContent: 'center', fontWeight: 'bold', fontSize: 20, color: 'white'
  },
  tableheadstyle: {
    fontSize: 20, fontWeight: 'bold'
  }
})