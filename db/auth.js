const firebase = require('firebase');
const db = require('../db');
const firestore = db.firestore();


module.exports = {
    create: async (data) => {
        return await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then(async (result) => {
                console.log(44);
                await firestore.collection('Users').doc().set({
                    email: data.email,
                    type:data.type
                })
            });
    },
    signin: async (data) => {
            return await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    },
};
