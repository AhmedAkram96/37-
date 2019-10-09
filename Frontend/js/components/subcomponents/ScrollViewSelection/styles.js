

const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  row:{
    flex:1,
    flexDirection:'row', 
    flexWrap:'wrap',
    height:"50%",
    borderColor: "white",
    borderWidth: 6,
    borderRadius:10
  },
  cont:{
    width: "94%",
    alignSelf:"center",
    backgroundColor:"white",
    borderRadius:10,
    marginTop: 10
  },
  txt:{
    color:"white"
  },
  day:{marginLeft:10,marginRight:10,marginBottom:15,marginTop:15},  

  btnSignUp: {
    margin:5,
    backgroundColor:'#0099ff',
    borderRadius:10,
    borderColor:"red",
    borderWidth:1,
    width:300
  },
  btnSignUp3: {
    margin:5,
    backgroundColor:'grey',
    borderRadius:10,
    borderColor:"red",
    borderWidth:1,
    width:300
  },
  btnSignIn: {
    margin: 5,
    backgroundColor:'#231250',
    borderRadius:10,
    borderColor:"white",
    borderWidth:1,
    width:300
  },
  btnSignUp2: {
    margin:5,
    backgroundColor:'red',
    borderRadius:10,
    borderColor:"#0099ff",
    borderWidth:1,
    width:300
  },
};