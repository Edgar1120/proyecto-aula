import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import MUIDataTable from "mui-datatables";
import Swal from 'sweetalert2';
import "./Usuario.css"; // Importar el CSS para usuarios

export function Usuarios() {

    const [usuarios, setUsuarios] = useState([
        { nombre: 'Juan', apellido: 'Pérez', cedula: '123456789', contrasena: 'password123', rol: 'Estudiante' },
        { nombre: 'Ana', apellido: 'Gómez', cedula: '987654321', contrasena: 'password456', rol: 'Profesor' }
    ]);

    const [modalInsertar, setModalInsertar] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false); 
    const [currentUsuarioIndex, setCurrentUsuarioIndex] = useState(null); 

    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        cedula: '',
        contrasena: '',
        rol: 'Estudiante'
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
        setUsuarios([...usuarios, { ...form }]);
        Swal.fire('Agregado', 'Usuario agregado exitosamente', 'success');
        toggleModalInsertar();
        resetForm();
    };

    const handleEdit = () => {
        const updatedUsuarios = [...usuarios];
        updatedUsuarios[currentUsuarioIndex] = form;
        setUsuarios(updatedUsuarios);
        Swal.fire('Actualizado', 'Usuario actualizado exitosamente', 'success');
        toggleModalInsertar();
        resetForm();
    };

    const handleDelete = (index) => {
        const updatedUsuarios = usuarios.filter((_, i) => i !== index);
        setUsuarios(updatedUsuarios);
        Swal.fire('Eliminado', 'Usuario eliminado exitosamente', 'success');
    };

    const resetForm = () => {
        setForm({ nombre: '', apellido: '', cedula: '', contrasena: '', rol: 'Estudiante' });
        setIsEditMode(false);
        setCurrentUsuarioIndex(null);
    };

    const openEditForm = (index) => {
        const usuario = usuarios[index];
        setForm(usuario);
        setCurrentUsuarioIndex(index);
        setIsEditMode(true);
        toggleModalInsertar();
    };

    const roles = ['Estudiante', 'Profesor', 'Administrador'];

    const columns = [
        { name: "nombre", label: "Nombre" },
        { name: "apellido", label: "Apellido" },
        { name: "cedula", label: "Cédula" },
        { name: "contrasena", label: "Contraseña" },
        { name: "rol", label: "Rol" },
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
            <div className="Usuarios">
                <br />
                
                <div className="center-content" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button className="btn" onClick={() => { setIsEditMode(false); toggleModalInsertar(); resetForm(); }}>
                       <span><FontAwesomeIcon icon={faPlus} /></span> 
                    </button>
                    
                </div>
                <br /><br />
              
                <div className="table-container">
                    <MUIDataTable
                        title={"Usuarios"}
                        data={usuarios}
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
                        <h1>{isEditMode ? "Editar Usuario" : "Agregar Usuario"}</h1>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <input className="custom-input" placeholder='Nombre' type="text" name="nombre" onChange={handleChange} value={form.nombre} />
                            <br /><br />
                            <input className="custom-input" placeholder='Apellido' type="text" name="apellido" onChange={handleChange} value={form.apellido} />
                            <br /><br />
                            <input className="custom-input" placeholder='Cédula' type="text" name="cedula" onChange={handleChange} value={form.cedula} />
                            <br /><br />
                            <input className="custom-input" placeholder='Contraseña' type="password" name="contrasena" onChange={handleChange} value={form.contrasena} />
                            <br /><br />
                            <select className="custom-input" name="rol" onChange={handleChange} value={form.rol}>
                                {roles.map(rol => (
                                    <option key={rol} value={rol}>{rol}</option>
                                ))}
                            </select>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn-modal" onClick={isEditMode ? handleEdit : handleAdd}>
                            <span>{isEditMode ? "Actualizar" : "Insertar"}</span> 
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

export default Usuarios;
