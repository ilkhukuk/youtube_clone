import React from 'react'
import VideoCard from './VideoCard'

const RelatedContents = ({ className, contents }) => {
  
  return (
    <div className={className}>
      {contents?.map((content) => {
        return (
          <VideoCard video={content?.video} />
        )
      })}
    </div>
  )
}

export default RelatedContents