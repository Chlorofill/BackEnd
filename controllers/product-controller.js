const { response } = require('express');
const productService = require('../services/product-service');



module.exports = {
        addproduct: async (req, res) => {
        try {
            const datas = await productService.addproduct(req.body);
        
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
    editproduct: async (req, res) => {
        try {
            const datas = await productService.editproduct(req.body);
            res
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
    deleteproduct: async (req, res) => {
        try {
            const datas = await productService.deleteproduct(req.body);
            res
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
    viewproduct: async (req, res) => {
        try {
             const arr=await productService.viewproduct();  
                 
            res
            .json(  {
              data:arr  
            })
        } catch (error) {
            console.log("error");
            console.log(error);
            res.status(400).send(error.message);
        }
    }



}