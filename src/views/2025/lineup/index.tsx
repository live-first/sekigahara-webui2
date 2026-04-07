'use client'

import { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import './lineup.css'
import { BaseView2025 } from '../layout/index.tsx'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { ArtistType } from '@/domain/artist.ts'
import { Title } from '@/components/title/title.tsx'
import { ArtistBoxModal } from '@/templates/modal/ArtistBoxModal.tsx'

const LineUp = () => {
  const [units, setUnit] = useState<ArtistType[] | null>(null)
  const [viewUnits, setViewUnits] = useState<ArtistType[] | null>(null)
  const [day, setDay] = useState('all')

  const onClickDay1 = () => {
    if ('day1' === day) {
      setDay('all')
      setViewUnits(units)
    } else {
      setDay('day1')
      setViewUnits(
        units &&
          units.filter((unit) => {
            return unit.day1
          }),
      )
    }
  }

  const onClickDay2 = () => {
    if ('day2' === day) {
      setDay('all')
      setViewUnits(units)
    } else {
      setDay('day2')
      setViewUnits(
        units &&
          units.filter((unit) => {
            return unit.day2
          }),
      )
    }
  }

  const onClickDay3 = () => {
    if ('day3' === day) {
      setDay('all')
      setViewUnits(units)
    } else {
      setDay('day3')
      setViewUnits(
        units &&
          units.filter((unit) => {
            return unit.day3
          }),
      )
    }
  }

  useEffect(() => {
    fetch(
      'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjlmzX3wYHGsuT9I77HaLQCDQdZ0mNo4jU6pgdCzTXxTYpoN_C3Dj9ZBN1DIYZ-61C8ResUzVLT_ehdHSvOODMbU8WGZvoUGxTg3O4EdMjtDJWgJ2sC_tw_FVTm8dkYWWS4a_JFTD2GzaTHsmc0Os97gjffFTD2YXD1x_iflWrCh80hd5_INRNWpWJxNCYx0Joa7PPO8Y6EhB2n72VniG5d2cqSnOUTDofatfv_-K5RB1MXhBoa6Be7HDyOS8CkB4QSDQsB7pk_GEfQSeTtVGiaOBp95Qg2IEJcxCnd&lib=Mxcqxjg6QEQs5pFWw4MFI4Hpjz42KUVZk',
      { mode: 'cors' },
    )
      .then((response) => response.json())
      .then((data) => {
        const unitData = data.map((unit: ArtistType): ArtistType => {
          return {
            ...unit,
            img: {
              src: `https://lime-light.tv/images/2025/lineup/${unit.img}`,
              alt: unit.name,
            },
          }
        })
        setUnit(unitData)
        setViewUnits(unitData)
      })
      .catch((error) => {
        console.error('リクエストエラー:', error)
      })
  }, [])

  return (
    <div className='lineup'>
      <Container maxWidth='lg'>
        <Title english='LINE UP' japaniese='出演者情報' />
        <div className='pb-24'>
          <div className='describe'>（50音順）</div>
          {units && (
            <div className='flex py-6'>
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
            </div>
          )}
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-6'>
            {viewUnits ? (
              viewUnits.map((unit, index) => {
                return <ArtistBoxModal {...unit} key={index} />
              })
            ) : (
              <DotLottieReact
                src='https://lottie.host/cc8ec496-74a6-42ab-aed9-eadfaffb1718/Zx5ooLEWE9.lottie'
                loop
                autoplay
              />
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}

export const Lineup2025View = () => {
  return (
    <BaseView2025>
      <LineUp />
    </BaseView2025>
  )
}
