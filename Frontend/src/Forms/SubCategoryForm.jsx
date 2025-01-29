import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

const SubCategoryForm = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sub Category Form</h1>
      <Formik
        initialValues={{
          subCategories: [],
          imageArray: [],
          parentCategory: ''
        }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <Field name="category" type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            {/* Multiple image upload with preview */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Images</label>
                <input
                  type="file"
                  multiple
                  onChange={(event) => {
                    handleImageChange(event);
                    setFieldValue('imageArray', [...values.imageArray, ...Array.from(event.target.files)]);
                  }}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {images.map((image, index) => (
                    <div key={index} className="relative">
                      <img src={image} alt={`Preview ${index}`} className="w-full h-32 object-cover rounded-md" />
                      <button
                        type="button"
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                        onClick={() => removeImage(index)}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">parentCategory</label>
                <Field as="select" name="category" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                  <option value="" label="Select category" />
                  <option value="category1" label="Tech Mart" />
                  <option value="category2" label="Social Mart" />
                  <option value="category3" label="Design Mart" />
                  <option value="category4" label="Media Mart" />
                  <option value="category5" label="Innovation Mart" />
                </Field>
            </div>
            <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SubCategoryForm;