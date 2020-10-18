import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {getApprovalLimits,setStaffAprovalLimit,setSiteManagerAprovalLimit} from '../../../Services/policyService'
import AuthManagerNavBar from '../../../components/main/Navigation_Bar/authManagerNavBar'



export default class NewPolicy extends Component {
    
    constructor(props){
        super(props);

        this.onChangeStaffApproveLimit = this.onChangeStaffApproveLimit.bind(this);
        this.onChangeSiteManagerApproveLimit = this.onChangeSiteManagerApproveLimit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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

    setStaffAprovalLimit(this.state.staffApproveLimit);
    setSiteManagerAprovalLimit(this.state.siteManagerApproveLimit);

    //Alert display
    alert('Policy Updated');


}



    render() {
        return (
            <>
         <AuthManagerNavBar/>
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
                        <Link to={"/AuthDashBoard"}><button className="btn btn-primary" > Go Back</button> </Link>
                        
                    </div>
                    </center>
    
    
    
                </form>
    
               
               </div>
    
            </>
          
        )
    }
}

