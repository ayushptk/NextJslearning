import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionstr } from "@/lib/db";
import { Product } from "@/lib/model/product";
export async function GET() {
    
    try {
       await mongoose.connect(connectionstr);
     console.log("connected");
     const data = await Product.find();
     console.log(data);
    return NextResponse.json({result:data})     
    } 
    catch (error) {
        console.log(error);
    }
      
} 