import React, {useState,useEffect} from 'react'
import AuthManagerNavBar from '../../../components/main/Navigation_Bar/authManagerNavBar'
import {getAllSuppliers} from '../../../Services/supplierService'



function useSuppliers(){
    const [suppliers,setSuppliers] = useState([])

    useEffect(() => {
        const unsubscribe = getAllSuppliers()
            .onSnapshot((snapshot) => {
                const newSuppliers = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setSuppliers(newSuppliers)
            })

            return () => unsubscribe()
    },[])

    return suppliers
}


const SupplierList = () =>{


    const suppliers = useSuppliers();

    return (
        <>
       <AuthManagerNavBar/>

        <ul className="list-group my-5">
                <h2 className="text-capitalize text-center">Supplier List </h2>
                
                {suppliers.map((supplier) => 
               
                        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                        <ul>
                             <li> <h6>Supplier ID : {supplier.id}</h6></li>
                             <li><h6>Supplier Name      : {supplier.name}</h6></li>
                        </ul>
                            
                        </li>
             
                )}
            </ul>
       </>
    )
}

export default SupplierList