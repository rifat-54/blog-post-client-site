import { env } from "@/env";
import { error } from "console";
import { cookies } from "next/headers";

const API_URL = env.API_URL;
// ,{next:{revalidate:10}}

interface GetBlogParams {
  isFeatured?: boolean;
  search?: string;
  page?:string
}

interface ServiceOptions {
  cache?: RequestCache;
  revalidate?: number;
}

interface BlogData{
  title:string,
  content:string,
  tags?:string[]
}

export const blogService = {
  getBlogPosts: async function (
    params?: GetBlogParams,
    options?: ServiceOptions,
  ) {
    try {
      const url = new URL(`${API_URL}/posts`);
      // url.searchParams.append("Key","Value")

      if (params) {
        //  console.log(Object.entries(params))
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            url.searchParams.append(key, value);
          }
        });
      }

      const config: RequestInit = {};

      if (options?.cache) {
        config.cache = options.cache;
      }

      if (options?.revalidate) {
        config.next = { revalidate: options.revalidate };
      }

      config.next={...config.next,tags:["blogPosts"]}

      console.log(url.toString());

      const res = await fetch(url.toString(), config);
      const data = await res.json();

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
  getBlogById: async function (id: string) {
    try {
      const res = await fetch(`${API_URL}/posts/${id}`);
      const data =await res.json();

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "something went wrong " } };
    }
  },
  createBlog:async function(blogData:BlogData){
    console.log(blogData)
    try {
      const cookieStore=await cookies()
      const res=await fetch(`${API_URL}/posts`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          Cookie:cookieStore.toString()
        },
        body:JSON.stringify(blogData)
      })

      console.log("res from service>",res)
      const data=await res.json()
      if(data.error){
        return {data:null,error:{message:data.error || "Post not created"}}
      }
      console.log("from service > ",data)
      return {data,error:null}
    } catch (err) {
      return {data:null,error:{message:"Something went wrong",error:err}}
    }
  }
};

