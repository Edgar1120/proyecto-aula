import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './materias.css';

const Espanol = () => {
    const courseWeeks = [
        { week: 1, title: 'Semana 1: Comunicación y Lenguaje', content: 'Introducción al concepto de comunicación. Funciones del lenguaje y la importancia de la lengua como vehículo cultural.' },
        { week: 2, title: 'Semana 2: Narrativa Literaria', content: 'Estudio de los géneros narrativos. Diferencias entre novela, cuento y fábula. Elementos de la narración.' },
        { week: 3, title: 'Semana 3: Gramática: Clases de Palabras', content: 'Clasificación de palabras: sustantivos, adjetivos, verbos, adverbios, pronombres, conjunciones y preposiciones.' },
        { week: 4, title: 'Semana 4: Análisis de Textos Literarios', content: 'Lectura y análisis de textos narrativos. Cómo identificar el tema, la trama, los personajes y el narrador en un cuento o novela.' },
        { week: 5, title: 'Semana 5: La Poesía y sus Características', content: 'Introducción al género poético. Análisis de recursos estilísticos: metáfora, símil, hipérbole, aliteración.' },
        { week: 6, title: 'Semana 6: Reglas de Ortografía y Acentuación', content: 'Normas básicas de acentuación en español. Palabras agudas, graves y esdrújulas. Uso correcto de tildes.' },
        { week: 7, title: 'Semana 7: Redacción de Ensayos', content: 'Cómo estructurar un ensayo. Diferencia entre ensayo argumentativo, expositivo y descriptivo. Estrategias de redacción.' },
        { week: 8, title: 'Semana 8: Literatura Costarricense', content: 'Estudio de autores y obras de la literatura costarricense. Contexto histórico y social de la producción literaria en Costa Rica.' },
        { week: 9, title: 'Semana 9: Análisis de Poemas', content: 'Cómo analizar un poema. Identificación de métrica, ritmo y recursos literarios en la poesía clásica y contemporánea.' },
        { week: 10, title: 'Semana 10: Texto Argumentativo', content: 'Características del texto argumentativo. Cómo construir una tesis y utilizar argumentos sólidos en un ensayo o debate.' },
        { week: 11, title: 'Semana 11: Reglas de Concordancia', content: 'Concordancia entre sujeto y verbo. Concordancia de género y número en oraciones complejas.' },
        { week: 12, title: 'Semana 12: Proyecto Final de Escritura Creativa', content: 'Redacción de un texto narrativo o poético como proyecto final. Uso de todos los recursos aprendidos a lo largo del curso.' },
    ];

    return (
        <Box className="accordion-container">
            <Typography variant="h4" component="h1" gutterBottom className="course-title">
                Español - Tercer Grado de Secundaria
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

export default Espanol;
