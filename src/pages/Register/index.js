import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import api from '../../services/api';

import { Container, Form } from './styles';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/register', {
      name,
      email,
      password,
      confirmedPassword,
      userType,
    });

    if (response.data.error) {
      setErrorMessage(response.data.error);
      return;
    }

    setErrorMessage('');
    setSuccessMessage(response.data.success);
  }

  return (
    <Container>
      <div className="register-title">
        <h1>Cadastre-se</h1>
        <FaUserPlus
          className="icon-user-add"
          size={60}
        />
      </div>

      {errorMessage && (
        <div className="error-message">{errorMessage}</div>
      )}

      {successMessage && (
        <div className="success-message">
          {successMessage}
          <Link style={{ marginLeft: 10 }} to="/login">Login</Link>
        </div>
      )}

      <Form onSubmit={handleSubmit} method="POST">
        <label>Nome:</label>
        <input
          className="invisibleInput"
          type="text"
          name="name"
          placeholder="seu nome completo"
          required
          value={name}
          onChange={(e) => { setName(e.target.value); }}
        />

        <label>E-mail:</label>
        <input
          className="invisibleInput"
          type="email"
          name="email"
          placeholder="seu melhor e-mail"
          required
          value={email}
          onChange={(e) => { setEmail(e.target.value); }}
        />

        <label>Senha:</label>
        <input
          className="invisibleInput"
          type="password"
          name="password"
          placeholder="uma senha segura"
          required
          value={password}
          onChange={(e) => { setPassword(e.target.value); }}
        />

        <label>Confirmar senha:</label>
        <input
          className="invisibleInput"
          type="password"
          name="confirmedPassword"
          placeholder="confirmar senha"
          required
          value={confirmedPassword}
          onChange={(e) => { setConfirmedPassword(e.target.value); }}
        />

        <label>Tipo de usuário:</label>
        <select
          name="userType"
          required
          value={userType}
          onChange={(e) => { setUserType(e.target.value); }}
        >
          <option />
          <option value="client">Cliente</option>
          <option value="photographer">Fotógrafo</option>
        </select>

        <button className="button button--add-user">Cadastrar</button>
      </Form>
    </Container>
  );
};

export default Register;
