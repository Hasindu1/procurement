import React from 'react'

// components
import NavBar from '../../components/main/Navigation_Bar/navbar'
import { Link } from 'react-router-dom'

export default function dashboard() {
    return (
        <>
        <NavBar/>
        <div class="jumbotron" style={{marginTop: 20}}>
            <h2 style={{textAlign: "center"}}><u>Welcome to the Our Procurement System Admin DashBaord</u></h2>
        </div>
        <div class="card-group">
 
        <div class="card">
                <div class="card-body">
                        <h4 class="card-title">Suppliers</h4>
                        <p class="card-text">You can go to the Supplier Section</p>
                        </div>
                <div class="card-footer">
                        <Link to={"/SupplierList"}><button className="btn btn-primary" >Go to</button> </Link>
                </div>
        </div>
        <div class="card">
                <div class="card-body">
                        <h4 class="card-title">Items</h4>
                        <p class="card-text">You can go to the Item Section</p>
                        </div>
                <div class="card-footer">
                        <Link to={"/ItemList"}><button className="btn btn-primary" >Go to</button> </Link>
                </div>
        </div>
        <div class="card">
                <div class="card-body">
                        <h4 class="card-title">Sites</h4>
                        <p class="card-text">You can go to the Sites Section</p>
                        </div>
                <div class="card-footer">
                <Link to={"/SiteList"}><button className="btn btn-primary" >Go to</button> </Link>
                </div>
        </div>
        </div>

       </>
    )
}