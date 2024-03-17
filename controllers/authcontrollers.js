import Usermodel from "../model/user.model.js";
const creatinguserconteoller ={

    register_get:(req,res)=>{
        res.render('../views/sigup.ejs')
    },
    login_get:(req,res)=>{
        res.render('../views/login.ejs')
    },
    register:(req,res)=>{
       const {email,pass}=req.body
       try{
       const newuser = new Usermodel({email,pass})
       newuser.save()
       }catch(err){
        console.log(err)
       }
        res.send('new user')
    },
    login:(req,res)=>{
        const{email,pass}=req.body


        res.send('login')
        

    }
}
 export default creatinguserconteoller;