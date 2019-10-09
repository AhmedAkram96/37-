import React, { Component } from "react";
import {
  View,
  Text,
  Icon,
  Button
} from "native-base";
import { Image, TouchableOpacity, Linking, ScrollView,TextInput} from "react-native";
import styles from "./styles";
import {withNavigation} from "react-navigation";
import axios from "axios"
const loadingGIF = require('../../../../assets/preloader.gif')

class DataTable extends React.Component {
  
state = {

  name: "" ,
  mappedName: "",
  posts: [],
  value:"",
  keyword:"",
  results:[],
  list_of_jsonstuffs:[[]],
  loading:false

}

 loading=false;

constructor(props){
  super(props);

  this.getPosts();

        

 this.onChangeText = this.onChangeText.bind(this)
 this.submit = this.submit.bind(this)
 this.getPosts = this.getPosts.bind(this)
 this.renderPosts = this.renderPosts.bind(this)

}


async getPosts(){
 
  this.setState({
    loading:true
  })

  await axios.get('http://178.128.204.127:8000')
  .then(res=>{

    console.log(res.data.list_of_jsonstuffs)

    this.setState({
      list_of_jsonstuffs : res.data.list_of_jsonstuffs
    })

    if(this.props.name == 'Lost Items'){

      console.log("hey there")
      this.setState({
        mappedName:"مفقودات"
  
      })
    }else if(this.props.name == 'Medical Services'){
  
      this.setState({
        mappedName:"خدمات صحية"
  
      })
  
    }else if(this.props.name == "Clothes Donation"){
  
      this.setState({
        mappedName:"ملابس"
      })
  
    }
    this.setState({
      loading: false
    })
   

  })
  .catch(err=>{console.log(err)})
}


    search(word){

    word = word.toUpperCase()
    var sentence = []
    var indicies = []
    var output = []
    const {list_of_jsonstuffs} = this.state

    var postsToBeSearched = []

    this.loading = true

    for(var w = 0; w<list_of_jsonstuffs.length; w++){

      postsToBeSearched.push(list_of_jsonstuffs[w][0])


    }


    this.setState({
      posts:postsToBeSearched
    })

    const{posts} = this.state

    for(var i = 0; i < posts.length;i++){

      for(var j = 0; j < posts[i].length ; j++){

          sentence = posts[i].split(' ')
         
          for(var k = 0; k < sentence.length ; k++ ){

            if(word == sentence[k].toUpperCase() && !(indicies.includes(i))){
              
              output.push(posts[i])
              indicies.push(i)

            }

          }

     }

     }
     this.loading = false
     return output

    }


  renderPosts(){

      var results=[]
     
      const {list_of_jsonstuffs} = this.state

      console.log(this.props.name)
    
      this.loading = true
    
      var ids = []
      
      for(var i = 0; i < list_of_jsonstuffs.length ; i++){


      if(list_of_jsonstuffs[i][1] == this.state.mappedName){
       
        
       if(list_of_jsonstuffs[i][2] != undefined)


       var url = 'https://www.facebook.com/groups/394162071513093/'+list_of_jsonstuffs[i][2]
       console.log(url)


        results.push(

          <TouchableOpacity style={styles.cont} onPress={()=>
            Linking.openURL(url).catch((err) => console.error('An error occurred', err))
          } >
          <View style={styles.row}>
           
            <View style={{flexDirection:"column"}}>
              <View style={{flexDirection:"row"}}>
              <Text style={{fontWeight: 'bold', margin:4,paddingVertical: 5}}> 
              <Icon name='person' color='white' style={{ color: 'black',width:2}} /> 
              &nbsp;  Saleh Mohamed
              
              </Text>
                </View>

                <Text style={{fontWeight: 'bold', fontSize:13,margin:4}}> 
               

                {list_of_jsonstuffs[i][0]}

             
             </Text>

        
            </View>

          </View>
        </TouchableOpacity>



        )
        }

      }
      this.loading = false
      return results

    }


    renderResults(output){


      var results=[]
     this.loading = true
      for(var i = 0; i < output.length ; i++){
 
        results.push(

          
          <TouchableOpacity style={styles.cont} onPress={()=>this.props.navigation.navigate("entityProfile")} >
          <View style={styles.row}>
           
            <View style={{flexDirection:"column"}}>
              <View style={{flexDirection:"row"}}>
              <Text style={{fontWeight: 'bold', margin:4,paddingVertical: 5}}> 
              <Icon name='person' color='white' style={{ color: 'black',width:2}} /> 
              &nbsp;  Saleh Mohamed
              
              </Text>
                </View>

                <Text style={{fontWeight: 'bold', fontSize:13,margin:4}}> 
               
                  {output[i]}

             
             </Text>
        
            </View>

          </View>
        </TouchableOpacity>



        )

      }
      this.loading = false
      return results
    }

   submit(){

  console.log(this.state.keyword)

  this.loading = true
  const output = this.search(this.state.keyword)

  this.setState({search:true,results:output,loading:false})
  this.loading = false

   }

   

    onChangeText(word){

      this.setState({
        keyword:word
      })
    
    }

 


  render() {

  console.log(this.state.name)

  const{ value } = this.state.value

  console.log(this.loading)
    return (

 
      <ScrollView style={{backgroundColor:"#0099ff",height:400,borderRadius:9}} >

          <Text style={{alignSelf:"center",fontWeight: 'bold', margin:4,paddingVertical: 5,color:"white"}}> {this.props.name} Posts</Text>
       
         <View style={{flexDirection:"row"}}>
          <TextInput
              style={{ color:'black' ,marginLeft:10,height: 40, width : "65%", borderColor: 'black', borderWidth: 1, borderRadius:9,fontSize:15,padding:10, backgroundColor:"white"}}
              onChangeText={text => this.onChangeText(text)}
              editable
              value={this.state.keyword}
              placeholder="Search here.."
             />

   <Button
        onPress={() => this.submit()}
        style={styles.btnSignUp}>

        <Text style={{fontSize:15}}>Search</Text>

      </Button>


             </View>

          {  this.loading &&  <Text>  loading </Text>

        //   <View style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}}>

        //  <Image source={loadingGIF} style={{width:75,height:75}} />

        //   </View>

            
          }
         

             { !this.loading && this.state.search &&

            <Text style={{fontWeight:"bold",margin:10,color:"white"}}> 
            {this.state.results.length} Posts found

        </Text>

  } 

          { !this.loading &&  !this.state.search &&
       this.renderPosts()
          }

       { this.state.search &&

         this.renderResults(this.state.results)

          } 
        
  
          


      </ScrollView>

    );
  }
}

export default withNavigation(DataTable);


