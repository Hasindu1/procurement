import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {getSite , updateSite , addSupplier} from '../../../Services/siteServices'
import {getAllSuppliers,getSuppliersBySiteName} from '../../../Services/supplierService'


export default class ModifySite extends Component {
    
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeSupplierName = this.onChangeSupplierName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmitSuppliers = this.onSubmitSuppliers.bind(this);

        this.state = {
            //site Properties
            name:'',
            contact:'',
            address:'',
            email:'',
            siteId:'',
            supplierName:'',
            suppliers:[],
            selectedSuppliers:[]

        };
    }

    componentDidMount(){
        
       
        getSite(this.props.match.params.id)
        .then(res => {
            this.setState({
                name:res.data().name,
                contact:res.data().contact,
                address:res.data().address,
                email:res.data().email,
                siteId:this.props.match.params.id
            })

            getSuppliersBySiteName(res.data().name)
            .onSnapshot(snapshot => {
                this.setState({
                    selectedSuppliers:snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                })
            
            })
         })

         getAllSuppliers()
          .onSnapshot(snapshot => {
            this.setState({
                suppliers:snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
            })
        
        })




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

onChangeSupplierName(e){

    this.setState({
        supplierName:e.target.value
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


    updateSite(this.props.match.params.id,NewSite);

     //Alert Display
     alert('Modified Successfully')

}

onSubmitSuppliers(e){
    e.preventDefault();

    const Supplier = {
        site:this.state.name,
        supplier:this.state.supplierName, 
    }

    addSupplier(Supplier)
    .then( 

        getSuppliersBySiteName(this.state.name)
        .onSnapshot(snapshot => {
            this.setState({
                selectedSuppliers:snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
            })
        
        })
    )
}

    render() {
        return (
            <>
            
            <div class="jumbotron" style={{marginTop: 20}}>
                
                <center><h3 style={{marginTop:20}}><u>Modify Site</u></h3></center>
  
                
    

            <form onSubmit={this.onSubmit}>

                <div style={{float:'right'}}>
                        <label> Site Id :</label>
                        <input type="text"  value={this.state.siteId} readOnly/>
                </div>
                <br/>
                
    
                    <h3>Site details</h3>
    
    
                    <div className="form-group">
                            <label> Site Name :</label>
                            <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName}/>
                    </div>
    
                    <div className="form-group">
       
                            <label> Address:</label>
                            <span><input type="text" className="form-control" value={this.state.address} onChange={this.onChangeAddress}/></span>    
        
                    </div>
    
                    <div className="form-group">
       
                             <label> Email:</label>
                            <span><input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail}/></span>    
       
                    </div>
    
                    <div className="form-group">
                             <label> Contact No</label>
                            <input type="tel" className="form-control" value={this.state.contact} onChange={this.onChangeContact}/>
                    </div>
    
    
                  
    
                    
                    <center>
                    <div className="form-group">
                        <button type="submit" className="btn btn-default" > Update </button> &nbsp;
                        <Link to={"/SiteList"}><button type="submit" className="btn btn-primary" >Go back</button> &nbsp;</Link>

                        
                    </div>
                    </center>
    
                 
    
                </form>
    
                <h3>Supplier details</h3>

              <form onSubmit = {this.onSubmitSuppliers}>
                <div className="form-group">
                             <label> Supplier Name</label>
                            <select ref = "supplierInput" className="form-control" value={this.state.supplierName} onChange={this.onChangeSupplierName}>
                                {
                                        this.state.suppliers.map(function(supplier){
                                            return <option key={supplier.name} value={supplier.name}>{supplier.name}</option>
                                        })
                                }
                            </select>
                    </div>
                    <center>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" >Add Supplier</button> &nbsp;
                     
                    </div>
                    </center>

            </form>

                <div class="card">
                <div class="card-header">
                        <h4 class="card-title">Supplier List</h4>
                </div>
                <div class="card-body">
                <ul>
                {this.state.selectedSuppliers.map(function(supplier){

                    return <li><h6> {supplier.supplier}</h6></li>
    
                })
            }
                </ul>
                </div>
               </div>

               
               </div>
    
            </>
          
        )
    }
}

