const mongoose = require ('mongoose')

interface User {
    username : string;
    email: string ;
    password : string;
    phone:string
    age: number ; 
    officeCode : string 
    

}

mongoose.connect('mongodb://localhost:27017/bookingcarSYSTEM') ;

const userSchame = new mongoose.Schema({
    username : String ,
    email : String ,
    password: String,
    phone:Number ,
    age:Number,
    office :String ,
    role: String ,
    

})

const userModel = mongoose.model("user" ,userSchame)

export default userModel