import React, { Component } from 'react'
import firebase from '../../../Firebase'
import {Link} from 'react-router-dom'



export default class NewPolicy extends Component {
    
    constructor(props){
        super(props);

        this.onChangeStaffApproveLimit = this.onChangeStaffApproveLimit.bind(this);
        this.onChangeSiteManagerApproveLimit = this.onChangeStaffApproveLimit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            //site Properties
            staffApproveLimit:0,
            siteManagerApproveLimit:0,

        };
    }

  

    onChangeStaffApproveLimit(e){
    this.setState({
        staffApproveLimit:e.target.value
    })

    }


    onChangeSiteManagerApproveLimit(e){
    this.setState({
        siteManagerApproveLimit:e.target.value
    })
}


onSubmit(e){
    e.preventDefault();

    firebase
    .firestore()
    .collection('policies')
    .doc('fVr0ac5nhXlF78cizaMk')
    .set({
        staffApproveLimit:this.state.staffApproveLimit,
        siteManagerApproveLimit:this.state.siteManagerApproveLimit,
        
    })

   
    

}



    render() {
        return (
            <>
        
            <div class="jumbotron" style={{marginTop: 20}}>
                
                <center><h3 style={{marginTop:20}}><u>Policies</u></h3></center>
       
       

            <form onSubmit={this.onSubmit}>

    
                    <h3>Policy Details</h3>
    
    
                    <div className="form-group">
                            <label> Staff Approve Limit :</label>
                            <input type="number" className="form-control" value={this.state.staffApproveLimit} onChange={this.onChangeStaffApproveLimit}/>
                    </div>
    
                    <div className="form-group">
       
                            <label> Site Manager Approve Limit:</label>
                            <input type="number" className="form-control" value={this.state.siteManagerApproveLimit} onChange={this.onChangeSiteManagerApproveLimit}/>   
        
                    </div>
    
                  
                    
                    <center>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success" > Update Policies </button> &nbsp;
                        <Link to={"/"}><button className="btn btn-primary" > Go Back</button> </Link>
                        
                    </div>
                    </center>
    
    
    
                </form>
    
               
               </div>
    
            </>
          
        )
    }
}

