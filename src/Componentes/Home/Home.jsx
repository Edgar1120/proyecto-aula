// Home.jsx
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import './Home.css'; 


const Home = () => {
  const courses = [
    {
      title: 'Estudios Sociales',
      description: 'Explora la historia, geografía y cultura de diferentes países.',
      image: 'https://i.ibb.co/MZGscZk/estudios-Sociales.webp',
    },
    {
      title: 'Matemáticas',
      description: 'Aprende matemáticas básicas y avanzadas con ejercicios prácticos.',
      image: 'https://i.ibb.co/V2DTYHM/matematicas.png',
    },
    {
      title: 'Español',
      description: 'Mejora tus habilidades de lectura y escritura en español.',
      image: 'https://i.ibb.co/FqX95QB/espanol.png',
    },
  ];

  return (
    <Box className="home-container">
      {/* Encabezado */}
      <Typography variant="h2" component="h1" className="home-title">
        Bienvenido a Aula Virtual
      </Typography>
      <Typography variant="h6" component="p" className="home-description">
        Tu plataforma para aprender y crecer. Explora nuestros cursos y mejora tus habilidades.
      </Typography>

      {/* Sección de Cursos Destacados */}
      <Typography variant="h5" component="h2" className="featured-courses-title">
        Cursos Destacados
      </Typography>

      <Grid container spacing={3}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="course-card">
              <div
                className="course-image"
                style={{
                  backgroundImage: `url(${course.image})`,
                  height: '140px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <CardContent>
                <Typography variant="h6" component="h3">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
                <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                  Ver Curso
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
