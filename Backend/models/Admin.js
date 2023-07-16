const mongoose=require('mongoose')
  const { Schema } = mongoose;

  const AdminSchema = new Schema({
      name:{
       type:String,
       required:true,
      },
      email:{
type:String,
required:true,
      },
      password:{
type:String,
required:true,
      },
      date:{
            type:Date,
            default:Date.now(),
      },
      category:{
            type:String,
            required:true
      }
    
  });

  
//   module.exports=mongoose.model('user',UserSchema);
const Admin=mongoose.model('MyAdmin',AdminSchema);
// Myuser naam ka database ban jaayega
// User.createIndexes();

module.exports=Admin;