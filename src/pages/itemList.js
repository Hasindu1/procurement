import React, {useState,useEffect} from 'react'
import NavBar from '../components/navbar'
import { Link } from 'react-router-dom';
import {getItems} from '../Services/itemService'


function useItems(){
    const [items,setItems] = useState([])

    useEffect(() => {
        const unsubscribe = getItems()
            .onSnapshot((snapshot) => {
                const newItems= snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setItems(newItems)
            })

            return () => unsubscribe()
    },[])

    return items
}


const ItemList = () =>{


    const items = useItems();

    return (
        <>
        <NavBar/>

        <div style={{float:'right'}}>
        <Link to={"/newItem"}><button className="btn btn-primary" > + new Item</button> </Link>
          </div>
        <ul className="list-group my-5">
                <h2 className="text-capitalize text-center">Item List </h2>
                
                {items.map((item) => 
                   
                   <Link to={"/modifyItem"+item.id}>
                        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                        <ul>
                             <li> <h6>item Name: {item.name}</h6></li>
                             <li><h6>Item Unit Price      : {item.unit_price}</h6></li>
                        </ul>
                            
                        </li>
                    </Link>
                )}
            </ul>
       </>
    )
}

export default ItemList