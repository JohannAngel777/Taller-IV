const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

// Punto 4: endpoint de salud del API
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'El API está funcionando correctamente',
  });
});

// Punto 5: endpoint con la información de los integrantes
// TODO: cambiar estos datos de ejemplo por los reales del equipo
app.get('/api/info', (req, res) => {
  res.json({
    status: 'ok',
    message: 'El API está funcionando',
    integrantes: [
      {
        nombre: 'Nombre Apellido',
        edad: 20,
        carrera: 'Tu carrera',
        materiasAprobadas: 12,
      },
      {
        nombre: 'Nombre Apellido 2',
        edad: 21,
        carrera: 'Tu carrera',
        materiasAprobadas: 15,
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});
