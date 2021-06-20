const product= require('../db/customer');


module.exports = {

    addcustomer: async (data) => {
        const response =await product.addcustomer(data)
        if(response==false)
            {
                const message1='Profile doesnt exist';
                const data=false;
                var datas=[message1,data];
                return(datas)

            }
            else
            {
                const message1='profile updated Succesfully';
                const data=true;  
                var datas=[message1,data];
                return(datas)

            }
           

    },
      

    
};
