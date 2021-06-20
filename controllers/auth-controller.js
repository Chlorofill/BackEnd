const authService = require('../services/auth-service');



module.exports = {
    create: async (req, res) => {
        try {
            const response = await authService.create(req.body);
            res.status(200)
            .json({
                message:'Registered Succesfully',
                data:response
            })
        } catch (error) {
            console.log("error");
            console.log(error);
            res.status(400).send(error.message);
        }
    },
    signin: async (req, res) => {
        try {
            const response = await authService.signin(req.body);
            res
            .json({
              
                  message:'Login Succesfully',
                data:response,
                
            })
        } catch (error) {
            console.log("error");
            console.log(error);
            res.status(400).send(error.message);
        }
    }
}