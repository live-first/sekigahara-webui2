import React, { PropsWithChildren } from 'react'
import { Header } from '../header/index.tsx'
import Footer from '../footer/index.tsx'
import { BaseViewLayout, BaseViewProps } from '@/layouts/BaseViewLayout.tsx'

export const BaseView2025 = (props: PropsWithChildren<BaseViewProps>) => {
  const { children } = props
  return <BaseViewLayout header={<Header />} main={children} footer={<Footer />} />
}
