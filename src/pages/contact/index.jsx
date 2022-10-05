import { doc, setDoc } from 'firebase/firestore'
import { FieldArray, Form, Formik } from 'formik'

import Button from '../../components/buttons'
import { FormCheckBoxField, FormRadioField, FormTextField } from '../../components/form'
import { H2, P } from '../../components/typography'
import { db, GUEST_COLLECTION } from '../../firebase/config'
import Banner from '../../layout/banner'
import Wrapper from '../../layout/wrapper'

const Contact = () => {
  const formInitGuesObj = { guestName: '', isPresent: false, isChild: false, isVegetarian: false }
  const formInitValues = { guests: [{ ...formInitGuesObj }] }

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
      })
    })

    localStorage.setItem('form_submitted', JSON.stringify(true))
  }

  const formIsSubmitted = JSON.parse(localStorage.getItem('form_submitted')) ?? null

  return (
    <>
      <Banner />
      <Wrapper>
        {!formIsSubmitted ? (
          <Formik
            initialValues={formInitValues}
            onSubmit={addGuests}
            render={({ values, _, __, handleReset }) => (
              <Form>
                <FieldArray
                  name='guests'
                  render={({ _, remove, push }) => (
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
                            Remove guest
                          </Button>
                        </div>
                      ))}
                      <Button type='button' onClick={() => values.guests.length < 5 && push({ ...formInitGuesObj })}>
                        Add guest
                      </Button>
                    </>
                  )}
                />
                <Button
                  onClick={evt => {
                    evt.preventDefault()
                    handleReset()
                  }}>
                  RESET
                </Button>
                <Button type='submit'>ADD DATA</Button>
              </Form>
            )}
          />
        ) : (
          <H2>Form is already submitted, contact us for more info</H2>
        )}
      </Wrapper>
    </>
  )
}

export default Contact
