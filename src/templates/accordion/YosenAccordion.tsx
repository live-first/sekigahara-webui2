import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { SlArrowDown } from 'react-icons/sl'
import './accordion.scss'
import Link from 'next/link'
import { Img } from '@/components/Image'

type AccordionProps = {
  className?: string
  title: string
  date: string
  open?: string
  start?: string
  place: string
  artists: string
  ticket?: string
  image1?: string
  image2?: string
}

export const YosenAccordion = (props: AccordionProps) => {
  const { className, title, date, open, start, place, artists, ticket, image1, image2 } = props
  return (
    <Accordion>
      <AccordionSummary expandIcon={<SlArrowDown />} className={`${className} accordion-title`}>
        {title}
      </AccordionSummary>
      <AccordionDetails>
        <div className='col-head'>日時</div>
        <div className='col-content'>{date}</div>
        <div className='col-head'>会場</div>
        <div className='col-content'>{place}</div>
        {open ? (
          <>
            <div className='col-head'>開場{start ? '/開演' : ''}</div>
            <div className='col-content'>
              {open}
              {start ? <span> / {start}</span> : <></>}
            </div>
          </>
        ) : (
          <></>
        )}
        <div className='col-head'>出演者</div>
        <div className='col-content'>{artists}</div>
        {ticket ? (
          <>
            <div className='col-head'>チケット</div>
            <div className='col-content'>
              <Link target='_blank' href={ticket}>
                {ticket}
              </Link>
            </div>
          </>
        ) : (
          <></>
        )}
        <div className='accordion-img'>
          <Img cName='img' src={image1 ?? ''} alt='' />
          <Img cName='img' src={image2 ?? ''} alt='' />
        </div>
      </AccordionDetails>
    </Accordion>
  )
}
