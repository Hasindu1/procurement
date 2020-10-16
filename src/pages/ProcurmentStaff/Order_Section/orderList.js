import React, {useState,useEffect} from 'react'
import NavBar from '../../../components/main/Navigation_Bar/navbar'
import firebase from '../../../Firebase'
import { Link } from 'react-router-dom'
import {getPendingOrders , getApprovedOrders, getDeclinedOrders ,getSentToReferenceOrders , getPartiallyApprovedOrders , sendToReference} from '../../../Services/orderServices'


function usePendingOrders(){
    const [pendingOrders,setPendingOrders] = useState([])

    useEffect(() => {
        const unsubscribe = getPendingOrders()
                .onSnapshot((snapshot) => {
                const newOrders = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setPendingOrders(newOrders)
            })

            return () => unsubscribe()
    },[])

    return pendingOrders
}

function ApprovedOrders(){
   
    const [approvedOrders,setApprovedOrders] = useState([])


    useEffect(() => {
        const unsubscribe = getApprovedOrders()
            .onSnapshot((snapshot) => {
                const newOrders = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setApprovedOrders(newOrders)
            })

            return () => unsubscribe()
    },[])

    return approvedOrders
}

function useDeclinedOrders(){
   
    const [declinedOrders,setDeclinedOrders] = useState([])

    useEffect(() => {
        const unsubscribe = getDeclinedOrders()
            .onSnapshot((snapshot) => {
                const newOrders = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setDeclinedOrders(newOrders)
            })

            return () => unsubscribe()
    },[])

    return declinedOrders
}

function useSentReferenceOrders(){
    const [sentReferenceOrders,setSentReferenceOrders] = useState([])

    useEffect(() => {
        const unsubscribe = getSentToReferenceOrders()
            .onSnapshot((snapshot) => {
                const newOrders = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setSentReferenceOrders(newOrders)
            })

            return () => unsubscribe()
    },[])

    return sentReferenceOrders
}

function usePartiallyApproved(){
    const [partiallyApprovedOrders,setPartiallyApprovedOrders] = useState([])

    useEffect(() => {
        const unsubscribe = getPartiallyApprovedOrders()
            .onSnapshot((snapshot) => {
                const newOrders = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setPartiallyApprovedOrders(newOrders)
            })

            return () => unsubscribe()
    },[])

    return partiallyApprovedOrders
}

function markedAsReffered(id){

    sendToReference(id);
    
}


const OrderList = () =>{


    const pendingOrders = usePendingOrders();
    const approvedOrders = ApprovedOrders();
    const declinedOrders = useDeclinedOrders();
    const sentReferenceOrders = useSentReferenceOrders();
    const partiallyApproved = usePartiallyApproved();

    return (
        <>
        <NavBar/>
        <h1 className="text-capitalize text-center">Requests</h1>

        <ul className="list-group my-5">
                
        <h3><u>Pending Orders</u></h3>
                {pendingOrders.map((order) => 
                    <Link to={"/Order/"+order.id}> 
                        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                        <ul>
                             <li> <h6>Job Reference No : {order.id}</h6></li>
                             <li><h6>Total      : {order.total}</h6></li>
                        </ul>
                            
                                <div className="todo-icon">
                                    <span className={order.total >=  1000000  && order.status == "Pending" ? 'mx-2 text-primary' : 'mx-2 text-primary invisible'}><i className="fas fa-envelope" onClick={markedAsReffered.bind(null,order.id)}></i><i className="fas fa-share"></i></span>
                                </div>
                        </li>
                     </Link> 
                )}
            </ul>
           
            <ul className="list-group my-5">
                
                <h3><u>Orders which are sent to Reference</u></h3>
                        {sentReferenceOrders.map((order) => 
                            <Link to={"/Order/"+order.id}> 
                                <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                                <ul>
                                     <li> <h6>Job Reference No : {order.id}</h6></li>
                                     <li><h6>Total      : {order.total}</h6></li>
                                </ul>
                                    
                                        <div className="todo-icon">
                                            <span className={order.total >=  1000000  && order.status == "pending" ? 'mx-2 text-primary' : 'mx-2 text-primary invisible'}><i className="fas fa-envelope" onClick={markedAsReffered.bind(null,order.id)}></i><i className="fas fa-share"></i></span>
                                        </div>
                                </li>
                             </Link> 
                        )}
                    </ul>

            

              <ul className="list-group my-5">
                
                <h3><u>Partially Approved Orders</u></h3>
                        {partiallyApproved.map((order) => 
                            <Link to={"/Order/"+order.id}> 
                                <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                                <ul>
                                     <li> <h6>Job Reference No : {order.id}</h6></li>
                                     <li><h6>Total      : {order.total}</h6></li>
                                </ul>
                                    
                                        <div className="todo-icon">
                                            <span className={order.total >=  1000000  && order.status == "pending" ? 'mx-2 text-primary' : 'mx-2 text-primary invisible'}><i className="fas fa-envelope" onClick={markedAsReffered.bind(null,order.id)}></i><i className="fas fa-share"></i></span>
                                        </div>
                                </li>
                             </Link> 
                        )}
                    </ul>

        

            <ul className="list-group my-5">
        <h3><u>Approved Orders</u></h3>
                {approvedOrders.map((order) => 
                    <Link to={"/Order/"+order.id}> 
                        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                        <ul>
                             <li> <h6>Job Reference No : {order.id}</h6></li>
                             <li><h6>Total      : {order.total}</h6></li>
                        </ul>
                            
                                <div className="todo-icon">
                                    <span className={order.total >=  1000000  && order.status == "pending" ? 'mx-2 text-primary' : 'mx-2 text-primary invisible'}><i className="fas fa-envelope" onClick={markedAsReffered.bind(null,order.id)}></i><i className="fas fa-share"></i></span>
                                </div>
                        </li>
                     </Link> 
                )}
            </ul>
        

            <ul className="list-group my-5">
              
        <h3><u>Declined Orders</u></h3>
                {declinedOrders.map((order) => 
                    <Link to={"/Order/"+order.id}> 
                        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                        <ul>
                             <li> <h6>Job Reference No : {order.id}</h6></li>
                             <li><h6>Total      : {order.total}</h6></li>
                        </ul>
                            
                                <div className="todo-icon">
                                    <span className={order.total >=  1000000  && order.status == "pending" ? 'mx-2 text-primary' : 'mx-2 text-primary invisible'}><i className="fas fa-envelope" onClick={markedAsReffered.bind(null,order.id)}></i><i className="fas fa-share"></i></span>
                                </div>
                        </li>
                     </Link> 
                )}
            </ul>
       </>
    )
}

export default OrderList