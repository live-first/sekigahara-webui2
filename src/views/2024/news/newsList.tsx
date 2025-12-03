import React, { useState, useEffect } from 'react'
import './newsList.scss'
import { Container } from '@mui/material'
import newsData from '../../../resource/news.json'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'
import Link from 'next/link'

interface NewsListProps {
  max?: number
  isPagination?: boolean
}

type NewsProps = {
  id: number
  date: string
  title: string
  context: string[]
  img: string[]
}

const NewsList = (props: NewsListProps) => {
  const { max, isPagination } = props
  const maxContent = max ? max : 10
  const pageCount = Math.ceil(newsData.length / maxContent)
  const [page, setPage] = useState(1)
  const [displayedItems, setDisplayedItems] = useState(Array<NewsProps>)

  useEffect(() => {
    //表示データを抽出
    setDisplayedItems(newsData.slice((page - 1) * maxContent, page * maxContent))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (event, index) => {
    setPage(index)
    setDisplayedItems(newsData.slice((index - 1) * maxContent, index * maxContent))
  }

  return (
    <div className='news-list-area'>
      <Container maxWidth='md'>
        {Object.values(displayedItems).map((data, index) => {
          return (
            <div className='content' key={index}>
              <Link href={`/2024/news/${data.id}`}>
                <div className='release-date'>{data.date}</div>
                <div className='news-title'>{data.title}</div>
              </Link>
            </div>
          )
        })}
        {isPagination ? (
          <div className='pagination-area'>
            <Pagination
              className='pagination'
              count={pageCount < 1 ? 1 : pageCount}
              onChange={handleChange}
              page={page}
              renderItem={(item) => (
                <PaginationItem slots={{ previous: HiArrowLeft, next: HiArrowRight }} {...item} />
              )}
            />
          </div>
        ) : (
          <></>
        )}
      </Container>
    </div>
  )
}

export default NewsList
