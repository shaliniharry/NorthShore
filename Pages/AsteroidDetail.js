import React ,{Component}from 'react';
import {
     Text,
    View,
   } from 'react-native';
   import {getAsteroidDetail} from '../provider/services';
   
export default class AsteroidDetail extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            astreroiddetail:""
        }
    }

    componentDidMount()
    {
       getAsteroidDetail(this.props.route.params.id).then((response)=>{
           this.setState({astreroiddetail:response})
        }).catch((error)=>
        alert(error))
    }

    render()
    {
        return(
            <View>
                <Text>name:{this.state.astreroiddetail.name}</Text>
                <Text>nasa_jpl_url:{this.state.astreroiddetail.nasa_jpl_url}</Text>
                <Text>is_potentially_hazardous_asteroid:{this.state.astreroiddetail.is_potentially_hazardous_asteroid+""}</Text>
            </View>
        )
    }
}