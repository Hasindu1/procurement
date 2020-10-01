import React, { Component } from 'react'
import NavBar from '../components/navbar'
import firebase from '../Firebase'



export default class Order extends Component {
    
    constructor(props){
        super(props);

        this.onChangeRemarks = this.onChangeRemarks.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            //Order Properties
            comment:'',
            date:'',
            description:'',
            draft:'',
            product:'',
            quantity:0,
            status:'',
            total:0,
            unit:0,
            remarks:'',
            orderId:'',

            //Supplier Properties
            supplier:'',
            supAddress:'',
            supContact:'',
            supEmail:'',

            //Site Properties
            site:'',
            siteAddress:'',
            siteContact:'',
            siteEmail:''




        };
    }

    componentDidMount(){
        
        firebase
        .firestore()
        .collection('orders')
        .doc(this.props.match.params.id)
        .get()
        .then(res => {
            this.setState({
                Order: res.data(),
                comment:res.data().comment,
                date:res.data().date,
                description:res.data().description,
                draft:res.data().draft,
                product:res.data().product,
                quantity:res.data().quantity,
                status:res.data().status,
                supplier:res.data().supplier,
                total:res.data().total,
                unit:res.data().unit,
                orderId:this.props.match.params.id
            })

            firebase
            .firestore()
            .collection('suppliers')
            .doc("XJqlIZ8wRVkSdV8y6Y4H")
            .get()
            .then(response => {
             this.setState({
                     supplier:response.data().name,
                     supAddress:response.data().address,
                     supContact:response.data().contact,
                     supEmail:response.data().email
            })

        })

        
        firebase
        .firestore()
        .collection('sites')
        .doc("6WQFswR1LTvKTsGj0Xls")
        .get()
        .then(response => {
         this.setState({
                 site:response.data().name,
                 siteAddress:response.data().address,
                 siteContact:response.data().contact,
                 siteEmail:response.data().email
                })

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


    firebase
    .firestore()
    .collection('orders')
    .doc(this.props.match.params.id)
    .set({
        comment:this.state.comment,
        date:this.state.date,
        description:this.state.description,
        draft:this.state.draft,
        product:this.state.product,
        quantity:this.state.quantity,
        site:this.state.site,
        status:this.state.status,
        supplier:this.state.supplier,
        total:this.state.total,
        unit:this.state.unit,
        remarks: this.state.remarks
    })
    

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
                           <input type="date" className="form-control" readOnly />
                     </div>
    
                     <div className="form-group">
                            <label>Description</label>
                            <textarea id="w3review" name="w3review" rows="4" cols="50" className="form-control" readOnly>
                                 {this.state.description}
                            </textarea>
                     </div>
    
                    
    
                    
                    <center>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success" value="approved" onClick={this.changeStatus} disabled={this.state.total >= 1000000 }> Approve </button> &nbsp;
                        <button type="submit" className="btn btn-warning" value="partially approved" onClick={this.changeStatus} disabled={this.state.total >= 1000000 }> Partially Approve</button> &nbsp;
                        <button type="submit" className="btn btn-primary" value="Sent To Reference" onClick={this.changeStatus}> Reffered </button> &nbsp;
                        <button type="submit" className="btn btn-danger" value="declined" onClick={this.changeStatus} disabled={this.state.total >= 1000000 }> Decline </button> &nbsp;

                        
                    </div>
                    </center>
    
                    <div className="form-group">
                            <label>Remarks</label>
                            <textarea id="w3review" name="w3review" rows="4" cols="50" className="form-control" value={this.state.remarks} onChange={this.onChangeRemarks}>
                                {this.state.remarks}
                            </textarea>
                     </div>
    
    
                </form>
    
               
               </div>
    
            </>
          
        )
    }
}

