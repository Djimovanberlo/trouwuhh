import { useState } from 'react'
import { doc, setDoc } from 'firebase/firestore'

import { db, GUEST_COLLECTION } from '../../firebase/config'
import Banner from '../../layout/banner'
import { useThemeContext } from '../../layout/theme'
import Wrapper from '../../layout/wrapper'
import { FieldArray, Form, Formik } from 'formik'
import { FormCheckBoxField, FormRadioField, FormTextField } from '../../components/form'
import { Button } from '../../components/buttons'
import { H2, P } from '../../components/typography'
import FlexSection from '../../components/flex-section'
import { formCopy } from '../../data/rsvp'

const Rsvp = () => {
  const { theme, language } = useThemeContext()
  const [isError, setIsError] = useState(false)
  const [rerender, setRerender] = useState(false)
  const formInitGuestObj = { guestName: '', isPresent: null, isChild: false, isVegetarian: false }
  const formInitValues = { guests: [{ ...formInitGuestObj }] }

  const addGuests = values => {
    const nameArr = values.guests.map(guest => guest.guestName)
    const attendanceArr = values.guests.map(guest => guest.isPresent)
    const isMissingNames = nameArr.some(guestName => !guestName)
    const isMissingAttendance = attendanceArr.some(attendance => attendance === null)

    if (isMissingNames || isMissingAttendance) {
      setIsError(true)
      return
    }

    values.guests.forEach(guest => {
      const { guestName, isPresent, isChild, isVegetarian } = guest
      setDoc(doc(db, GUEST_COLLECTION, guestName), {
        guestName,
        isPresent: JSON.parse(isPresent),
        isChild,
        isVegetarian,
      }).then(() => {
        setRerender(!rerender)
        localStorage.setItem('form_submitted', JSON.stringify(true))
      })
    })
  }

  const formIsSubmitted = JSON.parse(localStorage.getItem('form_submitted')) ?? null

  return (
    <>
      <Banner src={`/${theme}/banners/rsvp.jpg`} />
      <Wrapper>
        <FlexSection image={`/${theme}/icons/rsvp_1.svg`}>
          {!formIsSubmitted ? (
            <Formik initialValues={formInitValues} onSubmit={addGuests}>
              {({ values, _, __, handleReset }) => (
                <Form>
                  <FieldArray name='guests'>
                    {({ _, remove, push }) => (
                      <>
                        {values.guests.map((_, index) => (
                          <div key={index}>
                            <FormTextField className='rsvp__textField' name={`guests.${index}.guestName`} placeholder={formCopy[language].placeHolder} />
                            <P>{formCopy[language].attendance}</P>
                            <FormRadioField name={`guests.${index}.isPresent`} value='true' labelText={formCopy[language].yes} />
                            <FormRadioField className='rsvp__attendance' name={`guests.${index}.isPresent`} value='false' labelText={formCopy[language].no} />
                            <br />
                            <FormCheckBoxField name={`guests.${index}.isChild`} labelText={formCopy[language].kidsPortion} /> <br />
                            <FormCheckBoxField className='rsvp__checkboxes' name={`guests.${index}.isVegetarian`} labelText={formCopy[language].veggieOption} /> <br />
                            <div className='rsvp__btns rsvp__btns--withSpaceBot'>
                              {values.guests.length > 1 && (
                                <Button type='button' onClick={() => remove(index)}>
                                  <P>{formCopy[language].removeGuest}</P>
                                </Button>
                              )}
                              {values.guests.length === index + 1 && values.guests.length < 5 && (
                                <Button type='button' onClick={() => push({ ...formInitGuestObj })}>
                                  <P>{formCopy[language].addGuest}</P>
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </FieldArray>
                  {/* <Button
                    onClick={evt => {
                      evt.preventDefault()
                      handleReset()
                    }}>
                    <P>{formCopy[language].resetBtn}</P>
                  </Button> */}
                  <div className='rsvp__btns'>
                    <Button type='submit'>
                      <P>{formCopy[language].submitBtn}</P>
                    </Button>
                    {isError && <H2>{formCopy[language].errorMsg}</H2>}
                  </div>
                </Form>
              )}
            </Formik>
          ) : (
            <H2>{formCopy[language].submitted}</H2>
          )}
        </FlexSection>
      </Wrapper>
    </>
  )
}

export default Rsvp
