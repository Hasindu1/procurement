import React, {useState,useEffect} from 'react'
import NavBar from '../components/navbar'
import firebase from '../Firebase'


function useOrders(){
    const [orders,setOrders] = useState([])

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('orders')
            .onSnapshot((snapshot) => {
                const newOrders = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setOrders(newOrders)
            })

            return () => unsubscribe()
    },[])

    return orders
}


const OrderList = () =>{


    const orders = useOrders();

    return (
        <>
        <NavBar/>
        <ul className="list-group my-5">
                <h2 className="text-capitalize text-center">Requests</h2>
                
                {orders.map((order) => 

                        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                            <h6>Job Reference No : {order.id}</h6> 
                            <h6>Total      : {order.total}</h6> 
                                <div className="todo-icon">
                                    <span className="mx-2 text-primary"><i className="fas fa-envelope"></i><i className="fas fa-share fa-xs"></i></span>
                                </div>
                        </li>

                )}
            </ul>
       </>
    )
}

export default OrderList