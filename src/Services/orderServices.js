import firebase from '../Firebase'


//Get order by id
export const getOrder = (id) => {

    return   firebase
    .firestore()
    .collection('orders')
    .doc(id)
    .get()

}

//get Pending Orders
export const getPendingOrders = () =>{

             return firebase
            .firestore()
            .collection('orders')
            .where('draft','==',false)
            .where('status','==',"Pending")

}

//get Approved Orders
export const getApprovedOrders = () =>{

            return firebase
            .firestore()
            .collection('orders')
            .where('draft','==',false)
            .where('status','==','Approved')
   
}

//get Declined Orders
export const getDeclinedOrders = () =>{

            return firebase
            .firestore()
            .collection('orders')
            .where('draft','==',false)
            .where('status','==','Rejected')
}

//get sent To reference Orders
export const getSentToReferenceOrders = () => {

            return firebase
            .firestore()
            .collection('orders')
            .where('draft','==',false)
            .where('status','==',"Sent To Reference")

}

//get partially approved orders
export const getPartiallyApprovedOrders = () => {

    return firebase
    .firestore()
    .collection('orders')
    .where('draft','==',false)
    .where('status','==',"partially approved")
}

//change the order status to "Sent To Reference"
export const sendToReference = (id) => {

    return firebase
    .firestore()
    .collection('orders')
    .doc(id)
    .update({
        status:"Sent To Reference",
    })

}

//change the order status to "Approve"
export const Approve = (id) => {
    return firebase
    .firestore()
    .collection('orders')
    .doc(id)
    .update({
        status:"Approved",
    })
}


//change the order status to "Rejected"
export const Decline = (id) => {
    return firebase
    .firestore()
    .collection('orders')
    .doc(id)
    .update({
        status:"Approved",
    })
}

//change the order status to "partially approved"
export const PartiallyApprove = (id) => {
    return firebase
    .firestore()
    .collection('orders')
    .doc(id)
    .update({
        status:"partially approved",
    })
}

//set the order remark
export const SetRemarks = (id,remark) =>{

    return firebase
    .firestore()
    .collection('orders')
    .doc(id)
    .update({
        remarks: remark
    })
}