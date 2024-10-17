import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './Componentes/Login';
import ListaCurso from './Componentes/Cursos/CourseList';
import Home from './Componentes/Home/Home'; 
import Sidebar from './Componentes/Sidebar/Sidebar';

function App() {
  const location = useLocation();

  return (
    <div>
      {/* Renderizar Sidebar solo si no estás en la ruta de Login */}
      {location.pathname !== '/' && <Sidebar />}
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/curso" element={<ListaCurso />} />
      </Routes>  
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
