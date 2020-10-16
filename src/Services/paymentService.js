import firebase from '../Firebase'
import * as MyConstClass from '../Constant/Constants'

//add Payment
export const addPayment = (payment) => {

    return firebase
     .firestore()
     .collection(MyConstClass.Payment_Table)
     .add({

     })
 
 }

 //get All the Payment Details as list

 export const getPaymentDetails = () =>{
    return firebase
    .firestore()
    .collection(MyConstClass.Payment_Table)
 } 