import React, { Component } from 'react'
import '../css/passenger.css';
import DrawGrid from './DrawGrid';
import axios from 'axios';
import {Link,Redirect} from 'react-router-dom';
var _=require('lodash');

class Seatlist extends Component {
    
constructor(props) {
    super(props);
      this.state = {
      seat: [
        '1','2','3','4','5','6','7','8','9','10','11','12','13','14',
        '15','16','17','18','19','20','21','22','23','24','25','26',
        '27','28','29','30','31','32','33','34','35','36','37','38','39','40'
      ],
      seatAvailable: [],
      seatReserved:['4','12','18','22'],
      initiallyReserved:['4','12','18','22'],
      reserve:[],
      reservedSeat:[],
      buslist:[],
      busid:[],
      seatRow:['1','2','3','4'],
      showtrue:false,
      price:'',
      time:'',
      ServiceTax:'40'
    }
  }
  componentWillMount(){
    
      axios.get('http://localhost:4000/home')
      .then(res => {
          
          this.setState({ buslist: res.data });
          const reserved=(res.data || []).map(obj => ({ 
            objid:obj._id,
            bookedseat: obj.bookedseat,
            price:obj.fare
            }));
          this.setState({reservedSeat:reserved})
          
      })
      .catch(function (error) {
          console.log(error);
      })
      const id=localStorage.getItem('bookedseat');
      this.setState({busid:id});   
    
    
    for(let i=1;i<=40; i++)
    {
      if(localStorage.getItem(`${i}`))
      {
       localStorage.removeItem(`${i}`);
      // localStorage.removeItem(`gender${i}`);
       localStorage.removeItem(i);
      }
     
    }

    
  }
  

  onClickData(seat) {
    if(!this.state.initiallyReserved.includes(seat)){
      if(this.state.seatReserved.indexOf(seat) > this.state.initiallyReserved.length-1 ) {
        this.setState({
          seatAvailable: this.state.seatAvailable.concat(seat),
          seatReserved: this.state.seatReserved.filter(res => res != seat),
          
       })
     
      }else {
       
        this.setState({
          seatReserved: this.state.seatReserved.concat(seat),
          seatAvailable: this.state.seatAvailable.filter(res => res != seat),
          showtrue:true
        })
      
      }
      }
      console.log(this.state.seatReserved.filter(res => res != seat))
  }
  
  render() {
   
   // console.log(this.state.reservedSeat)
    if(!localStorage.getItem('name'))
    {
      return <Redirect to='/' />
    }
    return (
      <div className="container-fluid ">
        
        <DrawGrid 
          seat = { this.state.seat }
          available = { this.state.seatAvailable }
          reserved = { this.state.seatReserved }
          price={this.state.price}
          onClickData = { this.onClickData.bind(this) }
          seatRow={this.state.seatRow}
          showing={this.state.showtrue}
          ServiceTax={this.state.ServiceTax}
          reserve={this.state.reserve}
          initiallyReserved={this.state.initiallyReserved}
          busid={this.state.busid}
          buslist={this.state.buslist}
          reservedSeat={this.state.reservedSeat}
          />
      </div>
    )
  }
}







export default Seatlist;