import firebase from '../Firebase'
import * as MyConstClass from '../Constant/Constants'

//get all the  deliveries
export const getDeliveries = () => {

    return firebase
     .firestore()
     .collection(MyConstClass.Delivery_Table)
 
 }

 //get delivery by id 

 export const getDeilveryDetails = (id) =>{
    return firebase
    .firestore()
    .collection(MyConstClass.Delivery_Table)
    .doc(id)
    .get()
 } 