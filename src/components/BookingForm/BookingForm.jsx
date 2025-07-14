import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Simulated blocked dates (e.g., holidays)
const blockedDates = ['2025-07-20', '2025-08-01', '2025-08-15'];

// Simulated available tables by date
const availableTables = {
  '2025-07-21': ['A1', 'B2', 'C3'],
  '2025-07-22': ['A2', 'B3', 'D1'],
  // Default availability
  default: ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1'],
};

// Validation Schema
const BookingSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .required('Full name is required'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{8,11}$/, 'Phone number must be 8–11 digits')
    .required('Phone number is required'),
  guest: Yup.string()
    .notOneOf(['select-a-number'], 'Please select number of guests')
    .required('Guest count is required'),
  table: Yup.string()
    .required('Please choose a table'),
  date: Yup.string()
    .test('blocked-date', 'This date is not available', value => !blockedDates.includes(value))
    .required('Date is required'),
  time: Yup.string().required('Time is required'),
});

const BookingForm = () => {
  const [tables, setTables] = useState(availableTables.default);

  const handleSubmit = (values) => {
    console.log('Reservation:', values);
    alert('Reservation submitted!');
  };

  const handleDateChange = (e, setFieldValue) => {
    const selectedDate = e.target.value;
    setFieldValue('date', selectedDate);

    if (availableTables[selectedDate]) {
      setTables(availableTables[selectedDate]);
    } else {
      setTables(availableTables.default);
    }
  };

  return (
    <Formik
      initialValues={{
        fullname: '',
        phoneNumber: '',
        guest: 'select-a-number',
        table: '',
        date: '',
        time: '',
      }}
      validationSchema={BookingSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form className="form">
          <label htmlFor="fullname">Full Name*</label>
          <Field
            type="text"
            name="fullname"
            className="input-box"
            aria-label="Full Name"
            placeholder="Enter your full name"
            autoComplete="off"
          />
          <ErrorMessage name="fullname" component="div" className="error" />

          <label htmlFor="phoneNumber">Phone Number*</label>
          <Field
            type="text"
            name="phoneNumber"
            className="input-box"
            aria-label="Phone Number"
            placeholder="Enter your phone number"
            autoComplete="off"
          />
          <ErrorMessage name="phoneNumber" component="div" className="error" />

          <label htmlFor="guest">Guests*</label>
          <Field name="guest" as="select" className="input-box dark" aria-label="Number of Guests">
            <option value="select-a-number">Select a number</option>
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
            <option value="four">4</option>
            <option value="four-plus">4+</option>
          </Field>
          <ErrorMessage name="guest" component="div" className="error" />

          <label htmlFor="date">Date*</label>
          <Field
            type="date"
            name="date"
            className="input-box dark"
            aria-label="Reservation Date"
            min={new Date().toISOString().split('T')[0]}
            onChange={e => handleDateChange(e, setFieldValue)}
          />
          <ErrorMessage name="date" component="div" className="error" />

          <label htmlFor="table">Table ID*</label>
          <Field as="select" name="table" className="input-box dark" aria-label="Table Selection">
            <option value="">Select a table</option>
            {tables.map(table => (
              <option key={table} value={table}>{table}</option>
            ))}
          </Field>
          <ErrorMessage name="table" component="div" className="error" />

          <label htmlFor="time">Time*</label>
          <Field
            type="time"
            name="time"
            className="input-box dark"
            aria-label="Reservation Time"
          />
          <ErrorMessage name="time" component="div" className="error" />

          <input className="btn" type="submit" value="Book a table" aria-label="Submit Booking Form" />
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;