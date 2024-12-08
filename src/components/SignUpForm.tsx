import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/forms.css';
import '../index.css';
// Validation Schema
const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});

const getPasswordStrength = (password: string): string => {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[@$!%*?&]/.test(password)) strength++;

  switch (strength) {
    case 0:
    case 1:
      return 'Weak';
    case 2:
    case 3:
      return 'Medium';
    case 4:
    case 5:
      return 'Strong';
    default:
      return '';
  }
};

const SignUpForm: React.FC = () => {
  const [passwordStrength, setPasswordStrength] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      validationSchema={SignUpSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          setSuccessMessage('Sign Up Successful!');
          resetForm();
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form role="form" aria-labelledby="signup-heading">
          <h2 id="signup-heading">Sign Up Form</h2>
          {successMessage && (
            <div role="alert" aria-live="assertive" className="success-message">
              {successMessage}
            </div>
          )}
          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              name="email"
              id="email"
              aria-required="true"
              aria-describedby="email-description"
            />
            <ErrorMessage name="email" component="div" className="error" aria-live="polite" />
            <small id="email-description">Enter a valid email address.</small>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              id="password"
              aria-required="true"
              aria-describedby="password-strength"
              onKeyUp={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPasswordStrength(getPasswordStrength(e.target.value))
              }
            />
            <ErrorMessage name="password" component="div" className="error" aria-live="polite" />
            {values.password && (
              <div id="password-strength" className={`password-strength ${passwordStrength.toLowerCase()}`}>
                Password Strength: {passwordStrength}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              aria-required="true"
            />
            <ErrorMessage name="confirmPassword" component="div" className="error" aria-live="polite" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
