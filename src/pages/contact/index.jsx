import { doc, setDoc } from 'firebase/firestore'
import { Form, Formik } from 'formik'

import Button from '../../components/buttons'
import { FormCheckBoxField, FormRadioField, FormTextField } from '../../components/form'
import { P } from '../../components/typography'
import { db, GUEST_COLLECTION } from '../../firebase/config'
import Banner from '../../layout/banner'
import Wrapper from '../../layout/wrapper'

const Contact = () => {
  const formInitValues = { name: '', isPresent: false, isChild: false, isVegetarian: false }

  const addGuests = ({ name, isPresent, isChild, isVegetarian }) => {
    if (!name) return
    setDoc(doc(db, GUEST_COLLECTION, name), {
      name,
      isPresent: JSON.parse(isPresent),
      isChild,
      isVegetarian,
    })
  }

  return (
    <>
      <Banner />
      <Wrapper>
        <Formik initialValues={formInitValues} onSubmit={addGuests}>
          <Form>
            <FormTextField name='name' placeholder='name' />
            <P>Aanwezig</P>
            <FormRadioField name='isPresent' value='true' labelText='Ja' />
            <FormRadioField name='isPresent' value='false' labelText='Nee' />
            <br />
            <FormCheckBoxField name='isChild' labelText='kinderportie' /> <br />
            <FormCheckBoxField name='isVegetarian' labelText='vega aub' /> <br />
            <Button type='submit'>ADD DATA</Button>
          </Form>
        </Formik>
      </Wrapper>
    </>
  )
}

export default Contact
