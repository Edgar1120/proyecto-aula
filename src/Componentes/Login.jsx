import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css";

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        toast.success('¡Bienvenido al Aula Virtual! Logueo exitoso.', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: true,
        });


        setTimeout(() => {
            navigate('/home');
        }, 2000);
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
                    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                    <MDBCard className='my-5 bg-glass'>
                        <MDBCardBody className='p-5'>
                            <h1 className="login-title">Login</h1>
                            <MDBRow>
                                <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' placeholder='First name' id='form1' type='text' />
                                </MDBCol>

                                <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' placeholder='Last name' id='form2' type='text' />
                                </MDBCol>
                            </MDBRow>

                            <MDBInput wrapperClass='mb-4' placeholder='Email' id='form3' type='email' />
                            <MDBInput wrapperClass='mb-4' placeholder='Password' id='form4' type='password' />

                            <div className='d-flex justify-content-center mb-4'>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Recordar contraseña' />
                            </div>

                            <button className='w-100 mb-4 btn btn-primary' onClick={handleLogin}>
                               <span>Login</span> 
                            </button>


                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

            <ToastContainer />
        </MDBContainer>
    );
}

export default Login;
