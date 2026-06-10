import BlogCard from '@/components/modules/homepage/BlogCard'
import { blogService } from '@/services/blog.service'
import { userService } from '@/services/user.service'
import { BlogPost } from '@/types'
import { cookies } from 'next/headers'

export default async function HomePage() {

  const cookieStore=await cookies()
  console.log(cookieStore)

  const res=await fetch("http://localhost:5000/api/auth/get-session",{
    headers:{
      Cookie:cookieStore.toString()
    },
    cache:"no-store"
  })

  const session=await res.json()

  // console.log("session -> ",session)

  // const{data:sessionData}=await userService.getSession()

  // console.log("data",sessionData)

  const {data}=await blogService.getBlogPosts({
    isFeatured:false
    // search:"qweqqw"
  },{
    // cache:"no-store",
    revalidate:10
  })

  console.log(data?.data)


  return (
    <div className='grid grid-cols-3 gap-6 max-w-7xl mx-auto p-8'>

      {
        data?.data?.map((post:BlogPost)=>(<BlogCard key={post.id} post={post}></BlogCard>))
      }


    </div>
  )
}
