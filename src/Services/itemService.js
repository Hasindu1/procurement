import firebase from '../Firebase'

//get item by id
export const getitem = (id) => {

    return firebase
    .firestore()
    .collection('items')
    .doc(id)
    .get()

}

//update item 
export const updateItem = (id,Item) => {

    firebase
    .firestore()
    .collection('items')
    .doc(id)
    .set({
        name:Item.name,
        unit_price:Item.unit_price
    })
}

//add new Item
export const AddNewItem = (Item) => {

    firebase
    .firestore()
    .collection('items')
    .add({
        name:Item.name,
        unit_price:Item.unit_price
    })
}

//get all the  Items
export const getItems = () => {

   return firebase
    .firestore()
    .collection('items')

}