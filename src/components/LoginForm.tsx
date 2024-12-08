import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
        <Form role="form" aria-labelledby="login-heading">
          <h2 id="login-heading">Login Form</h2>
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
            <small id="email-description">Enter the email you registered with.</small>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              id="password"
              aria-required="true"
            />
            <ErrorMessage name="password" component="div" className="error" aria-live="polite" />
          </div>
          <div>
            <label>
              <Field type="checkbox" name="rememberMe" />
              Remember Me
            </label>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
