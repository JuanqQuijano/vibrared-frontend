import React, { useState, useEffect } from 'react';
import apiClient from '../api/axiosConfig';
import './PageStyles.css'; // Reutilizamos los estilos

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Hacemos la llamada GET al endpoint /api/posts
        const response = await apiClient.get('/posts');
        setPosts(response.data);
      } catch (err) {
        setError('No se pudieron cargar las publicaciones. Asegúrate de que el backend esté funcionando y la IP sea correcta.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className="container"><p>Cargando publicaciones...</p></div>;
  if (error) return <div className="container error"><p>{error}</p></div>;

  return (
    <div className="container">
      <h1>Últimas Publicaciones</h1>
      <div className="list-container">
        {posts.map((post) => (
          <div key={post._id} className="card post-card">
            <div className="card-content">
              <p>{post.text_content}</p>
              {post.media_url && <img src={post.media_url} alt="Contenido del post" className="post-image" />}
              <div className="post-meta">
                <span>Likes: {post.likes_count}</span>
                <span>Comentarios: {post.comments_count}</span>
                {/* Asumiendo que el backend popula user_id */}
                {post.user_id && <span className="author">Por: {post.user_id.username}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
