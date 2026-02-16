import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "http://localhost:5000",

     socialProviders: {
        google: { 
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string, 
            // clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    },
})