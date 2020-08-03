import React, { Component } from 'react';
import '../css/payment.css';
import debit from '../image/card.png';
//import Ticket from '../ticket/Ticket';
import {Redirect} from 'react-router-dom';
export default class Payment extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            fields: {},
            errors: {},
            year:["21","22","23","24","25","26","27","28","29","30"],
            month:["01","02","03","04","05","06","07","08","09","10","11","12"]
        }
     }
     handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        
        if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z ]+$/)){
              formIsValid = false;
              errors["name"] = "pls enter only letters";
           }        
        }
       
        if(typeof fields["cardnumber"] !== "undefined"){
            if(!fields["cardnumber"].match(/^(?=.*[0-9])(?=.{16})/)){
               formIsValid = false;
               errors["cardnumber"] = "Pls enter valid card number";
            }      
         }
        
         if(typeof fields["cvv"] !== "undefined"){
            if(!fields["cvv"].match(/^(?=.*[0-9])(?=.{3})/)){
               formIsValid = false;
               errors["cvv"] = "Not valid cvv";
            }        
         }
         this.setState({errors: errors});
         return formIsValid;  
    }
    contactSubmit(e){
        e.preventDefault();
        if(this.handleValidation())
        {
            alert("payment success")
           let fields = this.state.fields;
           fields['name']="";
           fields['cardnumber']="";
           fields['cvv']="";
           this.props.history.push('/ticket');
           
        }
        }
        handleChange(field, e){         
            let fields = this.state.fields;
            fields[field] = e.target.value;        
            this.setState({fields});
        }
    
    render() {
        if(!localStorage.getItem('name'))
        {
          return <Redirect to='/' />
        }
        return (
              <>
                <div className='container paymentcontainer'>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="card col-md-4 col-xs-12 box1">
                            <div className="card-content">
                                <div className="card-header text-center">
                                    <h3 className="heading"> PAYMENT METHOD </h3>
                                    <div className="sub-heading row text-center ">
                                        <div className="col-md-1 col-xs-1"></div>
                                        <div className=" col-md-5 col-xs-5 sub-heading1">By Debit Card</div>
                                        <div className=" col-md-5 col-xs-5 sub-heading2">By Credit Card</div>
                                        <div className="col-md-1 col-xs-1"></div>
                                    </div>
                                </div>
                                <div className="card-body" style={{marginTop:"20px"}}>
                                    <div className="row">
                                    <div className="col-md-2 col-xs-1"></div>
                                    <div className="col-xs-8 col-md-8"> <img className="frnt" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1575707421/CardArt-Plain-Front-Spotlight.png" width="200px" /> </div>
                                    <div className="col-md-2 col-xs-1"></div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-2 col-xs-1"></div>
                                    <div className="col-xs-8 col-md-8"> <img className="back" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1575707450/main-qimg-bd6b7e786c2fdb670c89c6ded8fcb973.webp" width="200px" style={{marginTop:'5px'}} /> </div>
                                    <div className="col-md-2 col-xs-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="col-xs-12 col-md-4  box2">
                                <div class="panel">
                                    <div class="panel-heading">
                                        <div class="row">
                                            <h5 class="text-left text-dark col-md-5">Amount:Rs{localStorage.getItem('totalprice')}</h5>
                                            <h5 className="text-left col-md-7">Transation Id:{localStorage.getItem('transactionId')}</h5>
                                            <img class="img-responsive cc-img col-md-11" src={debit} />
                                        </div>
                                    </div>
                                    <div class="panel-body">
                                        <form role="form" onSubmit={this.contactSubmit.bind(this)}>
                                            <div class="row">
                                                <div class="col-xs-12">
                                                    <div class="form-group">
                                                        <label>Card Number</label>
                                                        <div class="input-group ">
                                                            <input type="tel" class="form-control paymentinput" name="cardnumber" placeholder="Valid Card Number" onChange={this.handleChange.bind(this, "cardnumber")} value={this.state.fields["cardnumber"]} required />
                                                            <span class="input-group-addon"><span class="fa fa-credit-card"></span></span>
                                                           
                                                        </div>
                                                        <span>{this.state.errors["cardnumber"]}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-xs-4 col-md-4 ">
                                                    <div class="form-group ">
                                                        <label><span class="">ExpMonth</span></label>
                                                       
                                                       <select className="form-control  paymentinput">
                                                            {
                                                                this.state.month.map(ele=> <option>{ele}</option>)
                                                            }
                                                           
                                                        </select>
                                                                                        
                                                    </div>
                                                </div>
                                                <div class="col-xs-4 col-md-4 ">
                                                    <div class="form-group ">
                                                        <label><span class="">ExpYear</span></label>
                                                     
                                                      
                                                         <select className="form-control  paymentinput">
                                                            {
                                                                this.state.year.map(ele=> <option>{ele}</option>)
                                                            }
                                                           
                                                        </select>
                                                         
                                                        
                                                    </div>
                                                </div>
                                                <div class="col-xs-4 col-md-4 pull-right">
                                                    <div class="form-group">
                                                        <label>CVV Code</label>
                                                        <input type="tel" class="form-control paymentinput" name="cvv" placeholder="123" onChange={this.handleChange.bind(this, "cvv")} value={this.state.fields["cvv"]} required/>
                                                        <span>{this.state.errors["cvv"]}</span>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-xs-12">
                                                    <div class="form-group">
                                                        <label>Card Owner</label>
                                                        <input type="text" class="form-control paymentinput" name="name" placeholder="Card Owner Names" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} required />
                                                        <span>{this.state.errors["name"]}</span>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                            
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <button class="btn btn-success  btn-block paymentbtn">Process Payment</button>
                                            </div>
                                    </div>
                                        </form>
                                    </div>
                                   
                                </div>
                            </div>
                           
                        </div>
                  
                </div>
            </>
        )
    }
}

