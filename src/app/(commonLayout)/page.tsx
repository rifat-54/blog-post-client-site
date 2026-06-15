import BlogCard from "@/components/modules/homepage/BlogCard";
import { blogService } from "@/services/blog.service";
import { userService } from "@/services/user.service";
import { BlogPost } from "@/types";
import { cookies } from "next/headers";
import Image from "next/image";

import imgurl from "../../../public/car.jpg"

export default async function HomePage() {
  // const cookieStore=await cookies()
  // console.log(cookieStore)

  // const res=await fetch("http://localhost:5000/api/auth/get-session",{
  //   headers:{
  //     Cookie:cookieStore.toString()
  //   },
  //   cache:"no-store"
  // })

  // const session=await res.json()

  // console.log("session from server page -> ",session)

  // const{data:sessionData}=await userService.getSession()

  // console.log("data",sessionData)

  const featurePromise = blogService.getBlogPosts({
    isFeatured: false,
  });
  const postPromise = blogService.getBlogPosts(
    { limit: "3" },
    { revalidate: 10 },
  );

  const [featurePost, posts] = await Promise.all([featurePromise, postPromise]);

  console.log({ featurePost, posts });

  // console.time("sequential")
  // await new Promise((resolve)=>setTimeout(resolve,3000))
  // await new Promise((resolve)=>setTimeout(resolve,3000))
  // console.timeEnd("sequential")

  // console.time("sequential")
  // const promise1= new Promise((resolve)=>setTimeout(resolve,1000))
  // const promise2= new Promise((resolve)=>setTimeout(resolve,3000))

  // await Promise.all([promise1,promise2])
  // console.timeEnd("sequential")

  return (
    <div>
      <div className="relative w-full h-96">
        {/* <img src="car.jpg" alt="" /> */}
        {/* <Image fill src={imgurl} alt="car" className="object-cover rounded-md"/> */}
        <Image priority fill src={"https://images.unsplash.com/photo-1781436331651-c754cc6463e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="car" className="object-cover rounded-md"/>
      </div>
      <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto p-8">
        {featurePost?.data?.data?.map((post: BlogPost) => (
          <BlogCard key={post.id} post={post}></BlogCard>
        ))}
      </div>
    </div>
  );
}
