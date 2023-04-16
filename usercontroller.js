const registeruser =(req,res)=>{
    const username = req.body.name;
    const useremail = req.body.email;
    const userpassword= req.body.password;
    
     res.json({
        success:true,
       
    });
};
module.exports = registeruser;