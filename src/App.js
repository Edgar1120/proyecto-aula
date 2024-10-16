// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Componentes/Login';
import Layout from './Componentes/Layout/Layout'; 
import ListaCurso from './Componentes/Cursos/CourseList';
import Home from './Componentes/Home/Home'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} /> 
          <Route path="/curso" element={<ListaCurso />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
