import React, { Component } from 'react'
import NavBar from '../../../components/main/Navigation_Bar/navbar'
import {getOrder} from '../../../Services/orderServices'
import {addPayment} from '../../../Services/paymentService'
import {getDeilveryDetails} from '../../../Services/deliveryService'
import {getAccount_Balance_Budget,reduceAmount} from '../../../Services/AccountService'

export default class HandlePayment extends Component {
    
    constructor(props){
        super(props);


        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            //delivery Properties

            deliveryId:'',
            orderId:'',   
            Item:'',
            unitPrice:0.0,
            quantity:0,
            total:0.0,

            //account Properties
            currentBalance : 0
            
           
        };
    }

    componentDidMount(){
        
        getDeilveryDetails(this.props.match.params.id)
        .then(res => {
            this.setState({
                deliveryId:this.props.match.params.id,
                orderId:res.data().orderRef,
                Item:res.data().item,
        })

        getOrder(res.data().orderRef)
        .then(res => {
            this.setState({
                unitPrice:res.data().quantity,
                quantity:res.data().unit,
                total:res.data().unit * res.data().quantity
        })    

    })

 })

     getAccount_Balance_Budget()
     .then(res => {
        this.setState({
            currentBalance:res.data().currentBalance
         })
     })

}


onSubmit(e){

    e.preventDefault();

   const newBalance = this.state.currentBalance - this.state.total

   if(newBalance > 0){
              const Payment ={
                      deliveryId:this.state.deliveryId,
                      orderId:this.state.orderId,   
                      Item:this.state.item,
                      unitPrice:this.state.unitPrice,
                      quantity:this.state.quantity,
                      total:this.state.total,
                  }

            addPayment(Payment)
            reduceAmount(newBalance)

            alert("payment is successfully done")

   }
   else{
    alert("not sufficient balance")
   }
    

 
   
}




    render() {
        return (
            <>
            <NavBar/>
            <div class="jumbotron" style={{marginTop: 20}}>
                
                <center><h3 style={{marginTop:20}}><u>Delivery</u></h3></center>
    
                
    
        <h3>Delivery Details</h3>

            <form onSubmit={this.onSubmit}>

                <div className="form-group">
                        <label> Delivery Id:</label>
                        <input type="text" className="form-control" value={this.state.deliveryId} readOnly/>
                </div>
    
                    <div className="form-group">
                       
                        <label> Order Id:</label>
                        <span><input type="text" className="form-control" value={this.state.orderId} readOnly/></span>    
                        
                    </div>
    
                 <hr/>

                 <h6> Item Details</h6>

                    <div className="form-group">
                       
                       <label>Item Name</label>
                       <span><input type="text" className="form-control" value={this.state.Item} readOnly/></span>    
                       
                   </div>
    
                    <div className="form-group">
                        <label>Item quantity</label>
                        <input type="tel" className="form-control" value={this.state.quantity} readOnly/>
                    </div>
    
    
                    <div className="form-group">
                        <label>Item Unit Price</label>
                        <input type="text" className="form-control"  value={this.state.unitPrice} readOnly/>
                    </div>
    
                    <div className="form-group">
                        <label>Total Price</label>
                        <input type="number" className="form-control" value={this.state.total} readOnly/>
                    </div>
    
                    <hr/>
    
                
                    
                    <center>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Add Payment </button>
                    </div>
                    </center>
    
                </form>
    
               
               </div>
    
            </>
          
        )
    }
}

