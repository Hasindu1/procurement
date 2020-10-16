import firebase from '../Firebase'

//Get a supplier using the Id
export const getSupplier = (id) => {

    return   firebase
    .firestore()
    .collection('suppliers')
    .doc(id)
    .get()

}

//Update a supplier using the Id
export const UpdateSupplier = (supplier_id,Supplier) => {

    return   firebase
    .firestore()
    .collection('suppliers')
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
    .collection('suppliers')
    .add({
        address:Supplier.address,
        availability:"test",
        contact:Supplier.contact,
        email:Supplier.email,
        name:Supplier.name,
        
    })
    
}
