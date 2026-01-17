import mongoose from "mongoose";

const MONGODB_URI=process.env.MONGODB_URI!;

if(!MONGODB_URI){
    throw new Error("mongodb_uri is missing")
}

let cached=global.mongoose
if(!cached){
    cached=global.mongoose={conn:null,promise:null}
}
export async function connectDB(){
    if(cached.conn){
        return cached.conn
    }
    if(!cached.promise){
        const options={
            bufferCommands:false,
            maxPoolSize:10
        }
        cached.promise=mongoose.connect(MONGODB_URI,options).then(mongoose=>mongoose.connection)
    }
    try {
        cached.conn=await cached.promise
    } catch (error) {
        cached.promise=null
        process.exit();
    }
}
// 1:47:26