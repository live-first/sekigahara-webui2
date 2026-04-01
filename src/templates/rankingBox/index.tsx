import { Img } from '@/components/Image'
import { cn } from '@/components/utils'
import { RankingUnit } from '@/domain/ranking'

type RankingBoxProps = RankingUnit & {
  rank: number
  showBorder: boolean
}

export const RankingBox = (props: RankingBoxProps) => {
  const { name, point, live, meta, img, rank, showBorder } = props
  return (
    <div
      className={cn(
        'flex flex-col p-1.5 items-center bg-white',
        showBorder ? 'border-b border-b-gray-200' : '',
      )}
    >
      <div
        className={cn(
          'flex justify-between w-full gap-4',
          rank <= 3 && 'md:h-42 sm:h-40',
          rank <= 12 && 'h-24',
          'h-16',
        )}
      >
        <div className='flex items-center h-full gap-4 w-fit'>
          <div className='w-10'>
            <div
              className={cn(
                'w-10 h-10 rounded-full relative',
                rank === 1 && 'bg-[#ffe057]',
                rank === 2 && 'bg-[#cbcbcb]',
                rank === 3 && 'bg-[#e0691f]',
                rank > 3 && 'bg-[#858585]',
              )}
            >
              <span
                className={cn(
                  'absolute top-1/2 left-1/2 -translate-1/2',
                  rank === 1 && 'text-amber-500',
                  rank === 2 && 'text-gray-500',
                  rank > 2 && 'text-white',
                )}
              >
                {rank}
              </span>
            </div>
          </div>

          {rank <= 12 ? (
            <div className={cn('h-full md:min-w-44 sm:min-w-30 content-center')}>
              <Img src={img?.src ?? ''} alt={img?.alt} cName='w-full h-full object-contain' />
            </div>
          ) : (
            <></>
          )}
        </div>

        <div
          className={cn(
            'flex w-full',
            rank >= 13 ? 'justify-between items-center' : 'flex-col h-full justify-center',
          )}
        >
          <div className={cn('border-blue-text md:text-2xl sm:text-sm whitespace-nowrap')}>
            {name}
          </div>
          <div className='border-blue-text md:text-2xl sm:text-sm whitespace-pre-wrap w-full text-end'>
            {point.toLocaleString()} Pt
          </div>
        </div>
      </div>

      <div className='flex gap-2 w-full content-end pt-1 pl-14'>
        <div className='flex w-1/2 justify-between'>
          <p className='border-l-6 border-font-blue pl-1 text-sm text-black'>LIVE</p>
          <p className='text-sm pl-1 text-black'>{live?.toLocaleString()} 俵</p>
        </div>
        <div className='flex w-1/2 justify-between'>
          <p className='border-l-6 border-font-blue pl-1 text-sm text-black'>配信</p>
          <p className='text-sm pl-1 text-black'>{meta?.toLocaleString()} Pt</p>
        </div>
      </div>
    </div>
  )
}
