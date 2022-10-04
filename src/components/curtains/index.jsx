import { useState } from 'react'

const Curtains = () => {
  const [text, setText] = useState('')
  const [isPwCorrect, setIsPwCorrect] = useState(false)

  const handleClick = () => {
    console.log(process.env.REACT_APP_WEBSITE_PASSWORD, typeof process.env.REACT_APP_WEBSITE_PASSWORD)
    if (text === process.env.WEBSITE_PASSWORD) {
      localStorage.setItem('password_correct', JSON.stringify(true))
    }
    setIsPwCorrect(true)
  }

  console.log(isPwCorrect)

  return (
    <div className='curtains'>
      <div className='curtains__container'>
        <img alt='' className={`curtains__left ${isPwCorrect ? 'curtains__left--open' : ''}`} src='/curtain-left.png' />
        <img alt='' className={`curtains__right ${isPwCorrect ? 'curtains__right--open' : ''}`} src='/curtain-right.png' />
        <button className={`curtains__btn ${isPwCorrect ? 'curtains__btn--open' : ''}`} onClick={handleClick}>
          TRY ME
        </button>
      </div>
    </div>
  )
}

export default Curtains
