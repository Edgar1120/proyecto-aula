import React, { useState } from 'react';
import './Calificaciones.css';

// Estudiantes "quemados"
const estudiantes = [
  { id: 1, nombre: 'Juan Pérez', cedula: '123456789' },
  { id: 2, nombre: 'Ana González', cedula: '987654321' },
  { id: 3, nombre: 'Carlos Rodríguez', cedula: '456789123' },
  { id: 4, nombre: 'Lucía Martínez', cedula: '321654987' },
];

// Materias disponibles
const materias = [
  'Estudios Sociales',
  'Matemáticas',
  'Español',
  'Ciencias',
  'Inglés',
];

const Calificaciones = () => {
  const [materiaSeleccionada, setMateriaSeleccionada] = useState('');
  const [calificaciones, setCalificaciones] = useState(
    estudiantes.reduce((acc, estudiante) => {
      acc[estudiante.id] = {
        'Estudios Sociales': '',
        'Matemáticas': '',
        'Español': '',
        'Ciencias': '',
        'Inglés': ''
      };
      return acc;
    }, {})
  );
  const [modalVisible, setModalVisible] = useState(false);

  const handleMateriaSelect = (materia) => {
    setMateriaSeleccionada(materia);
    setModalVisible(true);
  };

  const handleCalificacionChange = (id, materia, calificacion) => {
    setCalificaciones((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        [materia]: calificacion,
      },
    }));
  };

  const closeModal = () => setModalVisible(false);

  return (
    <div className="calificaciones-container">
      <h1>Asignar Calificaciones</h1>
      <div className="materias">
        {materias.map((materia) => (
          <button
            key={materia}
            className="materia-btn"
            onClick={() => handleMateriaSelect(materia)}
          >
            {materia}
          </button>
        ))}
      </div>

      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Calificaciones para {materiaSeleccionada}</h2>
            <table className="calificaciones-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Cédula</th>
                  <th>Calificación</th>
                </tr>
              </thead>
              <tbody>
                {estudiantes.map((estudiante) => (
                  <tr key={estudiante.id}>
                    <td>{estudiante.nombre}</td>
                    <td>{estudiante.cedula}</td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        max="10"
                        value={calificaciones[estudiante.id][materiaSeleccionada]}
                        onChange={(e) =>
                          handleCalificacionChange(
                            estudiante.id,
                            materiaSeleccionada,
                            e.target.value
                          )
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="guardar-btn" onClick={closeModal}>
              Guardar Calificaciones
            </button>
            <button className="close-modal-btn" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      <h2>Calificaciones Guardadas</h2>
      <table className="calificaciones-guardadas-table">
        <thead>
          <tr>
            <th>Cédula</th>
            <th>Nombre</th>
            {materias.map((materia) => (
              <th key={materia}>{materia}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((estudiante) => (
            <tr key={estudiante.id}>
              <td>{estudiante.cedula}</td>
              <td>{estudiante.nombre}</td>
              {materias.map((materia) => (
                <td key={materia}>
                  {calificaciones[estudiante.id][materia] || 'No asignada'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calificaciones;
