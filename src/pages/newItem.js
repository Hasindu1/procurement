import React, { Component } from 'react'
import firebase from '../Firebase'
import {Link} from 'react-router-dom'



export default class NewItem extends Component {
    
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeUnitPrice = this.onChangeUnitPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            //item Properties
            name:'',
            unitPrice:0

        };
    }

  

    onChangeName(e){
    this.setState({
        name:e.target.value
    })

    }


    onChangeUnitPrice(e){
    this.setState({
        unitPrice:e.target.value
    })
}



onSubmit(e){
    e.preventDefault();

    firebase
    .firestore()
    .collection('items')
    .add({
        name:this.state.name,
        unit_price:this.state.unitPrice,
        
    })

   
    

}



    render() {
        return (
            <>
        
            <div class="jumbotron" style={{marginTop: 20}}>
                
                <center><h3 style={{marginTop:20}}><u>New Item</u></h3></center>
       
       

            <form onSubmit={this.onSubmit}>

    
                    <h3>Item Details</h3>
    
    
                    <div className="form-group">
                            <label> Item Name :</label>
                            <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName}/>
                    </div>
    
                    <div className="form-group">
       
                            <label> Unit Price</label>
                            <input type="number" className="form-control" value={this.state.unitPrice} onChange={this.onChangeUnitPrice}/>   
        
                    </div>
    
                    <center>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success" > Create </button> &nbsp;
                        <Link to={"/ItemList"}><button className="btn btn-primary" > Go Back</button> </Link>
                        
                    </div>
                    </center>
    
    
    
                </form>
    
               
               </div>
    
            </>
          
        )
    }
}

