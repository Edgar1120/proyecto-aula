// Login.js
import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useUserContext } from './UserContext';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUserRole } = useUserContext();

    const handleLogin = (role) => {
        if (!email || !password) {
            toast.error('Por favor, completa todos los campos.');
            return;
        }

        setUserRole(role);
        toast.success(`¡Bienvenido ${role}! Logueo exitoso.`);
        
        setTimeout(() => navigate('/home'), 2000);
    };

    return (
        <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
            <MDBRow>
                <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
                    <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
                        Aprende Desde Casa <br />
                        <span style={{ color: 'hsl(218, 81%, 75%)' }}>Colegio virtual</span>
                    </h1>
                </MDBCol>
                <MDBCol md='6' className='position-relative'>
                    <MDBCard className='my-5 bg-glass'>
                        <MDBCardBody className='p-5'>
                            <h1 className="login-title">Login</h1>
                            <MDBInput wrapperClass='mb-4' placeholder='Correo' type='email'
                                      value={email} onChange={(e) => setEmail(e.target.value)} />
                            <MDBInput wrapperClass='mb-4' placeholder='Contraseña' type='password'
                                      value={password} onChange={(e) => setPassword(e.target.value)} />
                            <div className='d-flex flex-column'>
                                <button className='w-100 mb-4 btn btn-primary' onClick={() => handleLogin('Estudiante')}>
                                    <span>Estudiante</span> 
                                </button>
                                <div className="d-flex justify-content-around">
                                    <button className='w-45 btn btn-primary' onClick={() => handleLogin('Administrador')}>
                                        <span>Admin</span>
                                    </button>
                                    <button className='w-45 btn btn-primary' onClick={() => handleLogin('Profesor')}>
                                        <span>Profesor</span>
                                    </button>
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <ToastContainer />
        </MDBContainer>
    );
}

export default Login;
