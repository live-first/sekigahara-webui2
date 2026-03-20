'use client'

import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import './lineup.scss'
import { artists } from '@/resource/2024/artists.ts'
import { ArtistType } from '@/domain/artist.ts'
import { Title } from '@/components/title/title.tsx'
import { BaseViewLayout } from '@/layouts/BaseViewLayout.tsx'
import { ArtistBoxModal } from '@/templates/modal/ArtistBoxModal.tsx'

const MainView = () => {
  const [units, setUnit] = useState<ArtistType[]>(artists)
  const [day, setDay] = useState('all')

  const onClickDay1 = () => {
    if ('day1' === day) {
      setDay('all')
      setUnit(artists)
    } else {
      setDay('day1')
      setUnit(
        artists.filter((unit) => {
          return unit.day1
        }),
      )
    }
  }

  const onClickDay2 = () => {
    if ('day2' === day) {
      setDay('all')
      setUnit(artists)
    } else {
      setDay('day2')
      setUnit(
        artists.filter((unit) => {
          return unit.day2
        }),
      )
    }
  }

  const onClickDay3 = () => {
    if ('day3' === day) {
      setDay('all')
      setUnit(artists)
    } else {
      setDay('day3')
      setUnit(
        artists.filter((unit) => {
          return unit.day3
        }),
      )
    }
  }

  useEffect(() => {
    setUnit(artists)
  }, [])

  return (
    <div className='lineup'>
      <Container maxWidth='lg'>
        <Title english='LINE UP' japaniese='出演者情報' />
        <div className='describe'>（50音順）</div>
        <div className='w-1/3'>
          <button className={`button day1`} onClick={() => onClickDay1()}>
            19日
          </button>
        </div>
        <div className='w-1/3'>
          <button className={`button day2`} onClick={() => onClickDay2()}>
            20日
          </button>
        </div>
        <div className='w-1/3'>
          <button className={`button day3`} onClick={() => onClickDay3()}>
            21日
          </button>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-6'>
          {Object.values(units).map((unit, index) => {
            return <ArtistBoxModal {...unit} key={index} />
          })}
        </div>
      </Container>
    </div>
  )
}

const Lineup2024View = () => {
  return <BaseViewLayout main={<MainView />} />
}

export default Lineup2024View
