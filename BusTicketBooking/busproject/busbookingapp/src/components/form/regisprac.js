import React, { Component } from 'react'
import '../css/form.css';
import axios from 'axios';

export default class Registration extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            fields: {},
            errors: {},     
            lemail:'',
            lpassword:'',
            usersCollection:[]
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
 
         
         if(typeof fields["email"] !== "undefined"){
           // console.log(fields['email']);
            if (!fields["email"].match( /^([A-Za-z0-9_\-\.])+\@([A-Za-z\.]{2,5})+\.([A-Za-z]{2,3})$/)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
             }
        }  
        
         if(typeof fields["phone"] !== "undefined"){
            if(!fields["phone"].match(/^\d{10}$/)){
               formIsValid = false;
               errors["phone"] = "pls enter valid number";
            }        
         }
       
         if(typeof fields["password"] !== "undefined"){
            if(!fields["password"].match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)){
               formIsValid = false;
               errors["password"] = "Must contain at least 1 number and 1 uppercase,1 lowercase letter and [!@#\$%\^&\*] special character to make strong password";
            }        
         }
         
        
        this.setState({errors: errors});
        return formIsValid;
    }
 
      contactSubmit(e) {
            e.preventDefault()
            if(this.handleValidation())
            {
                alert("registration success")
                const userObject = {
              
                  name: this.state.fields['name'],
                  email: this.state.fields['email'],
                  phone: this.state.fields['phone'],
                  password:this.state.fields['password']
  
              };
      
              axios.post('http://localhost:4000/signup', userObject)
                  .then((res) => {
                      console.log(res.data)
                  }).catch((error) => {
                      console.log(error)
                  });
               let fields = this.state.fields;
               fields['name']="";
               fields['email']="";
               fields['phone']="";
               fields['password']="";
               
            }
      }
     loginSubmit(e){
        e.preventDefault();
       
       // console.log(this.state.fields);
        console.log(this.state.usersCollection);
        let count=0;
        const loginemail=this.state.lemail;
        const loginpassword=this.state.lpassword;
        localStorage.setItem("lemail",loginemail);
        localStorage.setItem('lpassword',loginpassword);
        const lemail=localStorage.getItem('lemail');
        const lpassword=localStorage.getItem('lpassword');
        this.state.usersCollection.map((ele)=>{
        if(lemail == ele.email && lpassword == ele.password)
          {    
             alert("login success");
             localStorage.setItem('name',ele.name);
             this.props.history.push('/seatlist');
          }else{
             count =count+1;
          }
        })
        if(count == this.state.usersCollection.length)
        {
            alert('login failed');
            this.state.lemail="";
            this.state.lpassword="";
        }

     }
     handleChange(field, e){         
         let fields = this.state.fields;
         fields[field] = e.target.value;        
         this.setState({fields});
        // this.setState({[e.target.name]:e.target.value});
     }
     handleloginChange(e){
      this.setState({[e.target.name]:e.target.value});
      
     
     }
     componentDidMount() {
        axios.get('http://localhost:4000/signup')
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
        
         
    }
    
    render(){
         return (
            
             
             <div className="container">
                 <div className="container-fluid">
                    <div className="row" style={{marginTop:'4em'}}>
                       <div className="col-md-4 col-xs-12 bg-danger">
                     <form className="form" onSubmit= {this.loginSubmit.bind(this)}>
                     <div className="col-md-4 col-xs-4">
                     <input name="lemail" type="text" className="form-control inputform" placeholder="Email" onChange={this.handleloginChange.bind(this)} value={this.state.lemail} required />
                     </div> 
                     <div className="col-md-5 col-xs-5">
                     <input name="lpassword" type="password" className="form-control inputform" placeholder="password" onChange={this.handleloginChange.bind(this)} value={this.state.lpassword} required/>
                      </div> 
                      <div className="col-md-3 col-xs-3">
                      <button type="submit" className="btn btn-primary text-center col-md-12">SignIn</button>
                      </div>
                    
             
                      </form>    
                       </div>
                    </div>
                  <div className="row">

                  <div className="col-md-4 col-xs-12 cntr "> 
                
                   
                <form name="contactform" className="form signupform" onSubmit= {this.contactSubmit.bind(this)}>
                     
                      <h3 className="text-center">Create Account</h3>
                            <input name="name" type="text"  className="form-control inputform " placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} required/>
                            <span>{this.state.errors["name"]}</span>
                           <br/>
                          <input name="email" type="text" className="form-control inputform" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} required/>
                          <span>{this.state.errors["email"]}</span>
                          <br/>
                          <input name="phone" type="text" className="form-control inputform" placeholder="Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]} required/>
                          <span>{this.state.errors["phone"]}</span>
                          <br/>
                          <input name="password" type="password" className="form-control inputform" placeholder="password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} required/>
                          <span>{this.state.errors["password"]}</span>
                          <br/>
                          <button type="submit" className="btn btn-primary col-md-12 col-xs-12 btn1">Create Account</button>
               </form>
               </div>
                </div>
                </div>
             </div>
         
       )
     }
 }