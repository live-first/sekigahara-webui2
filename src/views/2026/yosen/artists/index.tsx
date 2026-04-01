import SlideUpAnimation from '@/components/animation/slideUpAnimation'
import { shuffleArray } from '@/components/utils'
import { artists } from '@/resource/2026/yosen/artists'
import { UnitBox } from '@/templates/unitBox'
import { Grid } from '@mui/material'

export const YosenArtistsView = () => {
  return (
    <Grid container spacing={{ xs: 2, sm: 2, md: 4 }}>
      {shuffleArray(artists).map((artist, index) => (
        <Grid size={{ xs: 6, sm: 6, md: 4 }} key={`artist-${index}`}>
          <SlideUpAnimation>
            <UnitBox name={artist.name} img={artist.img} x={artist.x} />
          </SlideUpAnimation>
        </Grid>
      ))}
    </Grid>
  )
}
