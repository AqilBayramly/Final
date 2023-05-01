import React from 'react'
import "./BlogSections.css"
import BlogFilterBox from './BlogFilterBox/BlogFilterBox'
import LatestArticles from './LatestArticles/LatestArticles'
import MostViewed from './MostViewed/MostViewed'

function BlogSections() {
  return (
    <div className='blog__page'>
      <div className='blog__contents'>
      <BlogFilterBox/>
      <div className='blog__swipers__content'>
      <LatestArticles/>
      <MostViewed/>
      </div>
      </div>
    </div>
  )
}

export default BlogSections