import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {getApprovalLimits} from '../../../Services/policyService'
import NavBar from '../../../components/main/Navigation_Bar/navbar'



export default class Policy extends Component {
    
    constructor(props){
        super(props);

        this.state = {

            //site Properties
            staffApproveLimit:0,
            siteManagerApproveLimit:0,

        };
    }


    componentDidMount(){

        getApprovalLimits()
        .then(res => {
            this.setState({
                    staffApproveLimit:res.data().staffApproveLimit,
                    siteManagerApproveLimit:res.data().siteManagerApproveLimit
            })
    })
  
}

   

    render() {
        return (
            <>
        <NavBar/>
            <div class="jumbotron" style={{marginTop: 20}}>
                
                <center><h3 style={{marginTop:20}}><u>Policies</u></h3></center>
       
       

            <form onSubmit={this.onSubmit} className="policy">

    
                    <h3>Policy Details</h3>
    
    
                    <div className="form-group">
                            <label> Staff Approve Limit :</label>
                            <input type="number" id="staffApproveLimit" name="staffApproveLimit" className="form-control" value={this.state.staffApproveLimit} readOnly/>
                    </div>
    
                    <div className="form-group">
       
                            <label> Site Manager Approve Limit:</label>
                            <input type="number" className="form-control" value={this.state.siteManagerApproveLimit} readOnly/>   
        
                    </div>
    
                  
                    
                    <center>
                    <div className="form-group">
            
                        <Link to={"/Dashboard"}><button className="btn btn-primary" > Go Back</button> </Link>
                        
                    </div>
                    </center>
    
    
    
                </form>
    
               
               </div>
    
            </>
          
        )
    }
}

