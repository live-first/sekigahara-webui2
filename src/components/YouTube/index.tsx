import React from 'react'
import Youtube from 'react-youtube'
import './youtubeView.css'

interface YoutubeProp {
  videoId: string
  title: string
}
export const YouTube = (props: YoutubeProp) => {
  const { videoId, title } = props
  return (
    <div className='youtube-view'>
      <div className='youtube-title'>{title}</div>
      <Youtube videoId={videoId} className='video-area justify-items-center' />
    </div>
  )
}
