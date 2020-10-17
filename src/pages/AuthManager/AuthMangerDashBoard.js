import React from 'react'

// components
import  AuthManagerNavBar from '../../components/main/Navigation_Bar/authManagerNavBar'
import { Link } from 'react-router-dom'

export default function dashboard() {
    return (
        <>
        <AuthManagerNavBar/>
        <div class="jumbotron" style={{marginTop: 20}}>
            <h2 style={{textAlign: "center"}}><u>Welcome to the Procurement Auth Manager DashBaord</u></h2>
        </div>
        <div class="card-group">

        <div class="card">
                <div class="card-body">
                        <h4 class="card-title"> <b>Orders</b></h4>
                        <p class="card-text">You can go to the Orders Section (Should Reffered)</p>
                        </div>
                <div class="card-footer">
                        <center><Link to={"/AuthManagerOrderList"}><button className="btn btn-primary" >Go to</button> </Link></center>
                </div>
        </div>

        <div class="card">
                <div class="card-body">
                        <h4 class="card-title"> <b>Suppliers</b></h4>
                        <p class="card-text">You can go to the Supplier Section</p>
                        </div>
                <div class="card-footer">
                        <center><Link to={"/AuthManagerSupplierList"}><button className="btn btn-primary" >Go to</button> </Link></center>
                </div>
        </div>
        <div class="card">
                <div class="card-body">
                        <h4 class="card-title"><b>Items</b></h4>
                        <p class="card-text">You can go to the Item Section</p>
                        </div>
                <div class="card-footer">
                        <center><Link to={"/AuthManagerItemList"}><button className="btn btn-primary" >Go to</button> </Link></center>
                </div>
        </div>
        <div class="card">
                <div class="card-body">
                        <h4 class="card-title"><b>Sites</b></h4>
                        <p class="card-text">You can go to the Sites Section</p>
                        </div>
                <div class="card-footer">
                <center><Link to={"/AuthManagerSiteList"}><button className="btn btn-primary" >Go to</button> </Link></center>
                </div>
        </div>
        </div>

        <div class="card-group">
 
 <div class="card">
         <div class="card-body">
                 <h4 class="card-title"> <b>Deliveries</b></h4>
                 <p class="card-text">You can go to the Delivery Section</p>
                 </div>
         <div class="card-footer">
                 <center><Link to={"/AuthManagerDeliveryList"}><button className="btn btn-primary" >Go to</button> </Link></center>
         </div>
 </div>
 <div class="card">
         <div class="card-body">
                 <h4 class="card-title"><b>Payments</b></h4>
                 <p class="card-text">You can go to the Payment Section</p>
                 </div>
         <div class="card-footer">
                 <center><Link to={"/AuthManagerPaymentList"}><button className="btn btn-primary" >Go to</button> </Link></center>
         </div>
 </div>
 <div class="card">
         <div class="card-body">
                 <h4 class="card-title"><b>Policies</b></h4>
                 <p class="card-text">You can go to the Sites Section</p>
                 </div>
         <div class="card-footer">
         <center><Link to={"/policy"}><button className="btn btn-primary" >Go to</button> </Link></center>
         </div>
 </div>
 <div class="card">
         <div class="card-body">
                 <h4 class="card-title"><b>Financial Settings</b></h4>
                 <p class="card-text">You can go to the Financial Settings Section</p>
                 </div>
         <div class="card-footer">
         <center><Link to={"/Account"}><button className="btn btn-primary" >Go to</button> </Link></center>
         </div>
 </div>
 </div>

       </>
    )
}
