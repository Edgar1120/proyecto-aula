// curso.jsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const CourseCard = ({ title, image }) => {
  return (
    <Card className="course-card" style={{ margin: '10px', width: '200px' }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
