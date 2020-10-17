import firebase from '../Firebase'
import * as MyConstClass from '../Constant/Constants'

//get all the  deliveries
export const getEnquiries = () => {

    return firebase
     .firestore()
     .collection(MyConstClass.Enquiry_Table)
 
 }
