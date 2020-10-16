import firebase from '../Firebase'
import * as MyConstClass from '../Constant/Constants'

//get all sites
export const getSites = () => {

    return firebase
    .firestore()
    .collection(MyConstClass.Site_Table)

}

//add new site
export const addNewSite = (Site) => {

    return   firebase
    .firestore()
    .collection(MyConstClass.Site_Table)
    .add({
        address:Site.address,
        contact:Site.contact,
        email:Site.email,
        name:Site.name,
        
    })
    
} 

//get site by id
export const getSite = (id) => {

    return firebase
    .firestore()
    .collection(MyConstClass.Site_Table)
    .doc(id)
    .get()

}

//update site
export const updateSite = (id ,Site) => {

    return firebase
    .firestore()
    .collection(MyConstClass.Site_Table)
    .doc(id)
    .set({
        name:Site.name,
        address:Site.address,
        contact:Site.contact,
        email:Site.email,
       
    })

}

//get Site by Name
export const getSiteByName = (name) => {

    return  firebase
    .firestore()
    .collection(MyConstClass.Site_Table)
    .where(MyConstClass.Site_Name,"==",name)
    .get()

}
  

//get List Of Sites by Supplier Name
export const getSitesBySupplierName = (name) =>{
    return firebase
    .firestore()
    .collection(MyConstClass.Site_Supplier_Table)
    .where(MyConstClass.Supplier , '==' ,name)
}
