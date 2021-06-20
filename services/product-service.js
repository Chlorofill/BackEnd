const product= require('../db/product');


module.exports = {

    addproduct: async (data) => {
        const response =await product.addproduct(data)
        if(response==false)
            {
                const message1='Product already exist';
                const data=false;
                var datas=[message1,data];
                return(datas)

            }
            else
            {
                const message1='Product added Succesfully';
                const data=true;  
                var datas=[message1,data];
                return(datas)

            }
           

    },
      editproduct: async (data) => {
        
            const response =await product.editproduct(data)
            if(response==false)
                {
                    const message1='Product does not exist';
                    const data=false;
                    var datas=[message1,data];
                    return(datas)
    
                }
                else
                {
                    const message1='Product details edited Succesfully';
                    const data=true;  
                    var datas=[message1,data];
                    return(datas)
    
                }
               
    
        },

        deleteproduct: async (data) => {
        
            const response =await product.deleteproduct(data)
            if(response==false)
                {
                    const message1='Product does not exist';
                    const data=false;
                    var datas=[message1,data];
                    return(datas)
    
                }
                else
                {
                    const message1='Product deleted Succesfully';
                    const data=true;  
                    var datas=[message1,data];
                    return(datas)
    
                }
               
    
        },
        viewproduct: async () => {
        
            return await product.viewproduct()
         
               
    
        }


    
};
