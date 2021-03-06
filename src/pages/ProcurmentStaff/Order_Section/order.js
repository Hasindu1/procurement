import React, { Component } from 'react'
import NavBar from '../../../components/main/Navigation_Bar/navbar'
import {getOrder,Approve,PartiallyApprove,Decline,sendToReference,SetRemarks} from '../../../Services/orderServices'
import {getSupplierByName} from '../../../Services/supplierService'
import {getSiteByName} from '../../../Services/siteServices'
import {getApprovalLimits} from '../../../Services/policyService'
import * as MyConstClass from '../../../Constant/Constants'


export default class Order extends Component {
    
    constructor(props){
        super(props);

        this.onChangeRemarks = this.onChangeRemarks.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            //Order Properties

            orderId:'', //primary key   
            comment:'',
            date:new Date(),
            description:'',
            draft:false,
            product:'',
            quantity:0,
            status:'',
            total:0.0,
            unit:0.0,
            remarks:'',
           

            //Supplier Properties
            suppliers:[],
            supplier:'',
            supAddress:'',
            supContact:'',
            supEmail:'',

            //Site Properties
            sites:[],
            site:'',
            siteAddress:'',
            siteContact:'',
            siteEmail:'',

            //Approval Limits
            siteManagerApprovalLimit:0,
            staffApprovalLimit:0,



        };
    }

    componentDidMount(){
        
        getOrder(this.props.match.params.id)
        .then(res => {
            this.setState({
                comment:res.data().comment,
                description:res.data().description,
                draft:res.data().draft,
                product:res.data().product,
                quantity:res.data().quantity,
                status:res.data().status,
                supplier:res.data().supplier,
                total:res.data().budget,
                unit:res.data().unit,
                orderId:this.props.match.params.id,
                remarks:res.data().reason
        })


            getSupplierByName(res.data().supplier)
            .then((response) => {
               response.forEach((sup => {
                    this.setState({
                        supplier:sup.data().name,
                        supAddress:sup.data().address,
                        supContact:sup.data().contact,
                        supEmail:sup.data().email
                    })
    
               }))
    
          
    
               })

        
        getSiteByName(res.data().site)
        .then((response) => {
           response.forEach((site => {
         
                this.setState({
                    site:site.data().name,
                    siteAddress:site.data().address,
                    siteContact:site.data().contact,
                    siteEmail:site.data().email
                })

           }))

      

           })
         })


         getApprovalLimits()
         .then(res => {
            this.setState({
                    staffApprovalLimit:res.data().staffApproveLimit,
                    siteManagerApprovalLimit:res.data().siteManagerApproveLimit
            })
         })

}

onChangeRemarks(e){
    this.setState({
        remarks:e.target.value
    })
}

onSubmit(e){

    e.preventDefault();

    /**
     * Conditionally calling the set status methods
     */

    if(this.state.status == MyConstClass.Approved){
        Approve(this.props.match.params.id);
    }

    else if(this.state.status == MyConstClass.Declined){
        Decline(this.props.match.params.id);
    }

    else if(this.state.status == MyConstClass.Sent_To_Reference){
        sendToReference(this.props.match.params.id);
    }
    
    else if(this.state.status == MyConstClass.Partially_Approved){
        PartiallyApprove(this.props.match.params.id);
    }


    //set the Order Remark
    SetRemarks(this.props.match.params.id,this.state.remarks);

    alert(this.state.status);

    
    
}

changeStatus(e) {

    this.setState({
        status:e.target.value
    })

   
}



    render() {
        return (
            <>
            <NavBar/>
            <div class="jumbotron" style={{marginTop: 20}}>
                
                <center><h3 style={{marginTop:20}}><u>Order Request</u></h3></center>
    
                
    
        <h3>Company Details</h3>

            <form onSubmit={this.onSubmit}>

                <div style={{float:'right'}}>
                        <label> Order Id :</label>
                        <input type="text"  value={this.state.orderId} readOnly/>
                </div>
                <br/>
                <div className="form-group">
                        <label> Company Name :</label>
                        <input type="text" className="form-control" value={this.state.site} readOnly/>
                </div>
    
                    <div className="form-group">
                       
                        <label> Address:</label>
                        <span><input type="text" className="form-control" value={this.state.siteAddress} readOnly/></span>    
                        
                    </div>
    
                    <div className="form-group">
                       
                       <label> Email:</label>
                       <span><input type="email" className="form-control" value={this.state.siteEmail} readOnly/></span>    
                       
                   </div>
    
                    <div className="form-group">
                        <label> Contact No</label>
                        <input type="tel" className="form-control" value={this.state.siteContact} readOnly/>
                    </div>
    
    
                    <div className="form-group">
                        <label> Type of product</label>
                        <input type="text" className="form-control"  value={this.state.product} readOnly/>
                    </div>
    
                    <div className="form-group">
                        <label> Quantity</label>
                        <input type="number" className="form-control"  value={this.state.quantity} readOnly/>
                    </div>
    
                    <div className="form-group">
                        <label> Unit Price</label>
                        <input type="number" className="form-control" value={this.state.unit} readOnly/>
                    </div>
    
                    <div className="form-group">
                        <label>Total Price</label>
                        <input type="number" className="form-control" value={this.state.total} readOnly/>
                    </div>
    
                    <hr/>
    
                    <h3>Supplier details</h3>
    
    
                    <div className="form-group">
                            <label> Supplier Name :</label>
                            <input type="text" className="form-control" value={this.state.supplier} readOnly/>
                    </div>
    
                    <div className="form-group">
       
                            <label> Address:</label>
                            <span><input type="text" className="form-control" value={this.state.supAddress} readOnly/></span>    
        
                    </div>
    
                    <div className="form-group">
       
                             <label> Email:</label>
                            <span><input type="email" className="form-control" value={this.state.supEmail} readOnly/></span>    
       
                    </div>
    
                    <div className="form-group">
                             <label> Contact No</label>
                            <input type="tel" className="form-control" value={this.state.supContact} readOnly/>
                    </div>
    
    
                     <div className="form-group">
                           <label> Required Date</label>
                           <input type="text" className="form-control" value={this.state.date} readOnly />
                     </div>
    
                     <div className="form-group">
                            <label>Description</label>
                            <textarea id="w3review" name="w3review" rows="4" cols="50" className="form-control" readOnly>
                                 {this.state.description}
                            </textarea>
                     </div>
    
                    
    
                    
                    <center>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success" value={MyConstClass.Approved} onClick={this.changeStatus} disabled={this.state.total >= this.state.staffApprovalLimit }> Approve </button> &nbsp;
                        <button type="submit" className="btn btn-warning" value={MyConstClass.Partially_Approved} onClick={this.changeStatus} disabled={this.state.total >= this.state.staffApprovalLimit }> Partially Approve</button> &nbsp;
                        <button type="submit" className="btn btn-primary" value={MyConstClass.Sent_To_Reference} onClick={this.changeStatus}> Reffered </button> &nbsp;
                        <button type="submit" className="btn btn-danger" value={MyConstClass.Declined} onClick={this.changeStatus} disabled={this.state.total >= this.state.staffApprovalLimit }> Decline </button> &nbsp;
                    </div>
                    </center>
    
                    <div className="form-group">
                            <label>Remarks</label>
                            <textarea id="w3review" name="w3review" rows="4" cols="50" className="form-control" value={this.state.remarks} onChange={this.onChangeRemarks} />

                            
                     </div>
    
    
                </form>
    
               
               </div>
    
            </>
          
        )
    }
}

