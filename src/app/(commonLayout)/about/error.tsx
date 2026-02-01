"use client"

import { useEffect } from "react";

const AboutError = ({error,reset}:{error:Error & {digest?:string},reset:()=>void}) => {
    useEffect(()=>{
        console.error(error)
    },[])
    return (
        <div>
            <h1>Something wrong</h1>
            <button onClick={()=>reset()}>Retry</button>
        </div>
    );
};

export default AboutError;