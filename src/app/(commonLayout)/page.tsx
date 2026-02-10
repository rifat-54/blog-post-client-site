import { authClient } from '@/lib/auth-client'
import React from 'react'

export default async function HomePage() {

  const session=await authClient.getSession()

  console.log(session)
  return (
    <div>HomePage</div>
  )
}
