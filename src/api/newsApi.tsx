'use client'

import { useQuery } from '@tanstack/react-query'
import { client } from './microApi'
import { NewsContentsType, NewsType } from '@/domain/news'

export const useNewsApi = (id?: string) => {
  const getNews = useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      return await client.getList<NewsType>({ endpoint: `news` })
    },
    staleTime: 0, // データを常に古いとみなす
    gcTime: 0, // キャッシュを即座に破棄（v5の場合）
    refetchOnMount: true, // マウント時に再取得
  })

  const contentId = id ?? ''

  const getDetail = useQuery({
    queryKey: ['news', id],
    queryFn: async () => {
      return await client.getListDetail<NewsContentsType>({ endpoint: 'news', contentId })
    },
    staleTime: 0, // データを常に古いとみなす
    gcTime: 0, // キャッシュを即座に破棄（v5の場合）
    refetchOnMount: true, // マウント時に再取得
  })

  return {
    getNews,
    getDetail,
  }
}
