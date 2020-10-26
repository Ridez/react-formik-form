import { Form, Formik, getIn } from 'formik'
import moment from 'moment'
import React from 'react'
import * as Yup from 'yup'
import LeftBoxImg from '../../images/left_box.jpg'
import '../../styles/layout.scss'
import SubmitBtn from '../ui/SubmitBtn'
import './field.scss'
import ChessRadioField from './form-fields/chess/ChessRadioField'
import DatePickerField from './form-fields/DatePickerField'
import PhoneInputField from './form-fields/phone/PhoneInputField'
import YourNameField from './form-fields/YourNameField'
import './Form.scss'
import Pagination from './Pagination'

const MyForm = () => {
  const ValSchema = Yup.object().shape({
    yourName: Yup.string()
      .min(3, 'Field should have a minimum 3 characters!')
      .required('Field is required.'),
    phone: Yup.object().shape({
      number: Yup.number()
        .typeError('Must contain only digits.')
        .test(
          'length',
          'Must be exactly 9 digits.',
          (val) => val && val.toString().length === 9
        ),
    }),
    playChess: Yup.boolean().required('Must be selected.'),
    dateOfBirth: Yup.object().shape({
      fullDate: Yup.date()
        .min(moment('01-01-1920'), 'Date must be between 1920 and 2020.')
        .max(moment('12-31-2020'), 'Date must be between 1920 and 2020.'),
      isAdult: Yup.boolean().oneOf([true], 'You are under 18.'),
      isValid: Yup.boolean().oneOf([true], 'The date is not valid.'),
    }),
  })

  return (
    <main className='form-wrapper container'>
      <h1 className='title'>Your account</h1>
      <div className='row'>
        <div className='column-35'>
          <div className='form-wrapper__left'>
            <img alt='People follow the line' src={LeftBoxImg} />
          </div>
        </div>
        <div className='column-65'>
          <div className='form-wrapper__right'>
            <Pagination />
            <div className='top-line'></div>
            <p className='desc'>
              Provide personal information so that we can create a new account
              for you.
            </p>
            <Formik
              initialValues={{
                yourName: '',
                phone: {
                  prefix: '+48',
                  number: '',
                },
                playChess: '',
                dateOfBirth: {
                  day: '01',
                  month: 'January',
                  year: '1920',
                  fullDate: '01/01/1920',
                  isAdult: '',
                },
              }}
              validationSchema={ValSchema}
              validateOnChange={false}
              validateOnBlur={false}
              onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2))
              }}
            >
              {({ errors, values }) => (
                <Form>
                  <YourNameField name='yourName' errors={errors} />
                  <PhoneInputField name='phone' errors={errors} />
                  <ChessRadioField
                    name='playChess'
                    errors={errors}
                    values={values}
                  />
                  <DatePickerField
                    name='dateOfBirth'
                    errors={errors}
                    date={values.dateOfBirth}
                    formikGetIn={getIn}
                  />
                  <SubmitBtn>continue</SubmitBtn>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MyForm
