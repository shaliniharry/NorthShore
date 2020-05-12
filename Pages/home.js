import React ,{Component}from 'react';
import {
    TextInput,
    StyleSheet,
   TouchableOpacity,
   Text,
    View,
    FlatList,ActivityIndicator
   } from 'react-native';

   import {randomAsteroid} from '../provider/services';

  export default class Home extends Component
  {
      constructor(props)
      {
          super(props);
          this.state={
              Asteroid_id:"", 
              random_ids:[],
              isloading:false
          }
      }
      submitbutton=()=>{
          
          this.goToDetailPage(this.state.Asteroid_id)
         
      }

      goToDetailPage(Aid){
        this.props.navigation.navigate("asteroiddetail",{id:Aid});
      }

      getRandom=()=>{
          this.setState({isloading:false})
        randomAsteroid().then((response)=>{
            
            this.setState({random_ids:response.near_earth_objects,isloading:true})

        }).catch((error)=>
        alert(error))
      }

      list=({item})=>{

    return <TouchableOpacity style={styles.idStyle} onPress={()=>this.goToDetailPage(item.id)}>
    <Text>{item.id}</Text>
    </TouchableOpacity>
      }

      render(){
          return <View>
              <TextInput placeholder="Enter Asteroid ID"
              onChangeText={(text)=>this.setState({Asteroid_id:text})}
              ></TextInput>
              <TouchableOpacity
               disabled={this.state.Asteroid_id===""?true:false}
               style={styles.buttonStyle}
               onPress={this.submitbutton}
                >
                  <Text>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity
               style={styles.buttonStyle}
               onPress={this.getRandom}
              >
                  <Text>Random Asteroid</Text>
              </TouchableOpacity>

              <FlatList
              data={this.state.random_ids}
              renderItem={this.list}
              keyExtractor={(item,index)=>index.toString()}
              
              ></FlatList>
             {this.state.isloading && <ActivityIndicator></ActivityIndicator>}
          </View>
      }
  }
  const styles = StyleSheet.create({
      buttonStyle:{
          marginTop:20,
          backgroundColor:"lightgrey",
          padding:16,
          justifyContent:"center",alignItems:"center"
      },
      idStyle:{
          backgroundColor:"lightgrey",
          padding:12,
          borderColor:"black",
          borderWidth:0.5
          
      }
  })


//   WJkTUcOS4lwboV28cgNdMYqZaIXEqWQaoV3rGgoB