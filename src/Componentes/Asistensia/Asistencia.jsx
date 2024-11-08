import React, { useState } from 'react';
import './Asistencia.css';

const Asistencia = () => {
  // Datos de los estudiantes (quemados)
  const estudiantes = [
    { id: 1, nombre: 'Juan Pérez', cedula: '123456789' },
    { id: 2, nombre: 'Ana González', cedula: '987654321' },
    { id: 3, nombre: 'Carlos Rodríguez', cedula: '456789123' },
    { id: 4, nombre: 'Lucía Martínez', cedula: '321654987' },
  ];

  // Estado para almacenar la asistencia de los estudiantes
  const [asistencia, setAsistencia] = useState(
    estudiantes.reduce((acc, estudiante) => {
      acc[estudiante.id] = 'Ausente'; // Inicialmente todos los estudiantes están marcados como ausentes
      return acc;
    }, {})
  );

  // Función para manejar los cambios en la asistencia
  const handleAsistenciaChange = (id, status) => {
    setAsistencia((prevState) => ({
      ...prevState,
      [id]: status,
    }));
  };

  return (
    <div className="asistencia-container">
      <h1>Registro de Asistencia</h1>
      <table className="asistencia-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cédula</th>
            <th>Asistencia</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((estudiante) => (
            <tr key={estudiante.id}>
              <td>{estudiante.nombre}</td>
              <td>{estudiante.cedula}</td>
              <td>
                <select
                  value={asistencia[estudiante.id]}
                  onChange={(e) => handleAsistenciaChange(estudiante.id, e.target.value)}
                >
                  <option value="Presente">Presente</option>
                  <option value="Tarde">Tarde</option>
                  <option value="Ausente">Ausente</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="save-btn">Guardar Asistencia</button>
    </div>
  );
};

export default Asistencia;
