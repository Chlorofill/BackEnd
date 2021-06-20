const auth = require('../db/auth');


module.exports = {
    create: async (data) => {
     return await auth.create(data)
    },
     signin: async (data) => {
     return await auth.signin(data)
    },
};
