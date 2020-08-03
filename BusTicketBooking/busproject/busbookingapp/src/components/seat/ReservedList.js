import React from 'react';
import Userlist from './Userlist'

export default class ReservedList extends React.Component {
    render() {
        //const money=Number(this.props.reserved.length-2) * Number(this.props.price);
      return(
        <div className="col-md-10">
          <h4 className="text-center">Reserved Seats: ({this.props.reserved.length-this.props.initiallyReserved.length})</h4>
          <table className="table">
              <thead>
                  <tr>
                      <th ></th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
              {this.props.reserved.map( res =>this.props.reserved.indexOf(res) > this.props.initiallyReserved.length-1?<><tr><td><h4>Seat No:</h4></td><td key={res} ><h5>{res}</h5></td></tr><Userlist rlist={res}/></>:null )}
               
              </tbody>
          </table>
          
         
        </div>
      )
    }
  }