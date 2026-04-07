'use client'

import React, { PropsWithChildren } from 'react'
import { Container } from '@mui/material'
import './yosen.scss'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { EdoView } from './edo.tsx'
import { OwariView } from './owari.tsx'
import { OsakaView } from './osaka.tsx'
import { Img } from '@/components/Image/index.tsx'

type TabPanelProps = {
  index: number
  value: number
}

const CustomTabPanel = (props: PropsWithChildren<TabPanelProps>) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const a11yProps = (index: number) => {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  }
}

const EventTabView = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          variant='fullWidth'
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab className='tab edo f-textshadow' label='江戸の陣' {...a11yProps(0)} />
          <Tab className='tab owari f-textshadow' label='尾張の陣' {...a11yProps(1)} />
          <Tab className='tab osaka f-textshadow' label='大阪の陣' {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <EdoView />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <OwariView />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <OsakaView />
      </CustomTabPanel>
    </Box>
  )
}

const Yosen2024View = () => {
  return (
    <div className='yosenkai-view'>
      <Container maxWidth='md'>
        <div className='top-view'>
          <Img
            cName='top-view'
            src='https://lime-light.tv/images/2024/yosenview-top.jpeg'
            alt='予選会トップ'
          />
        </div>
        <EventTabView />
      </Container>
      <Container maxWidth='md'>
        <div className='yosen-rule'>
          <div className='rule-title'>〜 投俵ルール 〜</div>
          <Img cName='img' src='https://lime-light.tv/images/2024/rule2.jpeg' alt='ルール画像' />
          <div className='rule-title'>〜 順位別特典 〜</div>
          <Img cName='img' src='https://lime-light.tv/images/2024/tokuten.jpeg' alt='順位別特典' />
        </div>
      </Container>
    </div>
  )
}

export default Yosen2024View
