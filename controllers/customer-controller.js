const customerService = require('../services/customer-service');



module.exports = {
        addcustomer: async (req, res) => {
        try {
            const datas = await customerService.addcustomer(req.body);
        
             res.status(200)
            .json({
                

                message:datas[0],
                data:datas[1]
            })
        } catch (error) {
            console.log("error");
            console.log(error);
            res.status(400).send(error.message);
        }
    },
    

}