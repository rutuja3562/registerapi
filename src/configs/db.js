const mongoose=require("mongoose");

const connect=()=>{return mongoose.connect(
  "mongodb+srv://Rutu:Rutuatlas3562@cluster0.4soie.mongodb.net/registerapi?retryWrites=true&w=majority"
  // "mongodb+srv://rutuja:Rutuja_3562@cluster0.orwkt.mongodb.net/test"
//  "mongodb://localhost:27017/test"
);
};


module.exports=connect;
