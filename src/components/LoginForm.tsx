import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/forms.css';
import '../index.css'
// Validation Schema
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm: React.FC = () => {
  const handleRememberMe = (email: string, remember: boolean) => {
    if (remember) {
      localStorage.setItem('rememberedEmail', email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }
  };

  return (
    <Formik
      initialValues={{
        email: localStorage.getItem('rememberedEmail') || '',
        password: '',
        rememberMe: !!localStorage.getItem('rememberedEmail'),
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert('Login Successful!');
          handleRememberMe(values.email, values.rememberMe);
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ isSubmitting }) => (
        <Form role="form" aria-labelledby="login-heading" className="login-form">
          <h2 id="login-heading" className="form-heading">Login Form</h2>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <Field
              type="email"
              name="email"
              id="email"
              aria-required="true"
              aria-describedby="email-description"
              className="form-input"
            />
            <ErrorMessage name="email" component="div" className="error" aria-live="polite" />
            <small id="email-description" className="form-text">Enter the email you registered with.</small>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <Field
              type="password"
              name="password"
              id="password"
              aria-required="true"
              className="form-input"
            />
            <ErrorMessage name="password" component="div" className="error" aria-live="polite" />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <Field type="checkbox" name="rememberMe" className="form-check-input" />
              Remember Me
            </label>
          </div>
          <button type="submit" disabled={isSubmitting} className="form-button">
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
