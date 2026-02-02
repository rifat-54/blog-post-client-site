import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function analyticsLayout({children}:{children:React.ReactNode}) {
  return (
    <div>
        analyticsLayout
        <div>
            <Button>
                <Link href="/dashboard/analytics/monthly">Monthly</Link>
            </Button>
            <Button>
                <Link href="/dashboard/analytics/weekly">Weekly</Link>
            </Button>
        </div>
        {children}
    </div>
  )
}
