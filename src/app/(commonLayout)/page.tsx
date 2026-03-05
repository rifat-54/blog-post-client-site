import BlogCard from '@/components/modules/homepage/BlogCard'
import { blogService } from '@/services/blog.service'
import { userService } from '@/services/user.service'
import { BlogPost } from '@/types'

export default async function HomePage() {

  // const{data}=await userService.getSession()

  // console.log("data",data)

  const {data}=await blogService.getBlogPosts({
    isFeatured:true,
    search:"qweqqw"
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
