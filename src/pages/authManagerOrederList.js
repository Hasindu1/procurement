import React, {useState,useEffect} from 'react'
import AuthManagerNavBar from '../components/main/authManagerNavBar'
import firebase from '../Firebase'
import { Link } from 'react-router-dom';


function useOrders(){
    const [orders,setOrders] = useState([])

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('orders')
            .where('draft','==',false)
            .where('status' ,'==' ,'Sent To Reference')
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


const AuthManagerOrderList = () =>{


    const orders = useOrders();

    return (
        <>
        <AuthManagerNavBar/>
        <ul className="list-group my-5">
                <h2 className="text-capitalize text-center">Requests To be Reffered </h2>
                
                {orders.map((order) => 
                    <Link to={"/AuthManagerOrder/"+order.id}> 
                        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                        <ul>
                             <li> <h6>Job Reference No : {order.id}</h6></li>
                             <li><h6>Total      : {order.total}</h6></li>
                        </ul>
                            
                        </li>
                     </Link> 
                )}
            </ul>
       </>
    )
}

export default AuthManagerOrderList