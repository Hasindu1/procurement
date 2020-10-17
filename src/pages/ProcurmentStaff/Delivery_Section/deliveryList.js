import React, {useState,useEffect} from 'react'
import NavBar from '../../../components/main/Navigation_Bar/navbar'
import { Link } from 'react-router-dom'
import {getDeliveries} from '../../../Services/deliveryService'


function useDeliveries(){
    const [deliveries,setDeliveries] = useState([])

    useEffect(() => {
        const unsubscribe = getDeliveries()
                .onSnapshot((snapshot) => {
                const newDeliveries = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setDeliveries(newDeliveries)
            })

            return () => unsubscribe()
    },[])

    return deliveries
}


const DeliveryList = () =>{


    const deliveries = useDeliveries();
 

    return (
        <>
        <NavBar/>
        <h1 className="text-capitalize text-center">Deliveries</h1>

        <ul className="list-group my-5">
                
        <h3><u>Deliveries</u></h3>
                {deliveries.map((delivery) => 
                    <Link to={"/delivery"+delivery.id}> 
                        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                        <ul>
                             <li> <h6>Delivery ID : {delivery.id}</h6></li>
                             <li><h6>Order Reference ID     : {delivery.OrderRef}</h6></li>
                        </ul>
                            
                        </li>
                     </Link> 
                )}
            </ul>
           
           
       </>
    )
}

export default DeliveryList