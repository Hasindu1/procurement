import React, { Component } from 'react'
import firebase from '../Firebase'
import { Link } from 'react-router-dom'


export default class ModifySupplier extends Component {
    
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeSiteName = this.onChangeSiteName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            //supplier Properties
            name:'',
            contact:'',
            address:'',
            email:'',
            supId:'',
            siteName:'',
            sites:[]

        };
    }

    componentDidMount(){
        
        firebase
        .firestore()
        .collection('suppliers')
        .doc(this.props.match.params.id)
        .get()
        .then(res => {
            this.setState({
                name:res.data().name,
                contact:res.data().contact,
                address:res.data().address,
                email:res.data().email,
                supId:this.props.match.params.id
            })


         })

         firebase
        .firestore()
        .collection('sites')
        .onSnapshot(snapshot => {
            this.setState({
                sites:snapshot.docs.map((doc) => ({
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

onChangeSiteName(e){
    this.setState({
        siteName:e.target.value
    })
}


onSubmit(e){
    e.preventDefault();


    firebase
    .firestore()
    .collection('suppliers')
    .doc(this.props.match.params.id)
    .set({
        name:this.state.name,
        address:this.state.address,
        contact:this.state.contact,
        email:this.state.email,
       
    })
    

}



    render() {
        return (
            <>
            <div class="jumbotron" style={{marginTop: 20}}>
                
                <center><h3 style={{marginTop:20}}><u>Modify Supplier</u></h3></center>
  
                
    

            <form onSubmit={this.onSubmit}>

                <div style={{float:'right'}}>
                        <label> Supplier Id :</label>
                        <input type="text"  value={this.state.supId} readOnly/>
                </div>
                <br/>
                
    
                    <h3>Supplier details</h3>
    
    
                    <div className="form-group">
                            <label> Supplier Name :</label>
                            <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} readOnly/>
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
                        <Link to={"/SupplierList"}><button type="submit" className="btn btn-primary" >Go back</button> &nbsp;</Link>

                        
                    </div>
                    </center>
    
    
                </form>
    
                <hr/>

                <h3>Site details</h3>

            <form>
                <div className="form-group">
                             <label> Site Name</label>
                            <select ref = "siteInput" className="form-control" value={this.state.siteName} onChange={this.onChangeSiteName}>
                                {
                                        this.state.sites.map(function(site){
                                            return <option key={site.name} value={site.name}>{site.name}</option>
                                        })
                                }
                            </select>
                    </div>
                    <center>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" >Submit Depot </button> &nbsp;
                     
                    </div>
                    </center>

            </form>

                <div class="card">
                <div class="card-header">
                        <h4 class="card-title">Site List</h4>
                </div>
                <div class="card-body">

                         <ul>
                             <li> <h6>Site 1</h6></li>
                             <li><h6>Site 2</h6></li>
                        </ul>
                </div>
               </div>


            </div>
            </>
          
        )
    }
}

