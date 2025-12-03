import { PropsWithChildren } from 'react'

export const Frame = (props: PropsWithChildren) => {
  return <div className='p-5 bg-white m-2 rounded-xl align-middle'>{props.children}</div>
}
