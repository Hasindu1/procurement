import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {addNewSite} from '../../../Services/siteServices'



export default class NewSite extends Component {
    
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            //site Properties
            name:'',
            contact:'',
            address:'',
            email:'',

        };
    }

  

    onChangeName(e){
    this.setState({
        name:e.target.value
    })

    }


onChangeContact(e){
    this.setState({
        contact:e.target.value
    })
}

onChangeAddress(e){
    this.setState({
        address:e.target.value
    })
}

onChangeEmail(e){
    this.setState({
        email:e.target.value
    })
}


onSubmit(e){
    e.preventDefault();

    const NewSite = {
        address:this.state.address,
        contact:this.state.contact,
        email:this.state.email,
        name:this.state.name,
    }

    addNewSite(NewSite);

   //Alert Display
   alert('Created Successfully')
    

}



    render() {
        return (
            <>
        
            <div class="jumbotron" style={{marginTop: 20}}>
                
                <center><h3 style={{marginTop:20}}><u>New Site</u></h3></center>
       
       

            <form onSubmit={this.onSubmit} className="site">

    
                    <h3>Site details</h3>
    
    
                    <div className="form-group">
                            <label> Site Name :</label>
                            <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName}/>
                    </div>
    
                    <div className="form-group">
       
                            <label> Address:</label>
                            <input type="text" className="form-control" value={this.state.address} onChange={this.onChangeAddress}/>   
        
                    </div>
    
                    <div className="form-group">
       
                             <label> Email:</label>
                            <span><input type="email" id="email" name="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail}/></span>    
       
                    </div>
                  
                    <div className="form-group">
                             <label> Contact No</label>
                            <input type="tel" className="form-control" value={this.state.contact} onChange={this.onChangeContact}/>
                    </div>
    
    
                    
    
                    
                    <center>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success" > Create </button> &nbsp;
                        <Link to={"/SiteList"}><button className="btn btn-primary" > Go Back</button> </Link>
                        
                    </div>
                    </center>
    
    
    
                </form>
    
               
               </div>
    
            </>
          
        )
    }
}

