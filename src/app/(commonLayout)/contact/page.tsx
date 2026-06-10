"use client"
import { Button } from '@/components/ui/button';
import React from 'react';

const ContactPage = () => {

    // await new Promise((resolve)=>setTimeout(resolve, 3000))

const counter=()=>{
    console.log("it is working")
}

    return (
        <div>
            <h1>this is contact page</h1>
            <Button onClick={counter}>Click Me</Button>
        </div>
    );
};

export default ContactPage;