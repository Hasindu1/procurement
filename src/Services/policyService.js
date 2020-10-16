import firebase from '../Firebase'
import * as MyConstClass from '../Constant/Constants'



//get staffApprove Limit
export const getApprovalLimits = () => {

 return firebase
    .firestore()
    .collection(MyConstClass.Policy_Table)
    .doc(MyConstClass.Policy_ID)
    .get()

}

export const setStaffAprovalLimit = (staffApproveLimit) => {

    return firebase
       .firestore()
       .collection(MyConstClass.Policy_Table)
       .doc(MyConstClass.Policy_ID)
       .update({
        staffApproveLimit:staffApproveLimit
     })
   
   }


   export const setSiteManagerAprovalLimit = (siteManagerApproveLimit) => {

    return firebase
       .firestore()
       .collection(MyConstClass.Policy_Table)
       .doc(MyConstClass.Policy_ID)
       .update({
        siteManagerApproveLimit:siteManagerApproveLimit
       })
   
   }