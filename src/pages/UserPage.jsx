import React, { useState, useEffect } from 'react';
import apiClient from '../api/axiosConfig';
import './PageStyles.css'; // Archivo de estilos compartidos

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Hacemos la llamada GET al endpoint /api/users
        const response = await apiClient.get('/users');
        setUsers(response.data);
      } catch (err) {
        setError('No se pudieron cargar los usuarios. Asegúrate de que el backend esté funcionando y la IP sea correcta.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // El array vacío asegura que se ejecute solo una vez

  if (loading) return <div className="container"><p>Cargando usuarios...</p></div>;
  if (error) return <div className="container error"><p>{error}</p></div>;

  return (
    <div className="container">
      <h1>Usuarios de VibraRed</h1>
      <div className="list-container">
        {users.map((user) => (
          <div key={user._id} className="card">
            <img src={user.profile_picture_url || 'https://via.placeholder.com/50'} alt={user.username} className="avatar" />
            <div className="card-content">
              <h2>{user.username}</h2>
              <p>{user.email}</p>
              <p className="bio">{user.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
