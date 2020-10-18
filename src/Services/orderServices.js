import firebase from '../Firebase'
import * as MyConstClass from '../Constant/Constants'

//Get order by id
export const getOrder = (id) => {

    return   firebase
    .firestore()
    .collection(MyConstClass.Order_Table)
    .doc(id)
    .get()

}

//get Pending Orders
export const getPendingOrders = () =>{

             return firebase
            .firestore()
            .collection(MyConstClass.Order_Table)
            .where(MyConstClass.IsCompleted,'==',false)
            .where(MyConstClass.Order_Status,'==',MyConstClass.Pending)

}

//get Approved Orders
export const getApprovedOrders = () =>{

            return firebase
            .firestore()
            .collection(MyConstClass.Order_Table)
            .where(MyConstClass.IsCompleted,'==',false)
            .where(MyConstClass.Order_Status,'==',MyConstClass.Approved)
   
}

//get Declined Orders
export const getDeclinedOrders = () =>{

            return firebase
            .firestore()
            .collection(MyConstClass.Order_Table)
            .where(MyConstClass.IsCompleted,'==',false)
            .where(MyConstClass.Order_Status,'==',MyConstClass.Declined)
}

//get sent To reference Orders
export const getSentToReferenceOrders = () => {

            return firebase
            .firestore()
            .collection(MyConstClass.Order_Table)
            .where(MyConstClass.IsCompleted,'==',false)
            .where(MyConstClass.Order_Status,'==',MyConstClass.Sent_To_Reference)

}

//get partially approved orders
export const getPartiallyApprovedOrders = () => {

    return firebase
    .firestore()
    .collection(MyConstClass.Order_Table)
    .where(MyConstClass.IsCompleted,'==',false)
    .where(MyConstClass.Order_Status,'==',MyConstClass.Partially_Approved)
}

//change the order status to "Sent To Reference"
export const sendToReference = (id) => {

    return firebase
    .firestore()
    .collection(MyConstClass.Order_Table)
    .doc(id)
    .update({
        status: MyConstClass.Sent_To_Reference,
    })

}

//change the order status to "Approve"
export const Approve = (id) => {
    return firebase
    .firestore()
    .collection(MyConstClass.Order_Table)
    .doc(id)
    .update({
        status:MyConstClass.Approved,
    })
}


//change the order status to "Rejected"
export const Decline = (id) => {
    return firebase
    .firestore()
    .collection(MyConstClass.Order_Table)
    .doc(id)
    .update({
        status:MyConstClass.Declined,
    })
}

//change the order status to "partially approved"
export const PartiallyApprove = (id) => {
    return firebase
    .firestore()
    .collection(MyConstClass.Order_Table)
    .doc(id)
    .update({
        status:MyConstClass.Partially_Approved,
    })
}

//set the order remark
export const SetRemarks = (id,remark) =>{

    return firebase
    .firestore()
    .collection(MyConstClass.Order_Table)
    .doc(id)
    .update({
        reason: remark
    })
}