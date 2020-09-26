import React from 'react'
import NavBar from '../components/navbar'

export default function Order() {
    return (
        <>
        <NavBar/>
        <div class="jumbotron" style={{marginTop: 20}}>
            
            <center><h3 style={{marginTop:20}}><u>Order</u></h3></center>

            <form>

                <div className="form-group">

                <div className="form-group">
                    <label> Username :</label>
                    <input type="text" className="form-control"  placeholder="Enter a user name you like" />
                </div>

                <div className="form-group">
                    <label> Email address :</label>
                    <input type="email" className="form-control" placeholder="Enter the email address" />
                </div>

                <div className="form-group">
                    <label> Password:</label>
                    <input type="password" className="form-control" placeholder="Enter the password" />
                </div>

                
                <center>
                <div className="form-group">
                    <input type="submit" value="Register Student" className="btn btn-primary"/> &nbsp;
                </div>
                </center>

                </div>


            </form>

            </div>

        </>
      
    )
}
