import { Form, Formik } from 'formik'
import { useState } from 'react'

import Button from '../buttons'
import { FormTextField } from '../form'

const Curtains = () => {
  const [isPwCorrect, setIsPwCorrect] = useState(false)

  const formInitValues = { password: '' }

  const handleClick = ({ password }) => {
    const lowerCasePw = password.toLowerCase()
    if (lowerCasePw === process.env.REACT_APP_WEBSITE_PASSWORD) {
      localStorage.setItem('password_correct', JSON.stringify(true))
      setIsPwCorrect(true)
    }
  }

  return (
    <div className={`curtains ${isPwCorrect ? 'curtains--open' : ''}`}>
      <div className='curtains__container'>
        <img alt='' className={`curtains__left ${isPwCorrect ? 'curtains__left--open' : ''}`} src='/curtain-left.png' />
        <img alt='' className={`curtains__right ${isPwCorrect ? 'curtains__right--open' : ''}`} src='/curtain-right.png' />
        <Formik initialValues={formInitValues} onSubmit={handleClick}>
          <Form className={`curtains__form ${isPwCorrect ? 'curtains__form--open' : ''}`}>
            <FormTextField name='password' placeholder='Enter password' />
            <Button type='submit'>Submit</Button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Curtains
