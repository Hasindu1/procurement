import firebase from '../Firebase'

//Get order by id
export const getOrders = (id) => {

    return   firebase
    .firestore()
    .collection('orders')
    .doc(id)
    .get()

}

