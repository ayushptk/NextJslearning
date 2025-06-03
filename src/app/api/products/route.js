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

//post method
export async function POST(request) {
  try {
    await mongoose.connect(connectionstr);
    const payload = await request.json();
    console.log("connected");
   let product = new Product(payload);
   const result = await product.save();
    console.log(result);
    return NextResponse.json({result,sucess:true})
    } catch (error) {
      console.log(error);
    }
  }

