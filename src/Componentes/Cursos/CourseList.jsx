// CourseList.jsx
import React from 'react';
import CourseCard from './CourseCard';
import './curso.css';

const CourseList = () => {
  const courses = [
    {
      title: 'Estudios Sociales',
      image: 'url_to_image_estudios_sociales', // Cambia esto por la URL de la imagen
    },
    {
      title: 'Matemáticas',
      image: 'url_to_image_matematicas', // Cambia esto por la URL de la imagen
    },
    {
      title: 'Español',
      image: 'url_to_image_espanol', // Cambia esto por la URL de la imagen
    },
    {
      title: 'Ciencias Naturales',
      image: 'url_to_image_ciencias_naturales', // Cambia esto por la URL de la imagen
    },
    {
      title: 'Inglés',
      image: 'url_to_image_ingles', // Cambia esto por la URL de la imagen
    },
  ];

  return (
    <div className="course-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {courses.map((course, index) => (
        <CourseCard key={index} title={course.title} image={course.image} />
      ))}
    </div>
  );
};

export default CourseList;
