import { Alert, Container } from '@mui/material'
import { useEffect, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { BaseView2025 } from '../layout/index.tsx'
import { Title } from '@/components/title/title.tsx'

type ItemType = {
  no: string | number
  name: string
  detail: string
  pic: string
}

const LostListView = () => {
  const [items, setItems] = useState<ItemType[]>()

  useEffect(() => {
    fetch(
      'https://script.google.com/macros/s/AKfycbx42qom_KM9NjYHbmEK1XUVV9tZeRKi29_JuuaOJH3HYZFh5Zg3XbxGkABBJXNP21es/exec',
      { mode: 'cors' },
    )
      .then((response) => response.json())
      .then((data) => {
        setItems(data)
      })
      .catch((error) => {
        console.error('リクエストエラー:', error)
      })
  }, [])

  return (
    <div>
      <Container maxWidth='md'>
        <Title english='LOST LIST' japaniese='忘れ物情報' />
        <Alert severity='info' className='mt-4'>
          落とし物に心当たりある方は、公式Xもしくは公式InstagramにDMお願いします。
          <br />
          その際にNo及び落とし物の詳細をお送りください。
          <br />
          該当するものが見つかった際にご連絡いたします。
        </Alert>
        <div className='py-8 flex gap-2'>
          <table className='w-full'>
            <tr className='border-1 bg-sekigahara'>
              <th className='w-1/6'>No</th>
              <th className='w-2/6 text-start'>項目名</th>
              <th className='w-3/6 text-start'>特徴・詳細など</th>
            </tr>
            {items ? (
              items?.map((item, index) => {
                return (
                  <tr className='border-1 bg-white' key={index}>
                    <td className='text-center border border-l-1'>{item.no}</td>
                    <td className='text-start border border-l-1'>{item.name}</td>
                    <td className='text-start'>{item.detail}</td>
                  </tr>
                )
              })
            ) : (
              <DotLottieReact
                src='https://lottie.host/cc8ec496-74a6-42ab-aed9-eadfaffb1718/Zx5ooLEWE9.lottie'
                loop
                autoplay
              />
            )}
          </table>
        </div>
      </Container>
    </div>
  )
}

export const LostList2025View = () => {
  return (
    <BaseView2025>
      <LostListView />
    </BaseView2025>
  )
}
