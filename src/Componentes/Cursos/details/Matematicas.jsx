import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './materias.css';

const Matematicas = () => {
  const courseWeeks = [
    { week: 1, title: 'Semana 1: Números Enteros y Operaciones', content: 'Operaciones básicas con números enteros: suma, resta, multiplicación y división. Propiedades y reglas de signos.' },
    { week: 2, title: 'Semana 2: Fracciones', content: 'Conversión entre fracciones y decimales. Operaciones con fracciones y decimales: suma, resta, multiplicación y división.' },
    { week: 3, title: 'Semana 3: Proporciones', content: 'Cálculo de proporciones y razones. Aplicaciones en problemas cotidianos como escalas y mapas.' },
    { week: 4, title: 'Semana 4: Álgebra Básica', content: 'Introducción a la álgebra: expresiones algebraicas, términos semejantes y simplificación de expresiones.' },
    { week: 5, title: 'Semana 5: Ecuaciones Lineales', content: 'Resolución de ecuaciones lineales de primer grado. Despeje de variables y soluciones paso a paso.' },
    { week: 6, title: 'Semana 6: Sistemas de Ecuaciones', content: 'Resolución de sistemas de ecuaciones lineales por los métodos de sustitución, igualación y reducción.' },
    { week: 7, title: 'Semana 7: Funciones Lineales', content: 'Introducción a las funciones lineales. Interpretación de la pendiente y el intercepto. Representación gráfica.' },
    { week: 8, title: 'Semana 8: Geometría: Ángulos y Triángulos', content: 'Clasificación de ángulos y triángulos. Teorema de Pitágoras y aplicaciones en problemas geométricos.' },
    { week: 9, title: 'Semana 9: Circunferencia y Círculo', content: 'Propiedades de la circunferencia y el círculo. Cálculo de perímetro y área de un círculo.' },
    { week: 10, title: 'Semana 10: Probabilidad Básica', content: 'Introducción a la probabilidad. Eventos, espacio muestral y probabilidad de eventos simples.' },
    { week: 11, title: 'Semana 11: Estadística Descriptiva', content: 'Cálculo de medidas de tendencia central: media, mediana y moda. Representación de datos con gráficas.' },
    { week: 12, title: 'Semana 12: Proyecto Final', content: 'Aplicación de los temas aprendidos en la resolución de problemas matemáticos complejos. Proyecto final de clase.' },
  ];

  return (
    <Box className="accordion-container">
      <Typography variant="h4" component="h1" gutterBottom className="course-title">
        Matemáticas - Tercer Grado de Secundaria
      </Typography>

      {courseWeeks.map((week, index) => (
        <Accordion key={index} className="accordion-summary">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`} 
            id={`panel${index}-header`} 
          >
            <Typography>{week.title}</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <Typography>{week.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Matematicas;
