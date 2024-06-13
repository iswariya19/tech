import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, TextInput } from 'react-native'
import React, { useState,useEffect } from 'react'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Server_url } from './Service/Api_Constants'

const Bill_Details = [
  { id: 1, name: 'dairymilk', Quantity: 100, Price: 10, Total_Rate: 1000 },
  { id: 2, name: 'milkybar', Quantity: 100, Price: 10, Total_Rate: 1000 },
  { id: 3, name: 'milkybar', Quantity: 100, Price: 10, Total_Rate: 1000 },
  { id: 4, name: 'milkybar', Quantity: 100, Price: 10, Total_Rate: 1000 },
]

const Bill = ({ navigation,route }) => {
  const screen='Bill';
  const [custname, setcustname] = useState('');
  const [phoneno, setphoneno] = useState(0);
  const [billno,setBillno]=useState();
  const [tax,setTax]=useState(0);
  const [total,setTotal]=useState(0);
  const [msgshow, setMessageshow] = useState(false);
  const [msgcontent, setMsgcontent] = useState('');
  const [msgshow1, setMessageshow1] = useState(false);
  const [msgcontent1, setMsgcontent1] = useState('');
  const tax_rate=0.05;
  const[totalAmount,settotalAmount]=useState(0);
  const calTax=()=>{
    let taxtotal = 0;
    for (let i = 0; i < items.length; i++) {
      //if (items[i].price > 20) {
        taxtotal +=( items[i].temp_qty*items[i].selling_price*items[i].tax_amount);
      //}
    }
   
    return taxtotal
  }
  const tta=(total)=>{
    const taxAmount = calTax();
    return total + taxAmount;
    //settotalAmount(totalAmount)

  }
  

  const add_bill = () => {
    alert('check')
    //console.log(phoneno);
    //console.log(selected);
    const param = {
      //Company_name: "POS",
      //category_code: 0
      cust_name: custname,
      phone_no: phoneno,
      total_amt: tta(total),
      tax: calTax(),
      payment_method: 'cash'

    };
    fetch(Server_url + '/api/pos/Add/Bill', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    })
      .then(response => response.json())
      .then(data => {
        console.log('added  daata:', data);
        add_bill_item_details(data[0].bill_no)
        //setProducts(data)
        //setflatlistdata(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  //api things
  const add_bill_item_details = (item_bill_no) => {
    alert('item check')
    const param = {
      item_details : items,
      bill_no :item_bill_no

    };
    fetch(Server_url + '/api/pos/add/bill/detail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    })

      .then(response => response.json())
      .then(data => {
        console.log('added  daata:', data);
        //setProducts(data)
        //setflatlistdata(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  const get_Bill = () => {
    //alert('bill');
    fetch(Server_url + '/api/pos/View/latest/Billno', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    })
      .then(response => response.json())
      .then(data => {
        console.log('bill no:', data[0].bill_no);
        setBillno(data[0].bill_no)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  useEffect(() => {
    if (!billno) {
        get_Bill()
    }
})

  const {items} = route.params;
  var today_date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var yes = today_date + "/" + month + "/" + year
  
  //var hours = new Date().getHours();
  //var min = new Date().getMinutes();
  //var sec = new Date().getSeconds();
  //var today_time=hours+":"+min+":"+sec
  const Save_validation = () => {
    if (custname === '') {
      setMsgcontent('plese enter custname')
      setMessageshow(true)
      //alert('please enter the name');
    }


    else if (phoneno === '') {
      setMessageshow(false)
      setMsgcontent1('plese enter phoneno')
      setMessageshow1(true)

    }

    else if (phoneno.length !== 10) {
      setMsgcontent1('plese enter 10 digit phoneno')
      setMessageshow1(true)

      //alert('please enter the name');
    }
    else if (phoneno < 6000000000) {
      setMsgcontent1('plese enter validphoneno')
      setMessageshow1(true)

    }
    else {
      setMessageshow(false)
      setMessageshow1(false)
      add_bill()
      navigation.navigate('Dashboard')
      
    }
  }
  
  const calculateTotal = () => {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
      //if (items[i].price > 20) {
        sum +=( items[i].temp_qty*items[i].selling_price);
      //}
    }
    setTotal(sum);
  };


  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>

      <View style={{
        width: '90%', height: 45,// backgroundColor: 'black', 
        marginTop: 10, marginLeft: 20,
        borderRadius: 10,
        borderColor: 'gold'
        , borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1, borderRightWidth: 1,
        borderEndWidth: 1
      }}><View style={{ flexDirection: 'row' }}>
          <Image source={require('../assets/b11.jpeg')}
            style={{ width: 60, height: 40, borderRadius: 200 }}></Image>

          <Text style={{ fontSize: 30, fontWeight: 'bold', 
          marginLeft: 200, color: 'white' }}>Invoice</Text>

        </View>
      </View>
      <View style={{ marginLeft: 30, marginTop: 10, flexDirection: 'row' }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>BILL TO</Text>
        <View style={{
          backgroundColor: "white",
          color: 'gold', marginLeft: 100, borderRadius: 10,
          // borderBottomWidth: 2, borderTopWidth: 1,
          // borderLeftWidth: 1, borderRightWidth: 1,
          //borderEndWidth: 1,
          marginRight: 20, width: '40%', height: 35
        }}>
          <View style={{ flexDirection: 'row' }}>
            <TextInput placeholder="DATE"
              defaultValue={yes}

              style={{
                fontSize: 20,
                fontWeight: 'bold', marginLeft: 10,
                width: '70%', height: 40, marginTop: 5
              }}>

            </TextInput>
            <View style={{ marginLeft: 10, marginTop: 6 }}>
              <FontAwesome5Icon name="calendar-alt" size={24} color="black" />
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginLeft: 40, marginTop: 5, flexDirection: 'row' }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 7 }}>CustName</Text>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 7, marginLeft: 10 }}>:</Text>
        <TextInput placeholder='Cust_name' backgroundColor='#202124' color="white" 
        textAlign='center' 
          placeholderTextColor={"grey"}
          onChangeText={value=>{
            setMessageshow(false)
            setcustname(value)
          }}
          style={{ width: '60%', height: 40, marginLeft: 10 }}></TextInput>
      </View>
      {msgshow ?
        (<View>
          <Text style={{ marginLeft: 150, color: '#C0392B', fontWeight: 'bold' }}>{msgcontent}</Text>
        </View>) : null

      }
      <View style={{ marginLeft: 43, marginTop: 3, flexDirection: 'row' }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 7 }}>Phoneno </Text>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 7, marginLeft: 15 }}>:</Text>
        <TextInput placeholder='Phone_no' backgroundColor='#202124' color='white'
          textAlign='center' placeholderTextColor={"grey"} keyboardType={'numeric'} 
          maxLength={10}
          onChangeText={value=>{
            setMessageshow(false)
            setphoneno(value)
          }}
          
          style={{ width: '60%', height: 40, marginLeft: 15 }}></TextInput>
      </View>
      {msgshow1 ?
        (<View>
          <Text style={{ marginLeft: 150, color: '#C0392B', fontWeight: 'bold' }}>{msgcontent1}</Text>
        </View>) : null

      }

      <View style={{ marginLeft: 43, marginTop: 3, flexDirection: 'row' }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 7 }}>Billno</Text>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 7, marginLeft: 45 }}>:</Text>
        <Text style={{backgroundColor:'#202124', width: '60%', height: 40, marginLeft: 15,color:'white' ,textAlign:'center',fontSize:25}}>{billno}</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => { navigation.navigate('Productlist',{sendscreen:screen}) }}>
          <View style={{
            flexDirection: 'row', width: 140, height: 40, marginTop: 20,
            borderRadius: 10, borderColor: 'gold', borderWidth: 1, marginLeft: 20
          }}>

            <Text style={{
              fontSize: 20, fontWeight: 'bold', color: 'gold'
              , width: '60%', height: 40
            }}> Additem</Text>
            <FontistoIcon name='shopping-basket-add' color={'gold'} size={24}
              style={{ marginTop: 5 }} />
          </View>
        </TouchableOpacity>

        
      </View>

      <View style={{
        width: '96%',
        borderBottomWidth: 0.9, borderLeftWidth: 0.9, borderEndWidth: 0.9,
        borderTopWidth: 0.9,
        borderColor: 'gold', marginLeft: 10, marginTop: 20
      }} >
        <View style={{ flexDirection: 'row', backgroundColor: '#202124' }}>
          <View style={{
            marginLeft: 15, marginTop: 10, marginRight: 5, marginBottom: 10,
            alignItems: 'center', justifyContent: 'center'
          }}>
            <Text style={styles.tablehead}> Item
            </Text>
          </View>

          <View style={{
            marginLeft: 17, marginTop: 10, marginRight: 5,
            marginBottom: 10, alignItems: 'center', justifyContent: 'center'
          }}>
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
        height: 200, marginLeft: 10, width: '96%',
        borderBottomWidth: 0.9, borderLeftWidth: 0.9, borderEndWidth: 0.9, borderTopWidth: 0.9,
        borderColor: 'gold'
      }}>
        <FlatList
          data={items}
          keyExtrector={(item) => item.id}
          onContentSizeChange={calculateTotal}

          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row' }}>
              <View style={{ height: 30, width: 80, alignItems: 'flex-start', justifyContent: 'center' }}>
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ marginLeft: 10, fontWeight: 'bold', color: 'white' }}>{item.item_name}</Text>
                </View>
              </View>
              <View style={{ height: 30, width: 60, marginLeft: 20, marginTop: 5 }}>
                <Text style={{ marginLeft: 20, color: 'white' }}>{item.temp_qty}</Text>
              </View>
              <View style={{ height: 30, width: 80, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ marginLeft: 20, color: 'white' }}>{item.selling_price}</Text>
              </View>
              <View style={{ height: 30, width: 150, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ marginLeft: 20, color: 'white' }}>{item.temp_qty*item.selling_price}</Text>
              </View>

            </View>
          )}
        ></FlatList>
      </View>
      <View style={{ flexDirection: "row" }}>

        <View style={{ marginLeft: 50, width: '75%' }}>


          <View style={{
            marginLeft: 150, width: 60, height: 30, alignItems: 'center'
            , flexDirection: 'row',
          }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Tax</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginLeft: 40 }}>:</Text>
            {/*<TextInput placeholder='0000' color="white" textAlign='center' placeholderTextColor={"grey"}
              style={{ width: 100, height: 40, marginLeft: 10 }} ></TextInput>*/}
              <Text style={{ width: 100, height: 40, marginLeft: 10,marginTop:25,color:'white' }}>{calTax()}</Text>
          </View>
          <View style={{
            marginLeft: 150, width: 60, height: 30, alignItems: 'center'
            , flexDirection: 'row'
          }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Total</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginLeft: 30 }}>:</Text>
            {/*<TextInput placeholder='0000' color="white" textAlign='center' placeholderTextColor={"grey"}
              style={{ width: 100, height: 40, marginLeft: 10 }}
        value={total} ></TextInput>*/}
        <Text style={{ width: 100, height: 40, marginLeft: 10,marginTop:25,color:'white' }}>{tta(total)}</Text>
          </View>
          <View style={{
            marginLeft: 20, width: 90, height: 30, alignItems: 'center'
            , flexDirection: 'row'
          }}>

          </View>

        </View>

      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={Save_validation}>
            <View style={{
              flexDirection: 'row', width: '100%', height: 40,
              borderRadius: 10, borderColor: 'gold', borderBottomWidth: 2, borderTopWidth: 1,
              borderLeftWidth: 1, borderRightWidth: 1,
              borderEndWidth: 1, marginLeft: 20
            }}>

              <Text style={{
                fontSize: 20, fontWeight: 'bold', color: 'white',
                marginLeft: 40, marginTop: 5
              }} >SAVE</Text>
              <MaterialCommunityIconsIcon name='content-save-check-outline' color={'white'} size={24}
                style={{ marginTop: 5 }} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={Save_validation}>
            <View style={{
              flexDirection: 'row', width: '80%', height: 40,
              borderRadius: 10, borderColor: 'gold', borderBottomWidth: 2, borderTopWidth: 1,
              borderLeftWidth: 1, borderRightWidth: 1,
              borderEndWidth: 1, marginLeft: 80
            }}>

              <Text style={{
                fontSize: 20, fontWeight: 'bold', color: 'white',
                marginLeft: 40, marginTop: 5
              }}>SEND</Text>
              <MaterialCommunityIconsIcon name='send-circle' color={'white'} size={24}
                style={{ marginTop: 5 }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>


  )
}

export default Bill

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