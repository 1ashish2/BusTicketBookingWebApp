import React, { Component } from 'react'
import '../css/navigation.css';
import bus from '../image/bus.png';
import {Redirect} from 'react-router-dom'
export default class Navigation extends Component {
    render() {
        return (
           
               <div className="container" >
              <div className="row">
                <div className="col-md-6 col-xs-8 text-left">
                <img src={bus} className="image" /><label><h3>bus.com</h3></label>
                </div>
               <div className="col-md-6 col-xs-4 text-right text-xs-left">
               {localStorage.getItem('name')?<h3  onClick={ ()=>{
                   localStorage.removeItem('name')
                     alert('logout') 
                    
                   
            }} style={{cursor:'pointer'}}><i class="fa fa-user" aria-hidden="true"></i>{localStorage.getItem('name')}</h3>:null}
              </div>
              </div>
             </div>
           
        )
    }
}




