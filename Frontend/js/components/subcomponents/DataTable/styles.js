
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
    borderColor: "black",
    borderWidth: 2,
    borderRadius:10,

  },
  btnSignUp: {
    position:"absolute",
    paddingBottom:30,
    marginLeft:230,
    height:20,
    backgroundColor:'red',
    borderRadius:10,
    borderColor:"black",
    borderWidth:1,
    marginTop:"10%",
    alignSelf:"center",
    
  },
  cont:{
    width: "94%",
    alignSelf:"center",
    backgroundColor:"white",
    borderRadius:10,
    marginTop: 10
  }
};