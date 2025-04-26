// Next.js API Route using the App Router (for GET requests)

import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDb();

export async function GET(request) {
  let users = [];
  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json(users,{
    status:200,
    message:"failed to get user"
  });

 
  }
  
  export async function POST(request) {
    const {name,email,password,about,profileURL} =  await request.json();
  
    const user = new User({name,email,password,about,profileURL});
try{
  const createdUser = await user.save();
  const response =  NextResponse.json(user,{
    status:201,
  });
  return response;
}catch(err){
  console.log(err);
  return NextResponse.json({
    message:" failed and User already exists"
  });
}
  }
  