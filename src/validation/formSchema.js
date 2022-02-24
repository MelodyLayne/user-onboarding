import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('This cannot be left blank'),
  email: yup
    .string()
    .trim()
    .required('This cannot be left blank'),
  password: yup
    .string()
    .trim()
    .min(4, 'Password must be at least 4 characters')
    .required('This cannot be left blank'),
  tos: yup
    .string()
    .trim()
    .required('One must be selected'),
})




export default formSchema;
