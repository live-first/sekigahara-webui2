import { Img } from '@/components/Image'
import './outline.scss'

type OutlineProps = {
  logo: string
  title: string
  date: string
}
export const OutlineView = (props: OutlineProps) => {
  const { logo, title, date } = props
  return (
    <div className='outline'>
      <Img src={logo} alt='' />
      <div className='outline-area'>
        <div className='row'>
          <div className='col-head'>公演名</div>
          <div className='col'>{title}</div>
        </div>
        <div className='row'>
          <div className='col-head'>日程</div>
          <div className='col'>{date}</div>
        </div>
        <div className='row'>
          <div className='col-head'>会場</div>
          <div className='col'>桃配運動公園</div>
        </div>
        <div className='row'>
          <div className='col-head'>主催</div>
          <div className='col'>IDOLWARS実行委員会</div>
        </div>
      </div>
    </div>
  )
}
