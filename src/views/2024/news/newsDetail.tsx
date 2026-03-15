'use client'

import React from 'react'
import { Container } from '@mui/material'
import './newsDetail.css'
import newsList from '../../../resource/news.json'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import NotFoundView from '@/views/common/notfound/notFound'
import { BaseViewLayout } from '@/layouts/BaseViewLayout'
import { Img } from '@/components/Image'

const MainView = () => {
  const newsId = useParams()
  const newsIndex = newsList.findIndex((news) => news.id === Number(newsId.newsId))
  const newsData = newsList[newsIndex]
  if (newsData) {
    return (
      <div className='news-detail'>
        <Container maxWidth='md'>
          <div className='date'>{newsData.date}</div>
          <div className='news-title'>{newsData.title}</div>
          <div className='context'>
            {Object.values(newsData.context).map((text, index) => {
              return text ? <div key={index}>{text}</div> : <br></br>
            })}
            {Object.values(newsData.urls).map((url, index) => {
              return (
                <div className='url-area' key={index}>
                  <div className='url-title'>●{url.title}</div>
                  <Link target='_blank' href={url.url}>
                    {url.url}
                  </Link>
                </div>
              )
            })}
          </div>
          {Object.values(newsData.img).map((img, index) => {
            return (
              <div className='news-img-area' key={index}>
                <Img src={img} alt='' />
              </div>
            )
          })}
          <div className='news-back-area'>
            <Link href='/2024/news' className='back'>
              ニュース一覧
            </Link>
          </div>
        </Container>
      </div>
    )
  } else {
    return <NotFoundView />
  }
}

const NewsDetail2024View = () => {
  return <BaseViewLayout main={<MainView />} />
}

export default NewsDetail2024View
