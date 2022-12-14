import { Form, Formik } from 'formik'
import { useState } from 'react'

import Image from '../image'
import { ButtonNeutral } from '../buttons'
import { FormTextField } from '../form'
import { PNeutral } from '../typography'
import { useThemeContext } from '../../layout/theme'

const Curtains = () => {
  const { playMusic } = useThemeContext()
  const [isPwCorrect, setIsPwCorrect] = useState(false)

  const formInitValues = { password: '' }

  const handleClick = ({ password }) => {
    const lowerCasePw = password.toLowerCase()
    if (lowerCasePw === process.env.REACT_APP_WEBSITE_PASSWORD) {
      localStorage.setItem('password_correct', JSON.stringify(true))
      playMusic()
      setIsPwCorrect(true)
    }
  }

  return (
    <div className={`curtains ${isPwCorrect ? 'curtains--open' : ''}`}>
      <div className='curtains__container'>
        <Image className={`curtains__left ${isPwCorrect ? 'curtains__left--open' : ''}`} src='/curtain-left.png' />
        <Image alt='' className={`curtains__right ${isPwCorrect ? 'curtains__right--open' : ''}`} src='/curtain-right.png' />
        <Formik initialValues={formInitValues} onSubmit={handleClick}>
          <Form className={`curtains__form ${isPwCorrect ? 'curtains__form--open' : ''}`}>
            <FormTextField name='password' placeholder='Enter password' />
            <ButtonNeutral type='submit'>
              <PNeutral>Submit</PNeutral>
            </ButtonNeutral>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Curtains
