'use client'

import React from 'react'
import { Grid } from '@mui/material'
import Link from 'next/link'
import { Img } from '@/components/Image'

type imgType = {
  link: string
  logo: string
}

interface Logo {
  data: Array<imgType>
}

export const SponsorshipView = (props: Logo) => {
  const { data } = props

  if (!data || !data.length) {
    return (
      <Grid container spacing={2} style={{ margin: '0', width: '100%' }}>
        データがありません。
      </Grid>
    )
  }
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-6'>
      {Object.values(data).map((data, index) => {
        return data.link ? (
          <Link href={data.link} target='_blank' key={index}>
            <Img style={{ width: '100%' }} alt='' src={data.logo} />
          </Link>
        ) : (
          <Img style={{ width: '100%' }} alt='' src={data.logo} key={index} />
        )
      })}
    </div>
  )
}
