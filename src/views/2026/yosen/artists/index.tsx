import SlideUpAnimation from '@/components/animation/slideUpAnimation'
import { YosenTitle } from '@/components/title/title'
import { shuffleArray } from '@/components/utils'
import { artists } from '@/resource/2026/yosen/artists'
import { UnitBox } from '@/templates/unitBox'
import { Grid } from '@mui/material'

export const YosenArtistsView = () => {
  return (
    <div className='flex flex-col gap-6 pb-12 p-2 md:px-20 lg:px-36'>
      <YosenTitle title='〜 参加ユニット 〜' desc='公平性のためランダム順に表示されます' />
      <Grid container spacing={{ xs: 2, sm: 2, md: 4 }}>
        {shuffleArray(artists).map((artist, index) => (
          <Grid size={{ xs: 6, sm: 6, md: 4 }} key={`artist-${index}`}>
            <SlideUpAnimation>
              <UnitBox name={artist.name} img={artist.img} x={artist.x} />
            </SlideUpAnimation>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
