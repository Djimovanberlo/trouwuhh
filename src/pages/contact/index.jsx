import { useState } from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { FieldArray, Form, Formik } from 'formik'

import { Button } from '../../components/buttons'
import { FormCheckBoxField, FormRadioField, FormTextField } from '../../components/form'
import { H2, P } from '../../components/typography'
import { db, GUEST_COLLECTION } from '../../firebase/config'
import Banner from '../../layout/banner'
import Wrapper from '../../layout/wrapper'

const Contact = () => {
  const [rerender, setRerender] = useState(false)
  const formInitGuestObj = { guestName: '', isPresent: false, isChild: false, isVegetarian: false }
  const formInitValues = { guests: [{ ...formInitGuestObj }] }

  const addGuests = values => {
    const nameArr = values.guests.map(guest => guest.guestName)
    if (nameArr.some(guestName => !guestName)) return

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
      <Banner />
      <Wrapper>
        {!formIsSubmitted ? (
          <Formik initialValues={formInitValues} onSubmit={addGuests}>
            {({ values, _, __, handleReset }) => (
              <Form>
                <FieldArray name='guests'>
                  {({ _, remove, push }) => (
                    <>
                      {values.guests.map((_, index) => (
                        <div key={index}>
                          <FormTextField name={`guests.${index}.guestName`} placeholder='name' />
                          <P>Aanwezig</P>
                          <FormRadioField name={`guests.${index}.isPresent`} value='true' labelText='Ja' />
                          <FormRadioField name={`guests.${index}.isPresent`} value='false' labelText='Nee' />
                          <br />
                          <FormCheckBoxField name={`guests.${index}.isChild`} labelText='kinderportie' /> <br />
                          <FormCheckBoxField name={`guests.${index}.isVegetarian`} labelText='vega aub' /> <br />
                          <Button type='button' onClick={() => values.guests.length > 1 && remove(index)}>
                            <P>Remove guest</P>
                          </Button>
                        </div>
                      ))}
                      <Button type='button' onClick={() => values.guests.length < 5 && push({ ...formInitGuestObj })}>
                        <P>Add guest</P>
                      </Button>
                    </>
                  )}
                </FieldArray>
                <Button
                  onClick={evt => {
                    evt.preventDefault()
                    handleReset()
                  }}>
                  <P>RESET</P>
                </Button>
                <Button type='submit'>
                  <P>ADD DATA</P>
                </Button>
              </Form>
            )}
          </Formik>
        ) : (
          <H2>Form is submitted, contact us for more info</H2>
        )}
      </Wrapper>
    </>
  )
}

export default Contact
