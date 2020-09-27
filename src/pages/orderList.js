import React from 'react'
import NavBar from '../components/navbar'

export default function OrderList() {
    return (
        <>
        <NavBar/>
        <ul className="list-group my-5">
                <h2 className="text-capitalize text-center">Requests</h2>
                
                <li className="list-group-item text-capitalize d-flex justify-content-between my-2" >
                 <div><h6>Job Reference No : A2r5345435345</h6></div> 
                 <div> <h6>Total      : 1,150,000LKR</h6> </div>
                
               
                            <div className="todo-icon">
                             
                            </div>
                 </li>
                 <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                 <h6>Job Reference No : A2r5345435345</h6> 
                <h6>Total      : 1,150,000LKR</h6> 
                            <div className="todo-icon">
                            <span className="mx-2 text-primary"><i className="fas fa-envelope"></i><i className="fas fa-share fa-xs"></i></span>
                            </div>
                 </li>
                 <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                 <h6>Job Reference No : A2r5345435345</h6> 
                <h6>Total      : 1,150,000LKR</h6> 
                            <div className="todo-icon">
                             
                            </div>
                 </li>
                 <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                 <h6>Job Reference No : A2r5345435345</h6> 
                <h6>Total      : 1,150,000LKR</h6> 
                            <div className="todo-icon">
                             <span className="mx-2 text-primary"><i className="fas fa-envelope"></i><i className="fas fa-share fa-xs"></i></span>
                            </div>
                 </li>
            </ul>
       </>
    )
}
