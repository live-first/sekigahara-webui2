import SlideUpAnimation from '@/components/animation/slideUpAnimation'
import './artistBox.scss'
import { Img } from '@/components/Image/index.tsx'
import { ArtistType } from '@/domain/artist.ts'

export const ArtistBox = (props: ArtistType) => {
  const { name, img, day1, day2, day3 } = props

  return (
    <SlideUpAnimation>
      <div className='flex flex-col p-3 bg-white rounded-sm border border-sekigahara custom-shadow artist-box w-full'>
        <div className='flex flex-co w-full text-center justify-center overflow-hidden relative lg:h-[250px] md:h-[230px] sm:h-[200px] min-[150px]:h-[150px]'>
          <Img src={img.src} alt={img.alt} cName='h-full absolute top-0 left-0 object-contain' />
        </div>
        <div className='text-sekigahara text-md md:text-xl font-bold text-center h-14'>
          <p className='whitespace-pre-wrap h-full content-center leading-5'>{name}</p>
        </div>
        <div className='tag-area'>
          {day1 ? <span className='day1'>19日</span> : ''}
          {day2 ? <span className='day2'>20日</span> : ''}
          {day3 ? <span className='day3'>21日</span> : ''}
        </div>
      </div>
    </SlideUpAnimation>
  )
}
