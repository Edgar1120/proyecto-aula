// ListaCurso.jsx
import React from 'react';
import CourseList from './CourseList'; // Asegúrate de que la ruta sea correcta

const ListaCurso = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Mis Cursos</h2>
      <CourseList />
    </div>
  );
};

export default ListaCurso;
