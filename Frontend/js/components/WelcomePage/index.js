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
import styles from './styles'
//import AppNavigator from '../../Routers/MainStackRouter';
// const backgroundImg = require('../../../assets/cityWallpaper.png')
import ScrollViewSelection from '../subcomponents/ScrollViewSelection';

const resalaLogo = require('../../../assets/resalaLogo.jpg')

export default class welcomePage extends React.Component {
  static navigationOptions = {
    header: null
  }
constructor(props){
  super(props);
  this.state={
    fadeValue : new Animated.Value(0),
    xValue : new Animated.Value(0)
  }
  this._fadeAnimation();
  this._moveAnimation();


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


  render() {
    const {
      props: { name, index, list }
    } = this
    console.disableYellowBox = true;
    console.log(this.props.navigation, '000000000')
    return (
      <SafeAreaView style={{ flex: 1,backgroundColor: '#ddd'}}>
      
      <Container style={styles.container}>
        <Content scrollEnabled={false}>


        <View style={styles.sclview2}>
   
        <View style={{width:"90%",borderWidth:1,borderColor:"black",borderRadius:9}}>
  
        <ScrollView style={{height:400}}>

        <ScrollViewSelection/>

        </ScrollView>
       
        </View>

        </View>

    {/* <Image source={backgroundImg} style={styles.im} /> */}
            
         <Animated.View style={{position:"absolute",marginTop:this.state.xValue,opacity: this.state.fadeValue,width:"100%",alignItems:"center"}}>

          <Image source={resalaLogo} style={{width:150,height:75}} />
     
         </Animated.View>

    
    
        </Content>
<Text style={{alignSelf:"center",marginBottom:20,size:10}}>Made with<Icon name='heart' size={2} color='white' style={{ color: 'red',width:1}} /> 
by 
<Text style={{color:"#3366ff"}}> Facebook Developer circles </Text></Text>
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

//  welcomePage;
