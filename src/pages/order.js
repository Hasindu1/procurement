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
            comment:'',
            date:'',
            description:'',
            draft:'',
            product:'',
            quantity:0,
            site:'',
            status:'',
            supplier:'',
            total:0,
            unit:0,
            remarks:''

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
                site:res.data().site,
                status:res.data().status,
                supplier:res.data().supplier,
                total:res.data().total,
                unit:res.data().unit,
                id:this.props.match.params.id
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
                    <div className="form-group">
                        <label> Company Name :</label>
                        <input type="text" className="form-control"  value={this.state.site} readOnly/>
                    </div>
    
                    <div className="form-group">
                       
                        <label> Address:</label>
                        <span><input type="text" className="form-control" readOnly/></span>    
                        
                    </div>
    
                    <div className="form-group">
                       
                       <label> Email:</label>
                       <span><input type="email" className="form-control" readOnly/></span>    
                       
                   </div>
    
                    <div className="form-group">
                        <label> Contact No</label>
                        <input type="tel" className="form-control" readOnly/>
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
                            <span><input type="text" className="form-control" readOnly/></span>    
        
                    </div>
    
                    <div className="form-group">
       
                             <label> Email:</label>
                            <span><input type="email" className="form-control" readOnly/></span>    
       
                    </div>
    
                    <div className="form-group">
                             <label> Contact No</label>
                            <input type="tel" className="form-control" readOnly/>
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
                        <button type="submit" className="btn btn-success" value="approved" onClick={this.changeStatus}> Approve </button> &nbsp;
                        <button type="submit" className="btn btn-danger" value="declined" onClick={this.changeStatus}> Decline </button> &nbsp;
                        <button type="submit" className="btn btn-primary" value="Sent To Reference" onClick={this.changeStatus}> Reffered </button> &nbsp;
                        <button type="submit" className="btn btn-warning" value="partially approved" onClick={this.changeStatus}> Partially Approve</button> &nbsp;
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

