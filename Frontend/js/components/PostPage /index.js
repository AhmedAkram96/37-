import React, { Component } from 'react'
import {
  Container,
  Header,
  Title,
  Content,
  View,
  Text,
  Button,
  ImageBackground,
  Icon,
  Left,
  Right,
  Body
} from 'native-base'
import { Image, Animated , Easing,SafeAreaView,AsyncStorage,ScrollView} from 'react-native'
import axios from 'axios'
import styles from './styles'
//import AppNavigator from '../../Routers/MainStackRouter';
// const backgroundImg = require('../../../assets/cityWallpaper.png')
import DataTable from '../subcomponents/DataTable';
import { TextInput } from 'react-native-gesture-handler';

const resalaLogo = require('../../../assets/resalaLogo.jpg')

export default class postPage extends React.Component {

  static navigationOptions = {
    header: null
  }
constructor(props){
  super(props);
  this.state={
    fadeValue : new Animated.Value(0),
    xValue : new Animated.Value(0),
    name:this.props.navigation.getParam('name'),
    post:"",
    value:"",
    showResponse:false,
    response: ""
  }
  this._fadeAnimation();
  this._moveAnimation();

  this.onChangeText = this.onChangeText.bind(this)

}

_moveAnimation =() =>{

  Animated.timing(this.state.xValue,{
    toValue:40,
    duration:1000,
    asing: Easing.linear
  }).start();

}

_fadeAnimation =() =>{

  Animated.timing(this.state.fadeValue,{
    toValue:1,
    duration:1000
  }).start();

}

async submit(){
  
  var output = []
  var sentence = []

  for(var j = 0; j < this.state.post.length ; j++){

    sentence = this.state.post.split(' ')
   
    for(var k = 0; k < sentence.length ; k++ ){

      if(sentence[k].toUpperCase() == 'BLABLABLA'){
        
        this.setState({
          showResponse:true,
          response:"Sorry your post contains unallowed language"
        })


      }

    }



    await axios.post('http://178.128.204.127:8000/?q=heythere')
    .then(res=>{
      console.log(res)
    }).catch(err=>{console.log(err)})

}
}

onChangeText(text){

  this.setState({
    post:text
  })

}

  render() {
    const {
      props: { name, index, list }
    } = this
    const{ value } = this.state.value
    console.disableYellowBox = true;
    console.log(this.props.navigation, '000000000')
    return (
      <SafeAreaView style={{ flex: 1,backgroundColor: '#ddd'}}>
      
      <Container style={styles.container}>
      
        <Content scrollEnabled={false}>

        <View style={styles.sclview2}>
        <Text style={{fontSize:20}}>Write a post -  اكتب مشاركة </Text>

        { !this.state.showResponse && 

        <View style={{width:"90%",borderWidth:1,borderColor:"black",borderRadius:9}}>

        <TextInput
              style={{ height: 150, borderColor: 'gray', borderWidth: 1,fontSize:15,padding:10 }}
              onChangeText={text => this.onChangeText(text)}
              editable
              multiline={true}
              placeholder="Write here..."
         />
          </View>
      }
        { this.state.showResponse && 
        <Text style={{color:"red",fontWeight:"bold"}}>{this.state.response}</Text>
      }
       
        <Button
        onPress={() => this.submit()}
        style={styles.btnSignUp}>

        <Text >Submit</Text>
        <Text > عرض  </Text>
        </Button>
        </View>

         <Animated.View style={{position:"absolute",marginTop:this.state.xValue,opacity: this.state.fadeValue,width:"100%",alignItems:"center"}}>

          <Image source={resalaLogo} style={{width:150,height:75}} />
     
         </Animated.View>

        </Content>

      </Container>

      </SafeAreaView>
    )
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer())
  }
}