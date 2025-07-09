import axios from 'axios';

// --- IMPORTANTE ---
// Reemplaza '<TU_IP_PUBLICA_AZURE>' con la IP pública de tu máquina virtual de Azure.
const API_BASE_URL = 'http://<TU_IP_PUBLICA_AZURE>:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Puedes agregar interceptores aquí si en el futuro necesitas manejar
// tokens de autenticación, errores globales, etc.

export default apiClient;
