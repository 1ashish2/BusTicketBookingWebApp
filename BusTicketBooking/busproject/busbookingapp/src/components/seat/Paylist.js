import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import {ContextApi} from '../ContextApi';
import Ticket from '../ticket/Ticket'
//export const ContextApi =React.createContext('4000');
export default class Paylist extends React.Component{
    handelpayment=()=>{
      let totalseats=this.props.reserved.length-this.props.initiallyReserved.length;
      let ServiceTax=Number(this.props.ServiceTax)*Number(this.props.reserved.length-this.props.initiallyReserved.length)
      let totalprice=Number(this.props.price)*Number(this.props.reserved.length-this.props.initiallyReserved.length)+ Number(this.props.ServiceTax)*Number(this.props.reserved.length-this.props.initiallyReserved.length)
      let randomvalue=Math.floor(Math.random() * 1000);
      localStorage.setItem('transactionId','pxts'+randomvalue);
      localStorage.setItem('totalprice',totalprice);
      
      
       
     
    }
    render()
    {
      
      return(
        this.props.reserved.length-4>0?
          <div className="col-md-12">
           <div className="row">
            <div className="col-xs-6 col-md-6"><h4>Total Seats</h4></div>
            <div className="col-xs-6 col-md-6"><h4>{this.props.reserved.length-this.props.initiallyReserved.length}</h4></div>
           </div>
           <div className="row">
            <div className="col-xs-6 col-md-6"><h4>Price</h4></div>
            <div className="col-xs-6 col-md-6"><h4>{this.props.price}</h4></div>
           </div>
           <div className="row">
            <div className="col-xs-6 col-md-6"><h4>Service Tax</h4></div>
            <div className="col-xs-6 col-md-6"><h4>{Number(this.props.ServiceTax)*Number(this.props.reserved.length-this.props.initiallyReserved.length)}</h4></div>
           </div>
           <div className="row">
            <div className="col-xs-6 col-md-6"><h4>Total Price</h4></div>
            <div className="col-xs-6 col-md-6"><h4>{Number(this.props.price)*Number(this.props.reserved.length-this.props.initiallyReserved.length)+ Number(this.props.ServiceTax)*Number(this.props.reserved.length-this.props.initiallyReserved.length)}</h4></div>
           </div>
               
          <Link to='/payment'><button className="btn btn-danger btm" onClick={this.handelpayment} >Continue to Payment</button></Link> 
          
          </div>:null
      )
     }
  }