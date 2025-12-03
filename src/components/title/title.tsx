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
