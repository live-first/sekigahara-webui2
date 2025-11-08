import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { EventListView } from '@/views/eventListView'
import { FooterView } from '@/views/footerView'
import { HeaderView } from '@/views/headerView'

export default function Events() {
  return (
    <SingleViewLayout header={<HeaderView />} main={<EventListView />} footer={<FooterView />} />
  )
}
