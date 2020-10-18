import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {AddNewSupplier} from '../../../Services/supplierService'



export default class NewSupplier extends Component {
    
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDepot = this.onChangeDepot.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            //Supplier Attributes
            name:'',
            contact:'',
            address:'',
            email:'',
            depotName:''

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

onChangeDepot(e){
    this.setState({
        depotName:e.target.value
    })
}


onSubmit(e){
    e.preventDefault();

    const Supplier = {
        address:this.state.address,
        availability:true,
        contact:this.state.contact,
        email:this.state.email,
        name:this.state.name,
        depot:this.state.depotName
    }

    AddNewSupplier(Supplier);
    
         //Alert Display
         alert('Created Successfully')
}



    render() {
        return (
            <>
        
            <div class="jumbotron" style={{marginTop: 20}}>
                
                <center><h3 style={{marginTop:20}}><u>New Supplier</u></h3></center>
       
       

            <form onSubmit={this.onSubmit} className="supplier">

    
                    <h3>Supplier details</h3>
    
    
                    <div className="form-group">
                            <label> Supplier Name :</label>
                            <input type="text" id="name" name="name" className="form-control" value={this.state.name} onChange={this.onChangeName}/>
                    </div>
    
                    <div className="form-group">
       
                            <label> Address:</label>
                            <input type="text" className="form-control" value={this.state.address} onChange={this.onChangeAddress}/>   
        
                    </div>
    
                    <div className="form-group">
       
                             <label> Email:</label>
                            <span><input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail}/></span>    
       
                    </div>
    
                    <div className="form-group">
                             <label> Contact No</label>
                            <input type="tel" className="form-control" value={this.state.contact} onChange={this.onChangeContact}/>
                    </div>
                    
    
                    <div className="form-group">
       
                             <label>Depot Name:</label>
                            <span><input type="text" className="form-control" value={this.state.depotName} onChange={this.onChangeDepot}/></span>    
       
                    </div>
    
    
                    
                    <center>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success" > Create </button> &nbsp;
                        <Link to={"/SupplierList"}><button className="btn btn-primary" > Go Back</button> </Link>
                        
                    </div>
                    </center>
    
    
    
                </form>
    
               
               </div>
    
            </>
          
        )
    }
}

