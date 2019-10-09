
const React = require('react-native');
const { StyleSheet , Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default{
  im:{
  width:deviceWidth,
  height:deviceHeight,
  },
  img:{  
    width:deviceWidth , 
    height:deviceHeight, 
    position:"absolute"
    },
  container: {
    backgroundColor: 'white',
  },
  v:{
    position:"absolute"
  },
  footer:{
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems:'center',
    flex:1,
    height:50,
    flexDirection:'row', 
    flexWrap:'wrap',
    position: 'absolute',
    bottom:0,
    width:"100%"
  },
  tex:{
    position:"absolute",
    color:"#BBBBB",
    alignSelf:"center",
    justifyContent:"center",
    marginTop:deviceHeight/3,
    width:280,
    fontSize:55,
    fontWeight:"bold"
  },
  btnSignUp: {
    margin:5,
    backgroundColor:'#231250',
    borderRadius:10,
    borderColor:"white",
    borderWidth:1,
  },
  btnSignIn: {
    margin: 5,
    backgroundColor:'#231250',
    borderRadius:10,
    borderColor:"white",
    borderWidth:1,
  },
  btnFB: {
    position:"absolute",
    zIndex:100,
    marginLeft: "28%",
    backgroundColor:'#231250',
    borderRadius:10,
    borderColor:"white",
    borderWidth:1,
    marginTop:deviceHeight/1.35
  },
    safeArea: {
    flex: 1,
    backgroundColor: '#ddd'
  },
  sclview2:{
    alignItems:"center", 
    justifyContent:"center",
    height:deviceHeight,
    width:"100%"
  },
  sclview1:{
    width:"80%",
    height:deviceHeight
  }
};
