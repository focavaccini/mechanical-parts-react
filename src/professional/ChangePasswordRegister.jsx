import React, { useState } from "react";
import api from "../services/api";

const ChangePasswordRegister = () => {

  const [user, setUser] = useState({
    password: "",
    newPassword: "",
    login: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    newPassword: "",
    login: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const saveUser = async (event) => {
    event.preventDefault();

    const newErrors = {
      password: "",
      newPassword: "",
      login: "",
    };

    if (!user.login) {
      newErrors.name = "O login é obrigatório.";
    }

    if (!user.newPassword) {
      newErrors.phone = "O senha nova é obrigatória.";
    }

    if (!user.password) {
      newErrors.password = "A senha é obrigatória.";
    }

    setErrors(newErrors);

    if (!newErrors.login && !newErrors.newPassword && !newErrors.password) {
      try {
        const response = await api.put('/user', user);
        // Aqui você pode tratar a resposta da API, como mostrar uma mensagem de sucesso
        console.log('Dados salvos com sucesso!', response.data);
      } catch (error) {
        // Aqui você pode tratar um erro caso ocorra
        console.error('Erro ao enviar dados:', error);
      }
    }
  };

  return (
    <div className="card add-professional">
      <h5 className="card-header">Alterar Senha</h5>
      <div className="card-body">
        <form id="add-form" onSubmit={saveUser}>
          <div className="form-group">
            <label htmlFor="name">Senha atual</label>
            <input
              type="text"
              value={user.password}
              onChange={handleInputChange}
              id="password"
              name="password"
              required
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Digite a senha"
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Nova senha</label>
            <input
              type="text"
              value={user.newPassword}
              onChange={handleInputChange}
              id="newPassword"
              name="newPassword"
              required
              className={`form-control ${errors.newPassword ? "is-invalid" : ""}`}
              placeholder="Digite a senha nova"
            />
            {errors.newPassword && <div className="invalid-feedback">{errors.newPassword}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="login">login</label>
            <input
              type="text"
              value={user.login}
              onChange={handleInputChange}
              id="login"
              name="login"
              required
              className={`form-control ${errors.login ? "is-invalid" : ""}`}
              placeholder="Digite o login"
            />
            {errors.login && <div className="invalid-feedback">{errors.login}</div>}
          </div>
          <button type="submit" className="btn btn-primary btn-add-professional">
            Enviar
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-add-professional"
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>

  );
};

export default ChangePasswordRegister;