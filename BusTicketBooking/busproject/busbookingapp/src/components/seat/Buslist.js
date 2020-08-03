import React from 'react';

export default class Buslist extends React.Component{

    render()
    {
       // this.props.buslist.map((ele)=> console.log(ele))
        const id=this.props.busid;
      // console.log(id)
        return(
            this.props.buslist.map((ele)=>
            {
               
                   if( id == (ele._id))
                     {

                        return(
                             
                                <div className=" col-md-12">
                                <h1>Booking Summery</h1>
                                <hr/>
                                <form className="text-center">
                                <div className="col col-md-3">
                                <label className="">From</label>
                                <input type="text" className="form-control text-center" value={ele.from} />
                                </div>
                                <div className=" col col-md-3">
                                <label>To</label>
                                <input type="text" className="form-control text-center" value={ele.to}/>
                                </div>
                                <div className=" col col-md-3">
                                <label>Date</label>
                                <input type="text" className="form-control text-center" value={ ele.date}/>
                                </div>
                                <div className=" col col-md-3">
                                <label>Bus Type</label>
                                <input type="text" className="form-control text-center" value={ ele.bustype}/>
                                </div>
                            </form>
                             </div>
                          )
                         
                        }
                   
                  
                    }
                    )
                  
        )
    }
}