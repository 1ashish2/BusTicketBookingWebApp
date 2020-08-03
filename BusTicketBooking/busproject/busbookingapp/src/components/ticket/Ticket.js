import React, { Component } from 'react'
import '../css/ticket.css';
import {Redirect} from 'react-router-dom'
import axios from 'axios';
//import {ContextApi} from '../ContextApi'
export default class Ticket extends Component {
   constructor(props)
   {
     super(props)
     this.state = {
       passengername:[],
       buslist:[],
      seat: []
    }
   }
   componentWillMount()
   {
     const st=[...this.state.passengername]
     const seat=[...this.state.seat]
     for(let i=1;i<=40; i++)
     {
       if(localStorage.getItem(`${i}`))
       {
        st.push(localStorage.getItem(`${i}`));
        seat.push(i)
       }
      
     }
     
     this.setState({passengername:st})
     this.setState({seat:seat})

     
      axios.get('http://localhost:4000/home')
      .then(res => {
          
          this.setState({ buslist: res.data });
          
          
      })
      .catch(function (error) {
          console.log(error);
      })

    }
   print=()=>{
     document.getElementById('print').style.display='none';
      window.print();
   }
  
    render() {
      if(!localStorage.getItem('name'))
       {
         return <Redirect to='/' />
       }
      console.log(this.state.buslist)
        return (
          
          this.state.buslist.map(ele=>{
            if(localStorage.getItem('bookedseat')==ele._id)
            return(

              <div className="container-fliud">
              <div className="container ticketcontainer">
              <div className="row ticketrow">
             
                 <div className="col-md-12 ">
                  
                 <div className="col-md-1 col-xs-1"></div>
                    <div className="col-md-5 col-xs-5 ticketcol1 text-left">
                     
                    <ul className="list-group">
                     <li>Ticket:bus.com</li>
                     <li>Name:</li>
                     <li>Date:</li>
                     <li>Source: </li>
                     <li>Destination:</li>
                     <li>Departure Time: </li>
                     <li>Seat No:</li>
                     <li>Bus Fare:</li>
                     </ul>
                    </div>
                    <div className=" col-md-5 col-xs-5 ticketcol2 text-right">
                      <ul className="list-group">
                      <li>No:12345</li>
                      <li>{ this.state.passengername.map(ele => ele+',')}</li>
                      <li> {ele.date}</li>
                      <li>{ele.from}</li>
                      <li>{ele.to}</li>
                      <li>{ele.Departure}</li>
                      <li>{this.state.seat.map(ele=>ele+',')}</li>
                      
                     <li> {localStorage.getItem('totalprice')}</li>
                      </ul>
                    </div>
                    <div className=" col-xs-1"></div>
                 </div>
                 
                   </div>
                   <div className="col-md-12 text-center">
              <button className="btn btn-warning" id="print" onClick={this.print}>print</button>
              </div> 
              </div>
              
             </div>

            )
          })

            
           )
            

        
    }
}
