import { Route } from "@/types";

export const adminRoutes:Route[]=[
    {
      title: "admin routes",
      items: [
         {
          title:"Home",
          url:"/"
        },
        {
          title:"Analytics",
          url:"/dashboard/analytics"
        },
        {
          title:"Admin Dashboard",
          url:"/admin-dashboard"
        }
       
      ],
    },
    
  ]