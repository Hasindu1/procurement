import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {getSite , updateSite} from '../../../Services/siteServices'


export default class ModifySite extends Component {
    
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
            siteId:''

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


onSubmit(e){
    e.preventDefault();

    const NewSite = {
        address:this.state.address,
        contact:this.state.contact,
        email:this.state.email,
        name:this.state.name,
    }


    updateSite(this.props.match.params.id,NewSite);

    

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
    
               
               </div>
    
            </>
          
        )
    }
}

