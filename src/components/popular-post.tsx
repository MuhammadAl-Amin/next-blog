import { popularPosts } from '@/lib/placeholder-data'
import React from 'react'
import { Icons } from './icons'

const PopularPost = () => {
  return (
    <div className='mt-10'>
        {
            popularPosts.map((post) => (
                <div key={post.title} className='flex items-center gap-2 py-2 group'>
                    <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all"/>
                    {post.title}
                </div>
            ))
        }
    </div>
  )
}

export default PopularPost