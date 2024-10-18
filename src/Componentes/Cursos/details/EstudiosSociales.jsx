import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './materias.css';

const EstudiosSociales = () => {
  const courseWeeks = [
    { week: 1, title: 'Semana 1: Historia Precolombina de Costa Rica', content: 'Introducción a las culturas precolombinas en Costa Rica. Estructura social, costumbres y economía de los pueblos indígenas.' },
    { week: 2, title: 'Semana 2: Conquista y Colonización de Costa Rica', content: 'El proceso de conquista española. Consecuencias sociales y económicas para los pueblos indígenas.' },
    { week: 3, title: 'Semana 3: Independencia de Centroamérica', content: 'Causas y consecuencias de la independencia de Centroamérica. Impacto de la independencia en Costa Rica.' },
    { week: 4, title: 'Semana 4: Formación del Estado Costarricense', content: 'El proceso de formación del Estado costarricense. Las primeras constituciones y las luchas internas.' },
    { week: 5, title: 'Semana 5: Geografía Física de Costa Rica', content: 'Características geográficas de Costa Rica: montañas, ríos, clima y su influencia en la vida diaria y la economía.' },
    { week: 6, title: 'Semana 6: Población y Migración en Costa Rica', content: 'Distribución de la población y movimientos migratorios en Costa Rica. Efectos de la migración en la sociedad.' },
    { week: 7, title: 'Semana 7: Economía Agrícola y Desarrollo', content: 'La evolución de la economía costarricense. La importancia de los cultivos como el café y el banano en la economía del país.' },
    { week: 8, title: 'Semana 8: Costa Rica en el Siglo XX: Guerra Civil de 1948', content: 'Análisis de los eventos que llevaron a la Guerra Civil de 1948 y sus consecuencias políticas y sociales.' },
    { week: 9, title: 'Semana 9: Sistema Político y Democracia en Costa Rica', content: 'El sistema político costarricense. La importancia de la democracia y la abolición del ejército.' },
    { week: 10, title: 'Semana 10: Geopolítica y Relaciones Internacionales', content: 'Las relaciones internacionales de Costa Rica en el contexto centroamericano y mundial. Rol en la ONU y otras organizaciones internacionales.' },
    { week: 11, title: 'Semana 11: Medio Ambiente y Desarrollo Sostenible', content: 'Costa Rica como líder en políticas ambientales. Estrategias para el desarrollo sostenible y la conservación de la biodiversidad.' },
    { week: 12, title: 'Semana 12: Proyecto Final: Historia y Cultura Costarricense', content: 'Elaboración de un proyecto final sobre algún aspecto histórico o cultural de Costa Rica. Integración de los temas aprendidos.' },
  ];

  return (
    <Box className="accordion-container">
      <Typography variant="h4" component="h1" gutterBottom className="course-title">
        Estudios Sociales - Tercer Grado de Secundaria
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

export default EstudiosSociales;
