import React, {useState,useEffect} from 'react'
import AuthManagerNavBar from '../../../components/main/Navigation_Bar/authManagerNavBar'
import {getPaymentDetails} from '../../../Services/paymentService'


function usePayments(){
    const [payments,setPayments] = useState([])

    useEffect(() => {
        const unsubscribe = getPaymentDetails()
                .onSnapshot((snapshot) => {
                const newPayments = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setPayments(newPayments)
            })

            return () => unsubscribe()
    },[])

    return payments
}


const PayedList = () =>{


    const payments = usePayments();
 

    return (
        <>
         <AuthManagerNavBar/>
        <h1 className="text-capitalize text-center">Payment List</h1>

        <ul className="list-group my-5">
                
        <h3><u>Payments</u></h3>
                {payments.map((payment) => 
                  
                        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                            <h4>Payment ID : {payment.id}</h4>
                        <ul>
                             <li> <h6>Delivery ID : {payment.deliveryId}</h6></li>
                             <li><h6>Order Reference ID     : {payment.OrderRef}</h6></li>
                             <li> <h6>Total : {payment.totPayment}</h6></li>
                        </ul>
                            
                        </li>
                 
                )}
            </ul>
           
           
       </>
    )
}

export default PayedList