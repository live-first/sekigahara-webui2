import './style.css'

type Title = {
  english: string
  japaniese: string
}

export const Title = (props: Title) => {
  const { english, japaniese } = props

  return (
    <h2 className='flex'>
      <div className='title-decoration left'></div>
      <div className='title-font'>
        {english}
        <div className='ja'>{japaniese}</div>
      </div>
      <div className='title-decoration right'></div>
    </h2>
  )
}

export const YosenTitle = ({ title, id, desc }: { title: string; id?: string; desc?: string }) => {
  return (
    <section className='pb-6 pt-6'>
      <div className='h-12' id={id}></div>
      <div className='yosen-title text-4xl'>{title}</div>
      <p className='text-sm text-center text-black'>{desc}</p>
    </section>
  )
}