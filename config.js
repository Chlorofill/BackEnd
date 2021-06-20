'use strict';
require('dotenv').config();
const assert=require('assert');



const{
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
}=process.env;

assert(PORT,'PORT is required');
assert(HOST,'HOST is required');

module.exports={
    port:PORT,
    host:HOST,
    url:HOST_URL,
    firebaseConfig : {
        apiKey: "AIzaSyDV-gNCGiePKMpeAd4-MFhXIFMAl1xNA4k",
        authDomain: "nodewithfirebase-9ad44.firebaseapp.com",
        projectId: "nodewithfirebase-9ad44",
        storageBucket: "nodewithfirebase-9ad44.appspot.com",
        messagingSenderId: "2037708915",
        appId: "1:2037708915:web:96285c5edb06bb18609206"
      }

}