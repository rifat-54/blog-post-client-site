"use client"
import { getBlogs } from "@/actions/blog.action";
import { blogService } from "@/services/blog.service";
import { useEffect, useState } from "react";

// export const dynamic="force-dynamic"

const AboutPage = () => {


    const[data,setData]=useState()
    const[error,setError]=useState<{message:string}|null>(null)

    console.log(data)

    useEffect(()=>{
        (async()=>{
            const {data,error}=await getBlogs()
            setData(data)
            setError(error)
        })()
    },[])


    return (
        <div>
            <h1>about new page page</h1>
        </div>
    );
};

export default AboutPage;