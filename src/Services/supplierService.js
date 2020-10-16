import firebase from '../Firebase'
import * as MyConstClass from '../Constant/Constants'

//Get a supplier using the Id
export const getSupplier = (id) => {

    return   firebase
    .firestore()
    .collection(MyConstClass.Supplier_Table)
    .doc(id)
    .get()

}

//Update a supplier using the Id
export const UpdateSupplier = (supplier_id,Supplier) => {

    return   firebase
    .firestore()
    .collection(MyConstClass.Supplier_Table)
    .doc(supplier_id)
    .set({
        name:Supplier.name,
        address:Supplier.address,
        contact:Supplier.contact,
        email:Supplier.email
    })

}


//Add a new Supplier 
export const AddNewSupplier = (Supplier) => {

    return  firebase
    .firestore()
    .collection(MyConstClass.Supplier_Table)
    .add({
        address:Supplier.address,
        availability:"test",
        contact:Supplier.contact,
        email:Supplier.email,
        name:Supplier.name,
        
    })
    
}

//get Supplier by name 
export const getSupplierByName = (name) => {

    return    firebase
    .firestore()
    .collection(MyConstClass.Supplier_Table)
    .where(MyConstClass.Supplier_Name,"==",name)
    .get()

} 
