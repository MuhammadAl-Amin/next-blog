import BreadCrumb from '@/components/breadcrumb'
import Header from '@/components/header'
import React from 'react'
import { formatDate, getBlogPosts } from '../../utils'
import { notFound } from 'next/navigation'
import { CustomMDX } from '@/components/mdx'
import Container from '@/components/Container'
import ReportViews from '@/components/ReportViews'


export async function generateStaticParams() {
  let posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
const Page = ({ params }: { params: { category: string, slug: string } }) => {
  let post = getBlogPosts().find(
    (post) => post.slug === params.slug
  )
  if(!post) {
    return notFound()
  }

  return (
    <div>
      <ReportViews slug={post.slug} title={post.metadata.title} category={post.metadata.category}></ReportViews>
      <Header>
      <Container>
      <BreadCrumb category={post.metadata.category} slug={post.slug}></BreadCrumb>
      <h1 className='title font-semibold text-2xl mt-4 tracking-tighter'>{post.metadata.title}</h1>
      <div className='flex justify-between items-center mt-2 mb-4 text-sm'>
        <p className='text-sm text-neutral-600 dark:text-neutral-400 mt-2'>{formatDate(post.metadata.publishedAt)}</p>
      </div>
      </Container> 
      </Header>
        <div className='container mx-auto mt-12'>
        <Container>
        <article className='prose'>
          <CustomMDX source={post.content}/>
        </article>
        </Container>
        </div>
    </div>
  )
}

export default Page