import React, {useState,useEffect} from 'react'
import NavBar from '../../../components/main/Navigation_Bar/navbar'
import {getEnquiries} from '../../../Services/enquiryService'


function useEnquiries(){
    const [enquiries,setEnquiries] = useState([])

    useEffect(() => {
        const unsubscribe = getEnquiries()
                .onSnapshot((snapshot) => {
                const newEnquiries = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setEnquiries(newEnquiries)
            })

            return () => unsubscribe()
    },[])

    return enquiries
}

const EnquiryList = () =>{


    const enquiries = useEnquiries();
   

    return (
        <>
        <NavBar/>
        <h1 className="text-capitalize text-center">Enquiries</h1>

        <ul className="list-group my-5">
                
     
                {enquiries.map((enquiry) => 
                   
                    <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                        <ul>
                             <li> <h6>Order Ref ID : {enquiry.orderRef}</h6></li>
                             <li><h6>Enquiry      : {enquiry.enquiry}</h6></li>
                        </ul>
                            
                    </li>
                 
                )}
            </ul>
           
            
       </>
    )
}

export default EnquiryList