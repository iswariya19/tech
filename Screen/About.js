import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'


const About = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
    <View style={{
      width: '90%', height: 45,// backgroundColor: 'black', 
      marginTop: 29, marginLeft: 20,
       borderColor:'gold'
       ,borderBottomWidth: 1,
       // borderTopWidth: 5,
      //borderLeftWidth: 3, borderRightWidth: 3,
      //borderEndWidth: 3,
     }} ><View style={{ flexDirection: 'row',marginLeft:10 }}>

     <TouchableOpacity onPress={() => { navigation.goBack() }}>
       <FontAwesomeIcon name="arrow-circle-o-left" size={34} color="gold" />
     </TouchableOpacity>
      <Text style={{color:'white',fontSize:29,fontWeight:'bold',marginLeft:80}}>ABOUT</Text>
    </View>
    </View>
    <View>
        <ScrollView>
        <Text style={{color:'white',fontSize:20,fontWeight:'500',
        fontStyle:'italic',marginTop:30,marginLeft:20}}> 
         Everyone knows the importance of time in this competitive 
         world and no one wants to waste their time in doing regular things. 
         In shopping malls or super markets, customers have to wait much time for 
         billing even though the customer purchased a little thing. In petty shops 
         customers are not aware of cost of the product that they are wish to purchase. </Text>
    <Text style={{color:'white',fontSize:20,fontWeight:'500',
    fontStyle:'italic',marginTop:30,marginLeft:20}}>After purchasing If the customer wants 
    to purchase missed products, the user can include it for billing, otherwise user can complete
     the process and the bill will be generated and displayed on the mobile screen with the
      price of the products and total cost. </Text>
    <Text style={{color:'white',fontSize:20,fontWeight:'500',fontStyle:'italic',
    marginTop:30,marginLeft:20}}>The bill will be sent through SMS and WhatsApp to the customer’s
     phone. The bill can be saved by the customer on their phone. 
     The mobile application will be very useful in shopping malls
      during festival times while in heavy crowd for seasonal times and will be utilised in
       petty shops at villages without purchasing Computers which will save huge amount of 
       cost. By using this mobile application there is no need to purchase new computers for 
       billing in Malls and big
     shops during festival times. </Text>
     <Text style={{color:'white',fontSize:20,fontWeight:'bold',fontStyle:'italic',
     marginTop:30,marginLeft:20}}> The objective of this proposed mobile application is:</Text>
    <Text style={{color:'white',fontSize:20,fontWeight:'500',fontStyle:'italic',
    marginTop:30,marginLeft:20}}>reduce billing time, and avoiding purchase of New Computer, 
    Scanner, Printer and other accessories which will diminish the cost expenses. 
    Moreover it will avoid the use of Papers and also support for Green Environment.</Text>
    <Text style={{color:'white',fontSize:20,fontWeight:'500',fontStyle:'italic'
    ,marginTop:30,marginLeft:20}}>                            
    This Mobile application shows the overall Billing report, Sales report, Product list,
     Customer list and also Sales return. This application will cater to the need of the sales persons of any kind of shops including petty shops that salesperson can manage 
    the proposed system  very simply and efficiently.</Text>
    </ScrollView>
    </View>
    </View>
  )
}

export default About

const styles = StyleSheet.create({})