import React from 'react';
import { Link } from 'react-router-dom';
import { MdVerifiedUser } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';

import { Container, Form } from './styles';

const Login = () => (
  <Container>
    <div className="login-title">
      <h1>Login</h1>
      <MdVerifiedUser
        className="verified"
        size={60}
      />
    </div>
    <Form>
      <label>E-mail:</label>
      <input
        className="invisibleInput"
        type="email"
        name="email"
        placeholder="e-mail"
        required
      />

      <label>Senha:</label>
      <input
        className="invisibleInput"
        type="password"
        name="password"
        placeholder="senha"
        required
      />

      <button className="button button--login">Entrar</button>

      <div className="login-helpers">
        <Link to="/register">Cadastre-se</Link>
        <Link to="/forgot">Esqueceu sua senha</Link>
      </div>

      <div className="social-media">
        <a
          href="https://www.facebook.com/profile.php?id=100009303304202"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaFacebookF size={30} />
        </a>

        <a
          href="https://www.instagram.com/washington_campos9/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaInstagram size={35} />
        </a>

        <a
          href="https://github.com/washington299"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </Form>
  </Container>
);

export default Login;
