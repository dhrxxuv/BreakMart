import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

const WorkUploadForm = () => {
  const [images, setImages] = useState([]);
  const [videoPreview, setVideoPreview] = useState(null);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Work Upload Form</h1>
          <Formik
            initialValues={{
              name: '',
              description: '',
              category: '',
              imageArray: [],
              addVideo: false,
              video: '',
              isFeatured: false,
              youtubeEmbedLinks: [''],
              subCategories: [],
              threeD: '',
              logo: ''
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
          {({ values, setFieldValue }) => (
            <Form className="space-y-4">
              {/* Name and description fields */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <Field name="name" type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <Field name="description" type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <Field as="select" name="category" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                  <option value="" label="Select category" />
                  <option value="category1" label="Tech Mart" />
                  <option value="category2" label="Social Mart" />
                  <option value="category3" label="Design Mart" />
                  <option value="category4" label="Media Mart" />
                  <option value="category5" label="Innovation Mart" />
                </Field>
              </div>
              {/* Subcategory selection with uniform positioning */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Sub Categories</label>
                <FieldArray name="subCategories">
                  {({ push, remove }) => (
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {values.subCategories.map((subCategory, index) => (
                          <div key={index} className="relative">
                            <button
                              type="button"
                              className="px-2 py-1 bg-blue-500 text-white rounded-full flex items-center space-x-1"
                            >
                              <span>{subCategory}</span>
                              <span
                                className="cursor-pointer text-white ml-1"
                                onClick={() => remove(index)}
                              >
                                &times;
                              </span>
                            </button>
                          </div>
                        ))}
                      </div>
                      <select
                        onChange={(e) => {
                          if (e.target.value) {
                            push(e.target.value);
                            e.target.value = '';
                          }
                        }}
                        className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      >
                        <option value="" label="Select sub-category" />
                        <option value="3D" label="3D" />
                        <option value="Logo" label="Logo" />
                        <option value="Animation" label="Animation" />
                      </select>
                    </div>
                  )}
                </FieldArray>
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

              {/* Video upload with preview */}
              <div className="flex items-center">
                <Field name="addVideo" type="checkbox" className="mr-2" />
                <label className="block text-sm font-medium text-gray-700">Add Video</label>
              </div>
              {values.addVideo && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Video</label>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(event) => {
                      handleVideoChange(event);
                      setFieldValue('video', event.target.files[0]);
                    }}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  {videoPreview && (
                    <div className="mt-2">
                      <video controls className="w-full h-64 rounded-md">
                        <source src={videoPreview} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700">YouTube Embed Links</label>
                <FieldArray name="youtubeEmbedLinks">
                  {({ push, remove }) => (
                    <div>
                      {values.youtubeEmbedLinks.map((_, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Field name={`youtubeEmbedLinks.${index}`} type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                          <button type="button" onClick={() => remove(index)} className="text-red-500">Remove</button>
                        </div>
                      ))}
                      <button type="button" onClick={() => push('')} className="mt-2 text-blue-500">Add Link</button>
                    </div>
                  )}
                </FieldArray>
              </div>
              <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default WorkUploadForm;