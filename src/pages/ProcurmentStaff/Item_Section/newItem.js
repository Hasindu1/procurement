import React, { Component } from 'react'
import firebase from '../../../Firebase'
import {Link} from 'react-router-dom'
import {AddNewItem} from '../../../Services/itemService'



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

    const Item ={
        name:this.state.name,
        unit_price:this.state.unitPrice
    }

    AddNewItem(Item);

   
    

}



    render() {
        return (
            <>
        
            <div class="jumbotron" style={{marginTop: 20}}>
                
                <center><h3 style={{marginTop:20}}><u>New Item</u></h3></center>
       
       

            <form onSubmit={this.onSubmit} className="item">

    
                    <h3>Item Details</h3>
    
    
                    <div className="form-group">
                            <label> Item Name :</label>
                            <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName}/>
                    </div>
    
                    <div className="form-group">
       
                            <label> Unit Price</label>
                            <input type="number" id="unit_price" name="unit_price" className="form-control" value={this.state.unitPrice} onChange={this.onChangeUnitPrice}/>   
        
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

