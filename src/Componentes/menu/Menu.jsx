import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import { Home, Assignment, ReportProblem, School, Forum } from '@mui/icons-material';
import { FaUserGraduate } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Importa Link
import './Menu.css'; // Importa tu archivo de estilos CSS

const Menu = () => {
  return (
    <Box className="menu-container">
      {/* Title or Logo */}
      <Box className="menu-header">
        <Typography variant="h5" component="h1" className="menu-title">
          Aula Virtual
        </Typography>
      </Box>

      {/* Menu List */}
      <List className="menu-list">
        {/* Dashboard */}
        <ListItem button className="menu-item" component={Link} to="/home">
          <ListItemIcon>
            <Home className="menu-icon" />
          </ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItem>

        {/* Courses */}
        <ListItem button className="menu-item" component={Link} to="/curso"> {/* Navega a /curso */}
          <ListItemIcon>
            <School className="menu-icon" />
          </ListItemIcon>
          <ListItemText primary="Mis Cursos" />
        </ListItem>

        {/* Assignments */}
        <ListItem button className="menu-item">
          <ListItemIcon>
            <Assignment className="menu-icon" />
          </ListItemIcon>
          <ListItemText primary="Tareas" />
        </ListItem>

        {/* Community */}
        <ListItem button className="menu-item">
          <ListItemIcon>
            <Forum className="menu-icon" />
          </ListItemIcon>
          <ListItemText primary="Foros" />
        </ListItem>

        <Divider className="menu-divider" />

        {/* User Profile */}
        <ListItem button className="menu-item">
          <ListItemIcon>
            <FaUserGraduate className="menu-icon" />
          </ListItemIcon>
          <ListItemText primary="Mi Perfil" />
        </ListItem>

        {/* Settings */}
        <ListItem button className="menu-item">
          <ListItemIcon>
            <AiFillSetting className="menu-icon" />
          </ListItemIcon>
          <ListItemText primary="Configuración" />
        </ListItem>
      </List>

      {/* Footer */}
      <Box className="menu-footer">
        <Typography variant="caption" component="p">
          &copy; 2024 Aula Virtual
        </Typography>
      </Box>
    </Box>
  );
};

export default Menu;
