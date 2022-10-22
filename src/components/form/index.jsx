import { Field } from 'formik'
import { Label } from '../typography'

const FormTextField = ({ className = '', name, placeholder }) => <Field className={`${className} formTextField`} name={name} placeholder={placeholder} />

const FormCheckBoxField = ({ className = '', name, labelText }) => (
  <Label>
    <Field className={className} type='checkbox' name={name} />
    {labelText}
  </Label>
)

const FormRadioField = ({ className = '', name, value, labelText }) => (
  <Label>
    <Field className={className} type='radio' name={name} value={value} />
    {labelText}
  </Label>
)

export { FormTextField, FormCheckBoxField, FormRadioField }
