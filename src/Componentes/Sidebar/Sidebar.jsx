import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useUserContext } from '../UserContext';
import './Sidebar.css';

function Sidebar() {
  const { userRole } = useUserContext();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
           
            <li className='nav-text'>
              <Link to='/home'>
                <AiIcons.AiFillHome />
                <span>Inicio</span>
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/curso'>
                <FaIcons.FaBook />
                <span>Cursos</span>
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/matricula'>
                <FaIcons.FaEnvelopeOpenText />
                <span>Matrículas</span>
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/'>
              <AiIcons.AiOutlineLogout />
                <span>Cerrar sesion</span>
              </Link>
            </li>

            {userRole === 'Administrador' && (
              <>
                <li className='nav-text'>
                  <Link to='/User'>
                    <FaIcons.FaUser />
                    <span>Usuarios</span>
                  </Link>
                </li>
                <li className='nav-text'>
                  <Link to='Reportes'>
                    <AiIcons.AiOutlineBarChart />
                    <span>Reportes</span>
                  </Link>
                </li>
              </>
            )}
            {userRole === 'Profesor' && (
              <>
                <li className='nav-text'>
                  <Link to='/Asistencia'>
                    <FaIcons.FaClipboardList />
                    <span>Asistencia</span>
                  </Link>
                </li>
                <li className='nav-text'>
                  <Link to='/Calificaciones'>
                    <FaIcons.FaGraduationCap />
                    <span>Calificaciones</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
