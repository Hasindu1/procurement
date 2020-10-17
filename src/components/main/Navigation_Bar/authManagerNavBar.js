import React from 'react'
import {Link} from 'react-router-dom';

function logout(){
    window.location = '/';
}

const AuthManagerNavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to={'/AuthDashBoard'} className="navbar-brand"> <h4 style={{color:"green"}}>Logo</h4></Link>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li  className="navbar-item">
                    <Link to={'/AuthDashBoard'} className="nav-link">Home</Link>
                </li>
            </ul>
            
                     <button className="ml-auto" onClick = {logout}>
                     <span className="mr-2" ><i className="fa fa-sign-out"/></span>Log out

                     
                    
                     </button>
                     
           
        
        </div>
    </nav>
    )
} 

export default AuthManagerNavBar