import firebase from '../Firebase'
import * as MyConstClass from '../Constant/Constants'

export const getAccount_Balance_Budget = () => {

    return   firebase
    .firestore()
    .collection(MyConstClass.Account_Table)
    .doc(MyConstClass.Account_ID)
    .get()

}

//update the cuurent with reduced finalized newBalance
export const reduceAmount = (newBalance) => {

    return   firebase
    .firestore()
    .collection(MyConstClass.Account_Table)
    .doc(MyConstClass.Account_ID)
    .update({
        currentBalance:newBalance
    })

}