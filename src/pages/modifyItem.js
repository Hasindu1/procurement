import React, { Component } from 'react'
import firebase from '../Firebase'
import { Link } from 'react-router-dom'


export default class ModifyItem extends Component {
    
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

    componentDidMount(){
        
        firebase
        .firestore()
        .collection('items')
        .doc(this.props.match.params.id)
        .get()
        .then(res => {
            this.setState({
                name:res.data().name,
                unitPrice:res.data().unit_price
            })


         })


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
    .doc(this.props.match.params.id)
    .set({
        name:this.state.name,
        unit_price:this.state.unitPrice
       
    })
    

}



    render() {
        return (
            <>
            
            <div class="jumbotron" style={{marginTop: 20}}>
                
                <center><h3 style={{marginTop:20}}><u>Modify Item</u></h3></center>
  
                
    

            <form onSubmit={this.onSubmit}>

                <div style={{float:'right'}}>
                        <label> Item Id :</label>
                        <input type="text"  value={this.props.match.params.id} readOnly/>
                </div>
                <br/>
                
    
                    <h3>Item details</h3>
    
    
                    <div className="form-group">
                            <label> Item Name :</label>
                            <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName}/>
                    </div>
    
                    <div className="form-group">
       
                            <label> Unit Price:</label>
                            <span><input type="number" className="form-control" value={this.state.unitPrice} onChange={this.onChangeUnitPrice}/></span>    
        
                    </div>
    
                    
                    <center>
                    <div className="form-group">
                        <button type="submit" className="btn btn-default" > Update </button> &nbsp;
                        <Link to={"/ItemList"}><button type="submit" className="btn btn-primary" >Go back</button> &nbsp;</Link>

                        
                    </div>
                    </center>
    
                 
    
                </form>
    
               
               </div>
    
            </>
          
        )
    }
}

