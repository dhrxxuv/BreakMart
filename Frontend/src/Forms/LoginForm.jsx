import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = ({ isFlipped, setIsFlipped }) => {
  const style = {
    backfaceVisibility: 'hidden',
    transform: isFlipped
      ? 'translateZ(-100px) rotateY(0deg)'
      : 'translateZ(0) rotateY(0deg)',
    opacity: isFlipped ? 0 : 1,
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  // Form submission handler
  const handleSubmit = (values) => {
    console.log('Form Data:', values);
    //alert('Login successful!');
  };

  return (
    <div
      className="absolute w-full h-full flex flex-col justify-center items-center gap-5 p-16 rounded-lg shadow-xl bg-[#112240]/50 backdrop-blur-md text-white transition-all duration-700 ease-in-out border border-[#233554]"
      style={style}
    >
      <div className="text-2xl font-semibold">Login</div>

      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4 w-60">
            {/* Username Field */}
            <div>
              <Field
                name="username"
                placeholder="Username"
                className="w-full h-12 px-3 rounded-md bg-[#0a192f]/50 text-white border border-[#233554] shadow-md focus:scale-105 focus:shadow-inner transition-transform placeholder-gray-400 backdrop-blur-sm"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Password Field */}
            <div>
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="w-full h-12 px-3 rounded-md bg-[#0a192f]/50 text-white border border-[#233554] shadow-md focus:scale-105 focus:shadow-inner transition-transform placeholder-gray-400 backdrop-blur-sm"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-10 py-2 bg-[#0a192f]/50 text-white font-bold rounded-md shadow-md hover:scale-105 focus:shadow-inner transition-transform backdrop-blur-sm border border-[#233554]"
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>

      <span className="text-sm">
        Don't have an account?{' '}
        <button
          onClick={() => setIsFlipped(true)}
          className="text-cyan-300 hover:text-cyan-200 transition-colors"
        >
          Sign up
        </button>
      </span>
    </div>
  );
};

export default LoginForm;