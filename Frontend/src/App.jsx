import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import WorkUploadForm from './components/WorkUploadForm';
import SubCategoryForm from './components/SubCategoryForm';

function App() {

  return (
    <>
    <WorkUploadForm />
    <SubCategoryForm />
    </>
  );
};

export default App;