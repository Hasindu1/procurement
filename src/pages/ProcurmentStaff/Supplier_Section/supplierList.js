import React, {useState,useEffect} from 'react'
import NavBar from '../../../components/main/Navigation_Bar/navbar'
import firebase from '../../../Firebase'
import { Link } from 'react-router-dom';


function useSuppliers(){
    const [suppliers,setSuppliers] = useState([])

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('suppliers')
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
        <NavBar/>

        <div style={{float:'right'}}>
        <Link to={"/newSupplier"}><button className="btn btn-primary" > + new Supplier</button> </Link>
          </div>
        <ul className="list-group my-5">
                <h2 className="text-capitalize text-center">Supplier List </h2>
                
                {suppliers.map((supplier) => 
                  <Link to={"/modifySupplier"+supplier.id}>
                        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                        <ul>
                             <li> <h6>Supplier ID : {supplier.id}</h6></li>
                             <li><h6>Supplier Name      : {supplier.name}</h6></li>
                        </ul>
                            
                        </li>
                </Link> 
                )}
            </ul>
       </>
    )
}

export default SupplierList