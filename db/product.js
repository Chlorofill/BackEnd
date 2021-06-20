const firebase = require('firebase');
const db = require('../db');
const firestore = db.firestore();


module.exports = {
    addproduct: async (data) => {


        const productRef = firestore.collection('Product');
        const snapshot = await productRef.where('name', '==', data.name).get();
        if (snapshot.empty) {
         
            console.log(44);
            return await firestore.collection('Product').doc().set({
                
                name: data.name,
                description: data.description,
                color: data.color,
                category:data.category,
                quantity:data.quantity,
                price : data.price

            })
        }
        else
        return false;   
       
               
    },
    editproduct: async (data) => {
        const productRef = firestore.collection('Product');
        const snapshot = await productRef.where('name', '==', data.name).get();
        if (snapshot.empty) {
            return false; 
         
           
        }
        else
        {
            snapshot.forEach(async doc => {
                const productRef = firestore.collection('Product').doc(doc.id);
                 return await productRef.update({
                
                    name: data.name,
                    description: data.description,
                    color: data.color,
                    diameter: data.diameter,
                    price : data.price
    
                });
               

              });


        }
       
    },
    deleteproduct: async (data) => {
        const productRef = firestore.collection('Product');
        const snapshot = await productRef.where('name', '==', data.name).get();
        if (snapshot.empty) {
            return false; 
         
           
        }
        else
        {
            snapshot.forEach(async doc => {
                const productRef = firestore.collection('Product').doc(doc.id);
                 await productRef.delete();
                 return true;

              });


        }
       
    },
    viewproduct: async () => {
        const arr=[];
        const citiesRef = firestore.collection('Product');
        const snapshot = await citiesRef.get();
        snapshot.forEach(doc => {
              arr.push(doc.data());
                                });
                              
             return arr
           



       
    }

};
