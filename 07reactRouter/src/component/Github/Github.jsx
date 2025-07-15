import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Github() {
    const data=useLoaderData()
    // const [data , setData] = useState([])
    // useEffect(() => {
    //     // Fetch GitHub followers data
    //     fetch("https://api.github.com/users/imakhileshsahu")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    return (
        <div className="bg-gray-500 p-4 rounded-lg shadow text-white flex items-center justify-center ">
            Github Followers:{data.followers + 5896 }
            <img src={data.avatar_url} alt="Git picture" width={300}/>
        </div>
    );
}

export const githubInfoLoader=async () =>{
    const response =await fetch("https://api.github.com/users/imakhileshsahu")
     return response.json()
}
