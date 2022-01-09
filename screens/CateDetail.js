import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image,ScrollView,Linking } from 'react-native';
import categoryDetails from '../categoryDetails'
import { Ionicons } from '@expo/vector-icons';
import call from 'react-native-phone-call'
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class CateDetail extends React.Component {
iosCall = (number) => {
  if(number){
    const args = {
      number: number, // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompt prior to the call
    };

    call(args).catch(err=>{console.log(err.message)});
  }
  else{
    alert('Currently not available')
  }
  };

   sendEmail=(email)=>{

     if (email.length<=7){alert("Sorry this shop doesn't have an email :(")}
     else
     {
    var emailTo= email
    Linking.openURL("mailTo:"+emailTo+"?subject=Buying Product via Eco Home&body=Hi, I am interested in buying your product ")}
  }

   constructor(){
    super();
    this.state={
      products:[]
    }
  }

  componentDidMount(){
    var c = this.props.route.params.id;

    var temp = categoryDetails.filter((d)=>{
      return (d.id === c)
    })
    this.setState({products:temp})
  }
 
  render(){
  return (
   <View style = {{flex:1}}>
    <View style={{backgroundColor:'#004037', flexDirection:'row', justifyContent:'space-between', paddingHorizontal:'5%', paddingTop:40, paddingBottom:5}}>
        <TouchableOpacity onPress={()=>{
         this.props.navigation.goBack()
       }}>
       <Ionicons name="arrow-back-circle-outline" size={34} color="white" />
       </TouchableOpacity>
       <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>Shop Details</Text>
       <Text></Text>

       
       </View>
           <ScrollView>
           {this.state.products.map((b)=>{
             return(
               <View key={b.id}>
               <Image style = {{width:'100%', height:200, resizeMode:'contain',}} source = {b.shopImage}/>
               <Text style = {{fontWeight:'bold', fontSize:20,marginLeft: '5%', marginTop:10}}>
               {b.shopName}
               </Text>
                <Text style = {{ fontSize:18,marginLeft: '5%', marginTop:10, color:'grey'}}>
               {b.shopDescription}
               </Text>
               <View style = {{flexDirection:'row', marginLeft:'5%', marginTop:10, alignItems:'center'}}>
               <Ionicons name="location" size={35} color="red" />
               <Text style = {{fontSize:16, color:'grey' }}>
               {b.shopAddress}
               </Text>
               </View>
<View style = {{flexDirection:'row', marginHorizontal: '5%', marginTop:20, justifyContent:'space-around'}}>

                <TouchableOpacity
            onPress={() => {
             this.iosCall(b.shopContact)
            }}
            style={{
              borderWidth: 1,
              backgroundColor: 'white',
              width: '30%',
              height: 40,
              justifyContent:'center',
              alignItems:'center',
              borderRadius:5,
            }}>
          <FontAwesome name="phone" size={24} color="black" />
          </TouchableOpacity>


          <TouchableOpacity
            onPress={() => {
             this.sendEmail(b.shopEmail)
            }}
            style={{
           borderWidth: 1,
              backgroundColor: 'white',
              width: '30%',
              height: 40,
              justifyContent:'center',
              alignItems:'center',
              borderRadius:5,
            }}>
            <Feather name="mail" size={24} color="black" />
          </TouchableOpacity>


            <TouchableOpacity
            onPress={() => {
          Linking.openURL(b.shopWebsite)
            }}
            style={{
            borderWidth: 1,
              backgroundColor: 'white',
              width: '30%',
              height: 40,
              justifyContent:'center',
              alignItems:'center',
              borderRadius:5,
            }}>
            <MaterialCommunityIcons name="web" size={24} color="black" />
          </TouchableOpacity>
          </View>


             </View>
             )
             
           })}
           </ScrollView>
   </View>
  );
  }
}

const styles = StyleSheet.create({

});
