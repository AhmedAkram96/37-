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
import DataTable from '../subcomponents/DataTable';

const resalaLogo = require('../../../assets/resalaLogo.jpg')

export default class resultPage extends React.Component {

  static navigationOptions = {
    header: null
  }
constructor(props){
  super(props);
  this.state={
    fadeValue : new Animated.Value(0),
    xValue : new Animated.Value(0),
    name:this.props.navigation.getParam('name')
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


renderPosts(){


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

        <DataTable name={this.state.name} />

        </ScrollView>
       
        </View>

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