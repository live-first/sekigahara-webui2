import React from 'react'
import { Container } from '@mui/material'
import './newsDetail.scss'
import newsList from '../../../resource/2025/news.json'
import { BaseView2025 } from '../layout/index.tsx'
import Link from 'next/link'
import { Img } from '@/components/Image/index.tsx'
import NotFoundView from '@/views/common/notfound/notFound.tsx'
import { useParams } from 'next/navigation'

export const NewsDetail2025View = () => {
  const newsId = useParams()
  const newsIndex = newsList.findIndex((news) => news.id === Number(newsId.newsId))
  const newsData = newsList[newsIndex]
  if (newsData) {
    return (
      <BaseView2025>
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
              <Link href='/news' className='back'>
                ニュース一覧
              </Link>
            </div>
          </Container>
        </div>
      </BaseView2025>
    )
  } else {
    return <NotFoundView />
  }
}
