import firebase from '../Firebase'

//get all sites
export const getSites = () => {

    return firebase
    .firestore()
    .collection('sites')
    
}

//add new site
export const addNewSite = (Site) => {

    return   firebase
    .firestore()
    .collection('sites')
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
    .collection('sites')
    .doc(id)
    .get()

}

//update site
export const updateSite = (id ,Site) => {

    return firebase
    .firestore()
    .collection('sites')
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
    .collection('sites')
    .where("name","==",name)
    .get()

}
  
