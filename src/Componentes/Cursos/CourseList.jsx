// CourseList.jsx
import React from 'react';
import CourseCard from './CourseCard';
import './curso.css';

const CourseList = () => {
  const courses = [
    {
      title: 'Estudios Sociales',
      image: 'https://i.ibb.co/MZGscZk/estudios-Sociales.webp',
    },
    {
      title: 'Matemáticas',
      image: 'https://i.ibb.co/V2DTYHM/matematicas.png',
    },
    {
      title: 'Español',
      image: 'https://i.ibb.co/FqX95QB/espanol.png',
    },
    {
      title: 'Ciencias Naturales',
      image: 'https://i.ibb.co/JnmQJmP/biologia.png',
    },
    {
      title: 'Inglés',
      image: 'https://i.ibb.co/QHxJ1zP/ingles.png',
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
