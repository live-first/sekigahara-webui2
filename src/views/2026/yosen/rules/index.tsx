import { YosenTitle } from "@/components/title/title"
import { CommingSoonView } from "@/views/common/commingSoon/commingSoon"

export const YosenRulesView = () => {
  return (
    <div className='flex flex-col gap-6 pb-12 p-2 md:px-20 lg:px-36'>
      <YosenTitle title='〜 投俵ルール 〜' />
      <CommingSoonView />
    </div>
  )
}
