import { userService } from '@/services/user.service'

export default async function HomePage() {

  const{data}=await userService.getSession()

  console.log("data",data)


  return (
    <div>HomePage</div>
  )
}
