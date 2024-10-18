import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import MUIDataTable from "mui-datatables";
import Swal from 'sweetalert2';
import "./Matricula.css"
export function Matriculas() {

    const [matriculas, setMatriculas] = useState([
        { cedula: '123456789', nombre: 'Juan', apellido: 'Pérez', materia: 'Sociales', estado: 'Matriculada' },
        { cedula: '123456789', nombre: 'Juan', apellido: 'Pérez', materia: 'Matemáticas', estado: 'Matriculada' },
        { cedula: '123456789', nombre: 'Juan', apellido: 'Pérez', materia: 'Español', estado: 'Pendiente' },
        { cedula: '123456789', nombre: 'Juan', apellido: 'Pérez', materia: 'Ciencias', estado: 'Pendiente' },
        { cedula: '123456789', nombre: 'Juan', apellido: 'Pérez', materia: 'Ingles', estado: 'Matriculada' }
    ]);

    const [modalInsertar, setModalInsertar] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false); 
    const [currentMatriculaIndex, setCurrentMatriculaIndex] = useState(null); 

    const [form, setForm] = useState({
        cedula: '',
        nombre: '',
        apellido: '',
        materia: 'Sociales'
    });

    const toggleModalInsertar = () => {
        setModalInsertar(!modalInsertar);
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleAdd = () => {
        setMatriculas([...matriculas, { ...form, estado: 'Matriculada' }]);
        Swal.fire('Agregado', 'Matrícula agregada exitosamente', 'success');
        toggleModalInsertar();
        resetForm();
    };

    const handleEdit = () => {
        const updatedMatriculas = [...matriculas];
        updatedMatriculas[currentMatriculaIndex] = form;
        setMatriculas(updatedMatriculas);
        Swal.fire('Actualizado', 'Matrícula actualizada exitosamente', 'success');
        toggleModalInsertar();
        resetForm();
    };

    const handleDelete = (index) => {
        const updatedMatriculas = matriculas.filter((_, i) => i !== index);
        setMatriculas(updatedMatriculas);
        Swal.fire('Eliminado', 'Matrícula eliminada exitosamente', 'success');
    };

    const resetForm = () => {
        setForm({ cedula: '', nombre: '', apellido: '', materia: 'Sociales' });
        setIsEditMode(false);
        setCurrentMatriculaIndex(null);
    };

    const openEditForm = (index) => {
        const matricula = matriculas[index];
        setForm(matricula);
        setCurrentMatriculaIndex(index);
        setIsEditMode(true);
        toggleModalInsertar();
    };

    const materias = ['Sociales', 'Matemáticas', 'Español', 'Ciencias', 'Ingles'];

    const columns = [
        { name: "cedula", label: "Cédula" },
        { name: "nombre", label: "Nombre" },
        { name: "apellido", label: "Apellido" },
        { name: "materia", label: "Materia" },
        { name: "estado", label: "Estado" },
        {
            name: "acciones",
            label: "Acciones",
            options: {
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <>
                            <button className="btn-modal" onClick={() => openEditForm(dataIndex)}>
                               <span><FontAwesomeIcon icon={faEdit} /></span> 
                            </button>
                            <button className="btn-modal" onClick={() => handleDelete(dataIndex)}>
                               <span><FontAwesomeIcon icon={faTrashAlt} /></span> 
                            </button>
                        </>
                    );
                }
            }
        }
    ];

    return (
        <>
            <div className="Matriculas">
                <br />
                <div className="center-content" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button className="btn" onClick={() => { setIsEditMode(false); toggleModalInsertar(); resetForm(); }}>
                       <span><FontAwesomeIcon icon={faPlus} /></span> 
                    </button>
                </div>
                <br /><br />
                <div className="table-container">
                    <MUIDataTable
                        title={"Matrículas"}
                        data={matriculas}
                        columns={columns}
                        options={{
                            selectableRows: false,
                            rowsPerPage: 5,
                            responsive: "standard"
                        }}
                    />
                </div>

                <Modal isOpen={modalInsertar}>
                    <ModalHeader style={{ display: 'block' }}>
                        <span style={{ float: 'right', cursor: 'pointer' }} onClick={toggleModalInsertar}>x</span>
                        <h1>{isEditMode ? "Editar Matrícula" : "Agregar Matrícula"}</h1>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <input className="custom-input" placeholder='Cédula' type="text" name="cedula" id="cedula" onChange={handleChange} value={form.cedula} />
                            <br /><br />
                            <input className="custom-input" placeholder='Nombre' type="text" name="nombre" id="nombre" onChange={handleChange} value={form.nombre} />
                            <br /><br />
                            <input className="custom-input" placeholder='Apellido' type="text" name="apellido" id="apellido" onChange={handleChange} value={form.apellido} />
                            <br /><br />
                            <select className="custom-input" name="materia" id="materia" onChange={handleChange} value={form.materia}>
                                {materias.map(materia => (
                                    <option key={materia} value={materia}>{materia}</option>
                                ))}
                            </select>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn-modal" onClick={isEditMode ? handleEdit : handleAdd}>
                        <span>  {isEditMode ? "Actualizar" : "Insertar"}</span> 
                        </button>
                      <button className="btn-modal" onClick={toggleModalInsertar}>
                      <span>Cancelar</span> 
                        </button>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    );
}

export default Matriculas;











