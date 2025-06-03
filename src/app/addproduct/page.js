'use client'
import { useState } from "react";
export default function Page() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [company, setCompany] = useState("");
    const [color, setColor] = useState("");

    const addproduct = async() => {
        console.log(name,price,company,color);
        let result= await fetch('http://localhost:3000/api/products', {
            method: 'POST',
            body: JSON.stringify({name,price,company,color}),

        })
        result = await result.json();
        console.log(result);
        if(result.sucess){
            alert(" Hurray Product Added");
        }
        
    }
    return (
        <div>
            <h1>Add Product</h1>
            <input type="text"  value={name} placeholder="Enter Product Name" onChange={(e)=>{setName(e.target.value)}} />
            <input type="text"  value={price} placeholder="Enter Product Price" onChange={(e)=>{setPrice(e.target.value)}} />
            <input type="text"  value={company} placeholder="Enter Product Company"  onChange={(e)=>{setCompany(e.target.value)}}/>
            <input type="text"  value={color} placeholder="Enter Product Color" onChange={(e)=>{setColor(e.target.value)}} />
            <button onClick={addproduct}>Add Product</button>
        </div>
    );
}