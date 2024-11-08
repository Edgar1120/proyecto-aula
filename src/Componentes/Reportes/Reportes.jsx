import React, { useState } from 'react';
import './Reportes.css';

const Reportes = () => {
  // Datos de los reportes quemados (estáticos)
  const reportes = [
    { id: 1, titulo: 'Reporte de Asistencia - Octubre', fecha: '2024-10-30', descripcion: 'Este reporte contiene información detallada sobre la asistencia de los estudiantes durante el mes de octubre.' },
    { id: 2, titulo: 'Reporte de Calificaciones - Septiembre', fecha: '2024-09-28', descripcion: 'En este reporte se incluyen las calificaciones de los estudiantes correspondientes al mes de septiembre.' },
    { id: 3, titulo: 'Reporte de Matrículas - 2024', fecha: '2024-11-01', descripcion: 'Este reporte muestra la cantidad de matrículas realizadas durante el año 2024.' },
    { id: 4, titulo: 'Reporte de Actividades Académicas - 2024', fecha: '2024-08-15', descripcion: 'En este reporte se listan todas las actividades académicas realizadas en 2024.' },
  ];

  // Estado para controlar la visibilidad del modal
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  // Función para abrir el modal y mostrar el reporte seleccionado
  const openModal = (reporte) => {
    setSelectedReport(reporte);
    setModalVisible(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedReport(null);
  };

  return (
    <div className="reportes-container">
      <h1>Reportes</h1>
      <table className="reportes-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reportes.map((reporte) => (
            <tr key={reporte.id}>
              <td>{reporte.id}</td>
              <td>{reporte.titulo}</td>
              <td>{reporte.fecha}</td>
              <td>
                <button className="view-btn" onClick={() => openModal(reporte)}>Ver</button>
                <button className="download-btn">Descargar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal para mostrar el reporte seleccionado */}
      {modalVisible && selectedReport && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{selectedReport.titulo}</h2>
            <p><strong>Fecha:</strong> {selectedReport.fecha}</p>
            <p><strong>Descripción:</strong> {selectedReport.descripcion}</p>
            <button className="close-modal-btn" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reportes;
