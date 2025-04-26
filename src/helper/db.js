import mongoose from "mongoose"
export const connectDb = async()=>{
    try {
  const {connection} = await mongoose.connect(process.env.MONGO_DB_URL,{
     dbName:'work_manager'

})
console.log("dbconnnection...")
console.log(connection);
        
    } catch (error) {
        console.log("Failed")
    }

}