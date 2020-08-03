import React from 'react';

export default class Userlist extends React.Component{
   
    handelchange=(event)=>{
     
       localStorage.setItem(`${this.props.rlist}`,event.target.value)
    }
     render(){
       
         return(
           
             <div className="col-md-12">
                 <form className="form">
                   <div className="row text-center">
                     <div className="col-xs-6 col-md-7">
                     <input type="text" className="form-control"   placeholder="Enter name" onChange={this.handelchange }/>
                     </div>
                     <div className="col-xs-6 col-md-5">
                         <div className="col-xs-6 col-md-6">
                         <div className="radio" onChange={(event)=>localStorage.setItem(`gender${this.props.rlist}`,event.target.value)} >
                         <label><input type="radio" name="optradio" value="male" />Male</label>
                         </div>
                         </div>
                         <div className="col-xs-6 col-md-6">
                         <div className="radio" >
                         <label><input type="radio" name="optradio" value="female" onChange={(event)=>localStorage.setItem(`gender${this.props.rlist}`,event.target.value)}/>Female</label>
                         </div>
                         </div>
                      </div>
                   </div>
                   
               </form>
               
       </div>
         )
     }
 }
 