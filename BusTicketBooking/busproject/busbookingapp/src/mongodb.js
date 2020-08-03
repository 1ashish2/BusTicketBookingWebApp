import React, { Component } from 'react'
import axios from 'axios';
export default class mongodb extends Component {
    
    state={
        title:'',
        body:'',
        posts:[]
    };
    componentDidMount=()=>{
        this.getBlogPost();
    }
    getBlogPost=()=>{
            axios.get('/db')
            .then((response)=>{
                const data=response.data;
                this.setState({posts:data});
                console.log('data has recieved');
            }).catch(()=>{
                alert('data is not recieved');
            })
        }
  /* handlechange=({target})=>{
       const{name,value}=target;
       this.setState({[name]:value});
   }*/
    render() {
        return (
            <div>
                <h1>hello</h1>
            </div>
        )
    }
}
