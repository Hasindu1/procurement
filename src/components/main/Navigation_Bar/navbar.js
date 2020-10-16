import React from 'react'
import {Link} from 'react-router-dom';


function logout(){
    window.location = '/';
}

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to={'/'} className="navbar-brand"> <h4 style={{color:"green"}}>Logo</h4></Link>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li  className="navbar-item">
                    <Link to={'/Dashboard'} className="nav-link">Home</Link>
                </li>
               
                <li className="navbar-item">
                    <Link to={'/OrderList'} className="nav-link">OrderL ist</Link>
                </li> 

            </ul>
            
                     <button className="ml-auto" onClick = {logout}>
                     <span className="mr-2" ><i className="fa fa-sign-out"/></span>Log out

                     
                    
                     </button>
                     
           
        
        </div>
    </nav>
    )
} 

export default NavBar