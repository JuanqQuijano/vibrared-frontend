import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import UsersPage from './pages/UsersPage';
import PostsPage from './pages/PostsPage';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          {/* Redirigir la ruta raíz a la página de publicaciones */}
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
