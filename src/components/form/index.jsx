import { Field } from 'formik'
import { Label } from '../typography'

const FormTextField = ({ name, placeholder }) => <Field name={name} placeholder={placeholder} />

const FormCheckBoxField = ({ name, labelText }) => (
  <Label>
    <Field type='checkbox' name={name} />
    {labelText}
  </Label>
)

const FormRadioField = ({ name, value, labelText }) => (
  <Label>
    <Field type='radio' name={name} value={value} />
    {labelText}
  </Label>
)

export { FormTextField, FormCheckBoxField, FormRadioField }
