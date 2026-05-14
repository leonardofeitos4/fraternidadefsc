import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import logo from '../../../assets/img/logooBranca.png';
import './style.css';

export default function AdminLogin() {
  const { login } = useAuth();
  const navigate  = useNavigate();

  const [email,    setEmail]    = useState('');
  const [senha,    setSenha]    = useState('');
  const [erro,     setErro]     = useState('');
  const [loading,  setLoading]  = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setErro('');
    setLoading(true);
    try {
      await login(email, senha);
      navigate('/admin/dashboard');
    } catch {
      setErro('E-mail ou senha inválidos. Verifique e tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="al-page">
      <div className="al-card">
        <div className="al-header">
          <img src={logo} alt="Logo" className="al-logo" />
          <h1>Área Administrativa</h1>
          <p>Instituto Filhas de Santa Clara</p>
        </div>

        <form className="al-form" onSubmit={handleSubmit}>
          <div className="al-field">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="admin@fraternidade.com"
              required
              autoComplete="email"
            />
          </div>

          <div className="al-field">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="current-password"
            />
          </div>

          {erro && <p className="al-erro">{erro}</p>}

          <button className="al-btn" type="submit" disabled={loading}>
            {loading ? 'Entrando…' : 'Entrar'}
          </button>
        </form>

        <p className="al-back">
          <a href="/">← Voltar ao site</a>
        </p>
      </div>
    </div>
  );
}
