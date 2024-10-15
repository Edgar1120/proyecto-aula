
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Componentes/Login';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
