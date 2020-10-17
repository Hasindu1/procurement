import React, {useState,useEffect} from 'react'
import {getItems} from '../../../Services/itemService'
import AuthManagerNavBar from '../../../components/main/Navigation_Bar/authManagerNavBar'

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
         <AuthManagerNavBar/>
        <ul className="list-group my-5">
                <h2 className="text-capitalize text-center">Item List </h2>
                
                {items.map((item) => 
                   
                
                        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                        <ul>
                             <li> <h6>item Name: {item.name}</h6></li>
                             <li><h6>Item Unit Price      : {item.unit_price}</h6></li>
                        </ul>
                            
                        </li>
                   
                )}
            </ul>
       </>
    )
}

export default ItemList