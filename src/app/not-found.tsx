import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Button variant={'secondary'}><Link href={'/'}>Back to Home</Link></Button>
    </div>
  )
}

export default NotFound