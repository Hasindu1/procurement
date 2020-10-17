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

//Get all the Suppliers
export const getAllSuppliers = () => {
    return firebase
    .firestore()
    .collection(MyConstClass.Supplier_Table)
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
        email:Supplier.email,
        availability:true,
        depot:Supplier.depot
    })

}


//Add a new Supplier 
export const AddNewSupplier = (Supplier) => {

    return  firebase
    .firestore()
    .collection(MyConstClass.Supplier_Table)
    .add({
        address:Supplier.address,
        availability:true,
        contact:Supplier.contact,
        email:Supplier.email,
        name:Supplier.name,
        depot:Supplier.depot
        
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

//add site for a given supplier
export const addSite = (Site) =>{ 

return firebase
       .firestore()
       .collection(MyConstClass.Site_Supplier_Table)
        .add({
           site:Site.site,
           supplier:Site.supplier,     
        })
} 

//get List Of Suppliers by Site Name
export const getSuppliersBySiteName = (name) =>{
    return firebase
    .firestore()
    .collection(MyConstClass.Site_Supplier_Table)
    .where(MyConstClass.Site , '==' ,name)
}