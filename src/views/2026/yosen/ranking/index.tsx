import { RankingType, RankingUnit, UnitInit } from '@/domain/ranking'
import { artists } from '@/resource/2026/yosen/artists'
import { RankingBox } from '@/templates/rankingBox'
import { useEffect, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { YosenTitle } from '@/components/title/title'

export const YosenRankingView = () => {
  const [ranking, setRanking] = useState<RankingType | null>(null)

  useEffect(() => {
    fetch(
      'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLinD9fha5DD8_Pd9c7FKPUVuluvHWEar7pRdzvAlqCh1PM8-0COu3Z4RI6ws1y7A5yTt5zyq-otAhua38VnAK6NVFDGy2OHll05YjsWXiR6WXj-vF9XH8zkKSO_wzbInUmg4IfFyMuM7aBTV7NeuNUpLVLEfbLAQ7yrteuEtbHhnAt41VlxlRrv4M3oZ5XJ77Amyll5OwhZuRO-oz9_ASRDHPr9dXTW0_ZC5hShSdAXDyfsonug2z21phgtVBPjPSStxWi9VASHLVDK5iUgbHM5AtJAU8jzS39-lOVy&lib=Mutf3B7HfdlvVscNszRI483pjz42KUVZk',
      { mode: 'cors' },
    )
      .then((response) => response.json())
      .then((data: RankingType) => {
        const ranking = data.ranking.map((unit): RankingUnit => {
          const artist = artists.find((artist) => artist.name === unit.name) ?? UnitInit
          return {
            ...unit,
            name: artist.name,
            img: artist.img,
            x: artist.x,
          }
        })
        setRanking({
          date: data.date,
          time: data.time,
          ranking: ranking,
        })
      })
      .catch((error) => {
        console.error('リクエストエラー:', error)
      })
  }, [])

  return (
    <div className='flex flex-col gap-6 pb-12 p-2 md:px-20 lg:px-36'>
      <YosenTitle title='〜 RANKING 〜' />
      {ranking && (
        <div className='flex flex-col w-full text-end text-sm text-black py-2'>
          更新日時：{`${ranking.date} ${ranking.time}`}
        </div>
      )}
      <div className='flex flex-col border-4 border-font-blue'>
        {ranking ? (
          ranking.ranking
            .sort((a, b) => b.point - a.point)
            .map((unit, index) => (
              <RankingBox
                rank={index + 1}
                name={unit.name}
                point={unit.point}
                live={unit.live}
                meta={unit.meta}
                img={unit.img}
                key={index}
                showBorder={ranking.ranking.length !== index + 1}
              />
            ))
        ) : (
          <DotLottieReact
            src='https://lottie.host/cc8ec496-74a6-42ab-aed9-eadfaffb1718/Zx5ooLEWE9.lottie'
            loop
            autoplay
          />
        )}
      </div>
    </div>
  )
}
