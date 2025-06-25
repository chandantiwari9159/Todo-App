import mongoose from "mongoose" ;
// mongoose.connect('')

export const connectDB = async() => {
   try{ await mongoose.connect(process.env.MONGO_URI)
    console.log("mongoDB  Connected")

} catch(error) {
    console.log("mongoDB connection Failed : " , error.message) ;
    process.exit(1);
}
}


