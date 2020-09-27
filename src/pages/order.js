import React from 'react'
import NavBar from '../components/navbar'

export default function Order() {
    return (
        <>
        <NavBar/>
        <div class="jumbotron" style={{marginTop: 20}}>
            
            <center><h3 style={{marginTop:20}}><u>Order Request</u></h3></center>

            <form>

                <h3>Company details</h3>


                <div className="form-group">
                    <label> Company Name :</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="form-group">
                   
                    <label> Address:</label>
                    <span><input type="text" className="form-control"/></span>    
                    
                </div>

                <div className="form-group">
                   
                   <label> Email:</label>
                   <span><input type="email" className="form-control"/></span>    
                   
               </div>

                <div className="form-group">
                    <label> Contact No</label>
                    <input type="tel" className="form-control" />
                </div>


                <div className="form-group">
                    <label> Type of product</label>
                    <input type="tel" className="form-control"  />
                </div>

                <div className="form-group">
                    <label> Quantity</label>
                    <input type="number" className="form-control"  />
                </div>

                <div className="form-group">
                    <label> Unit Price</label>
                    <input type="number" className="form-control"  />
                </div>

                <div className="form-group">
                    <label>Total Price</label>
                    <input type="number" className="form-control" />
                </div>

                <hr/>

                <h3>Supplier details</h3>


                <div className="form-group">
                        <label> Supplier Name :</label>
                        <input type="text" className="form-control"/>
                </div>

                <div className="form-group">
   
                        <label> Address:</label>
                        <span><input type="text" className="form-control"/></span>    
    
                </div>

                <div className="form-group">
   
                         <label> Email:</label>
                        <span><input type="email" className="form-control"/></span>    
   
                </div>

                <div className="form-group">
                         <label> Contact No</label>
                        <input type="tel" className="form-control" />
                </div>


                 <div className="form-group">
                       <label> Required Date</label>
                       <input type="date" className="form-control"  />
                 </div>

                 <div className="form-group">
                        <label>Description</label>
                        <textarea id="w3review" name="w3review" rows="4" cols="50" className="form-control">
                             Description
                        </textarea>
                 </div>

                

                
                <center>
                <div className="form-group">
                    <button className="btn btn-success"> Approve </button> &nbsp;
                    <button className="btn btn-danger"> Decline </button> &nbsp;
                    <button className="btn btn-primary"> Reffered </button> &nbsp;
                    <button className="btn btn-warning"> Partially Approve</button> &nbsp;
                </div>
                </center>

                <div className="form-group">
                        <label>Remarks</label>
                        <textarea id="w3review" name="w3review" rows="4" cols="50" className="form-control">
                            Remarks
                        </textarea>
                 </div>


            </form>

            </div>

        </>
      
    )
}
