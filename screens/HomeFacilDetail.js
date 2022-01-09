import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';
import call from 'react-native-phone-call'

import { LinearGradient } from 'expo-linear-gradient';
import homeDetails from '../homeFacilityDetails';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default class HomeFacilDetail extends React.Component {

  iosCall = (number) => {
  if(number){
    const args = {
      number: number, // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompt prior to the call
    };

    call(args).catch(err=>{console.log(err.message)});
  }else{
    alert('Currently not available!')
  }
  };

   sendEmail=(email)=>{
     if (email.length<=7){alert("Sorry this shop doesn't have an email :(")}
     else
     {
    var emailTo= email
    Linking.openURL("mailTo:"+emailTo+"?subject=Buying Product via Eco Home&body=Hi, I am interested in buying your product ")}
  }
  constructor() {
    super();
    this.state = { info: [] };
  }
  componentDidMount() {
    var data = this.props.route.params.name;
    var filtered = homeDetails.filter((fi) => {
      return fi.category === data;
    });
    this.setState({ info: filtered });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
         <View style={{backgroundColor:'#004037', flexDirection:'row', justifyContent:'space-between', paddingHorizontal:'5%', paddingTop:40, paddingBottom:5}}>
       <TouchableOpacity onPress={()=>{
         this.props.navigation.goBack()
       }}>
       <Ionicons name="arrow-back-circle-outline" size={34} color="white" />
       </TouchableOpacity>
       <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}></Text>
       <Text></Text>

       
       </View>
          
        <ScrollView>
          {this.state.info.map((ef,i) => {
            return (
              <View key={i}>
                <Image
                  style={{ width: '100%', height: 200 }}
                  source={ef.image}
                />
                <Text
                  style={{
                    fontSize: 20,
                    marginLeft: '5%',
                    marginTop: 15,
                    fontWeight: 'bold',
                  }}>
                  {ef.category}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: '5%',
                    marginTop: 15,
                    color: 'grey',
                  }}>
                  {ef.description}
                </Text>
                {ef.vendors.map((v,i) => {
                  return (
                    <View
                    key={i}
                      style={{
                        backgroundColor: 'white',
                        marginTop: 10,
                        width:'90%',
                        borderRadius: 10,
                        alignSelf: 'center',
                       
                      }}>
                      <LinearGradient
        colors={['#98de5b','#08e1ae']}
        start = {{x:1,y:0.7}}
        style={{ flex: 1, width:'100%', height:'100%', borderRadius:10, paddingVertical:20 }}
      >
                      <Text style = {{alignSelf:'center', fontSize:18, marginBottom:5}}>{v.name}</Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginTop: 10,
                          justifyContent: 'space-around',
                        }}>
                        <TouchableOpacity onPress={()=>{this.iosCall(v.contact)}}>
                          <Feather name="phone-call" size={24} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{this.sendEmail(v.email)}}>
                          <Feather name="mail" size={24} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{Linking.openURL(v.website)}}>
                          <SimpleLineIcons
                            name="globe"
                            size={24}
                            color="black"
                          />
                        </TouchableOpacity>
                      </View>
                      </LinearGradient>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
