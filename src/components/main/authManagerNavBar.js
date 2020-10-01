import React from 'react'
import {Link} from 'react-router-dom';

const AuthManagerNavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to={'/'} className="navbar-brand"> <h4 style={{color:"green"}}>Logo</h4></Link>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li  className="navbar-item">
                    <Link to={'/AuthManagerOrderList'} className="nav-link">Home</Link>
                </li>
               

            </ul>
            
                     <button className="ml-auto">
                     <span className="mr-2" ><i className="fa fa-sign-out"/></span>Log out

                     
                    
                     </button>
                     
           
        
        </div>
    </nav>
    )
} 

export default AuthManagerNavBar