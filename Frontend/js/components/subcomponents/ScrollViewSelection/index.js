import React, { Component } from "react";
import {
  View,
  Text,
  Icon,
  Button
} from "native-base";
import { Image, TouchableOpacity, Linking, ScrollView} from "react-native";
import styles from "./styles";
import {withNavigation} from "react-navigation";



class ScrollViewSelection extends React.Component {
  
state = {
  news:[]
}

constructor(props){
  super(props);
}

 render(){
   return(
   <View style={{ backgroundColor:"white", width:"100%",borderRadius:8,height:400}}>
     
    <View style={{width:"100%",alignItems:"center",justifyContent:"center",borderBottomWidth:2,borderColor:"black",flexDirection:"row"}}>

        
    <Text style={{fontWeight: 'bold', fontSize:13,margin:4}}> 
    
      &nbsp; Posts Control</Text>

    </View>

      <View style={{alignItems:"center",marginTop:10}}>

      <Text style={{fontWeight:"bold"}}>

      انا وبن عمي بنساعد الغريب
      </Text>
      <View>
    
      <Button
        onPress={() => this.props.navigation.navigate('postPage',{
          name: 'Write',
        })}
        style={styles.btnSignUp2}>

        <Text>Write a post</Text>
        <Text> اكتب مشاركة  </Text>
        </Button>

        <Button
     onPress={() => this.props.navigation.navigate('resultPage',{
                name: 'Lost Items',
              })}
      style={styles.btnSignUp} >

      <Text> Lost Items </Text>
      <Text>أشياء المفقودة</Text>

      </Button> 

      <Button
      onPress={() => this.props.navigation.navigate('resultPage',{
              name: 'Medical Services',
            })}
      style={styles.btnSignUp} >

      <Text> Medical Services </Text>
      <Text>مساعدة طبية</Text>
      </Button> 

      <Button
     onPress={() => this.props.navigation.navigate('resultPage',{
                name: 'Clothes Donation',
              })}
      style={styles.btnSignUp} >

      <Text> Clothes Donation </Text>
      <Text> التبرع الملابس</Text>

      </Button> 


      <Button
        onPress={() => this.props.navigation.navigate('resultPage',{
          name: 'Spam',
        })}
        style={styles.btnSignUp3}
        disabled={true}
        >

        <Text>Spam</Text>
        <Text>بريد مؤذي</Text>
      </Button>
   

      <Button
       onPress={() => this.props.navigation.navigate('resultPage',{
              name: 'Food Donation',
            })}
      style={styles.btnSignUp3} 
      disabled={true}
      >

      <Text> Food Donation </Text>
      <Text> التبرع الغذائي </Text>
      </Button> 

  
  

      </View>
    </View>

   </View>
   );
 }
}

export default withNavigation(ScrollViewSelection);