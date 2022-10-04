import { Field } from 'formik'

const FormField = ({ name, placeholder }) => {
  return <Field name={name} placeholder={placeholder} />
}

export default FormField
