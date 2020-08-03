import React from 'react';
import seat from '../image/driver.png';
import Buslist from './Buslist';
import Paylist from './Paylist';
//import Userlist from './Userlist';
import ReservedList from './ReservedList';

export default class DrawGrid extends React.Component {
 constructor(props)
 {
   super(props)
   this.state={
     val:[]
   }
 }
 

    render() {
     // console.log(this.props.reserved);
     
     // const count=0;
      return (
        
        this.props.reservedSeat.map(ele=>{
          if(localStorage.getItem('bookedseat')==ele.objid)
              return(

                      

                <div className="container seatcontainer">
          
                <div className="container ">
                <div className="row">
                 <div className="col-md-6 ">
                   <div className="col-xs-0 col-md-2" ></div>
                     <div className=" col-md-7 ">
                     <img src={seat} className="driver text-right"/>
                      <ul className="list-group ">
                      { 
                            
                                <div className="row ">{
                                this.props.seat.map( row =>{
                                  return(
                                   <div className="col-xs-3 col-md-3">
                                    <li className={this.props.reserved.indexOf(`${row}`) >-1? 'r  text-center': 'a  text-center'}
                                    key={row} onClick = {() => this.onClickSeat(row)}>{row} </li>
                                 </div>
                                  )
                                })}
                               </div>
                             
                               }
                   
                      </ul>
                     </div>
                    
                 </div>
                 
                 <div className="col-md-6 ">
                    <div className="row">
                    <Buslist  busid={this.props.busid}
                     buslist={this.props.buslist} />
                    </div>
                    <div className="row">
                    <ReservedList reserved = { this.props.reserved }  busid={this.props.busid}
                     buslist={this.props.buslist} initiallyReserved={this.props.initiallyReserved} />
                    </div>
                   { this.props.showing?<div className="row">
                    <Paylist price={ele.price} reserved = { this.props.reserved } ServiceTax={this.props.ServiceTax} initiallyReserved={ele.bookedseat}/>
                          </div>:null } 
                 </div>
                </div>   
               </div>
               </div>
           
           
 
              )
        })

         
     
     
     
     )
    
    
    
    
    
    }
    
    onClickSeat(seat) {
     // this.props.reserved.indexOf(seat) >-1
      this.props.onClickData(seat);
    }
  }