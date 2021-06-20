const firebase = require('firebase');
const db = require('../db');
const firestore = db.firestore();


module.exports = {
    addcustomer: async (data) => {
        const customerRef = firestore.collection('Users');
        const snapshot = await customerRef.where('email', '==', data.email).get();

        if (snapshot.empty) {
            return false; 
         
           
        }
        else
        {
            snapshot.forEach(async doc => {
                const customerRef = firestore.collection('Users').doc(doc.id);
                 return await customerRef.update({
                    name: data.name,
                    email:data.email,
                    phone:data.phone,
                    pincode:data.pincode,
                    state:data.state,
                    houseno:data.houseno
    
    
                });
               

              });


        }
               
    },
   
};
