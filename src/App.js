
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Componentes/Login';
import Menu from './Componentes/menu/Menu.jsx';
import ListaCurso from'./Componentes/Cursos/listaCuros.jsx';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/curso" element={<ListaCurso/>} />
      </Routes>
    </Router>
  );
}

export default App;
