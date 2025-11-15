import React from 'react';
import './Profile.css';

const Profile = ({ user, isLoggedIn, onLogout }) => {
  // Условный рендеринг: показываем разные блока в зависимости от входа
  if (!isLoggedIn) {
    return (
      <div className="profile guest">
        <h3>Вход в систему</h3>
        <p>Пожалуйста, войдите или зарегистрируйтесь</p>
      </div>
    );
  }

  return (
    <div className="profile logged-in">
      <h3>Добро пожаловать, {user.username}!</h3>
      <p>Вы успешно вошли в систему</p>
      <button onClick={onLogout} className="logout-btn">
        Выйти
      </button>
    </div>
  );
};

export default Profile;
