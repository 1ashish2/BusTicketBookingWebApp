import React, { Component } from 'react'
import '../css/homestyle.css';
import axios from 'axios';
var _=require('lodash');

//export const contextApis=React.createContext();
export default class Home extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            userdata:[],
            startfrom:[],
            endto:[],
            from:'',
            to:'',
            date:'',
            showdata:false
        }
        
        
    }
   componentDidMount()
    {
       
        axios.get('http://localhost:4000/home')
        .then(res => {
            //console.log(res.data);
            this.setState({ userdata: res.data });
            this.setState({startfrom:_.keys(_.countBy(this.state.userdata,function(data){ return data.from }))});
           this.setState({endto:_.keys(_.countBy(this.state.userdata,function(data){ return data.to }))});
      
        })
        .catch(function (error) {
            console.log(error);
        })
        
     
    }
   
   
    render() {
       
        return (
            <>
            <div className="container">
               
                <div className="row text-center inpt">
                 <div className="col-md-2">
                 </div>
                 
                 <div className="col-md-8 planbus ">
                 <form >
                     <div className="col-md-3 ">
                     <label>From</label>
                     <select class="form-control formelement"  onChange={(event)=>{this.setState({from:event.target.value})}} id="sel1">
                        
                         <option value="">select</option>
                         {
                             this.state.startfrom.map((ele,i)=>{ return <option key={i} id={ele} value={ele}>{ele}</option>})
                         }
                       
                    </select>
                    </div> 
                     <div className="col-md-3">
                     <label>To</label>
                     <select class="form-control formelement"  onChange={(event)=>this.setState({to:event.target.value})} id="sel2">
                    
                     <option value="">select</option> 
                       {
                             this.state.endto.map((ele=><option value={ele} >{ele}</option>))
                        }
                    </select>
                     </div>
                     <div className="col-md-3">
                     <label>TravelDate</label>
                     <input  type="date" className="form-control formelement" onChange={(event)=>this.setState({date:event.target.value})} placeholder="Travel date..." />
                     </div>
                     <div className="col-md-3">
                     <label>ReturnDate(optional)</label>
                     <input  type="date" className="form-control formelement"  placeholder="Return date..." />
                     </div>        
                </form>
                 </div>
                 <div className="col-md-2">

                 </div>
                </div>
               <div className="row text-center btmbus">
                   <div className="col-md-5">

                   </div>
                 <button className="btn btn-warning col-md-2 btnsubmit " onClick={
                     ()=> this.setState({showdata:true})
                 }>Plan Journey</button>
                
                 <div className="col-md-4">

                   </div>
               </div>
            </div>
            <div className="container buslist">
              <div className="row">
                  <div className="col-md-1"></div>
                <div className="col-md-10 ">
                 <table className="table buslistitem">
                   {this.state.showdata?<thead><tr className="text-center" style={{textSize:"20px"}}><th>BUS Type</th>
                         <th>Source</th>
                         <th>Destination</th>
                         <th>Departure</th>
                         <th>Arrival</th>
                         <th>Date</th>
                         <th>Available Seats</th>
                         <th>Fare</th>
                         <th></th>
                         </tr></thead>:null}
                     {
                        this.state.showdata? this.state.userdata.map(ele=>{
                           // console.log(ele._id);
                       return( 
                         this.state.from !== ele.from?null:this.state.to !==ele.to ?null:this.state.date !==ele.date ?null:
                        <>
                         <tbody>
                             <tr className="text-center" style={{fontSize:"16px"}}>
                                <td>{ele.bustype}</td>
                                <td>{ele.from}</td>
                                <td>{ele.to}</td>
                                <td>{ele.Departure}</td>
                                <td>{ele.Arrival}</td>
                                <td>{ele.date}</td>
                                <td>{ele.availableseat}</td>
                                <td>{ele.fare}</td>
                                <td><button className="btn btn-primary btnsubmit" name={ele._id} onClick={()=>{
                                    localStorage.setItem('bookedseat',ele._id)
                                    localStorage.getItem('name')?this.props.history.push('/seatlist'):this.props.history.push('/register')
                                }}>view seats</button></td>
                             </tr>
                         </tbody>
                         </>
                        )} ):null
                     }
                 </table>
               
                </div>
                <div className="col-md-1"></div>
              </div>

            </div>
            </>
        )
    }
}
