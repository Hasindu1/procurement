import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {getAccount_Balance_Budget} from '../../../Services/AccountService'
import NavBar from '../../../components/main/Navigation_Bar/navbar'



export default class Account extends Component {
    
    constructor(props){
        super(props);

        this.state = {

            //site Properties
            currentBalance:0,
            annualBudget:0,

        };
    }


    componentDidMount(){

        getAccount_Balance_Budget()
        .then(res => {
           this.setState({
               currentBalance:res.data().currentBalance,
               annualBudget:res.data().annualBudget
            })
        })
   
  
}

   

    render() {
        return (
            <>
        <NavBar/>
            <div class="jumbotron" style={{marginTop: 20}}>
                
                <center><h3 style={{marginTop:20}}><u>Financial Details</u></h3></center>
       
       

            <form onSubmit={this.onSubmit}>

    
                    <h3>Financial Details</h3>
    
    
                    <div className="form-group">
                            <label> Annaul Budget :</label>
                            <input type="number" className="form-control" value={this.state.annualBudget} readOnly/>
                    </div>
    
                    <div className="form-group">
       
                            <label> Current Calance:</label>
                            <input type="number" className="form-control" value={this.state.currentBalance} readOnly/>   
        
                    </div>
    
                  
                    
                    <center>
                    <div className="form-group">
            
                        <Link to={"/Dashboard"}><button className="btn btn-primary" > Go Back</button> </Link>
                        
                    </div>
                    </center>
    
    
    
                </form>
    
               
               </div>
    
            </>
          
        )
    }
}

