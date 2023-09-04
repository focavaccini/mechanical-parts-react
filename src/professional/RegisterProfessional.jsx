import React, { useState } from "react";
import api from "../services/api";

const RegisterProfessional = () => {

  const resetForm = ()  => {
    reset()
  };

  const [professional, setProfessional, reset] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfessional((prevProfessional) => ({
      ...prevProfessional,
      [name]: value,
    }));
  };

  const saveProfessional = async (event) => {
    event.preventDefault();

    const newErrors = {
      name: "",
      phone: "",
      email: "",
    };

    if (!professional.name) {
      newErrors.name = "O nome é obrigatório.";
    }

    if (!professional.phone) {
      newErrors.phone = "O telefone é obrigatório.";
    }

    if (!professional.email) {
      newErrors.email = "O email é obrigatório.";
    }

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.phone && !newErrors.email) {
      try {
        const response = await api.post('/professional', professional);
        // Aqui você pode tratar a resposta da API, como mostrar uma mensagem de sucesso
        console.log('Dados do profissional enviados com sucesso!', response.data);
      } catch (error) {
        // Aqui você pode tratar um erro caso ocorra
        console.error('Erro ao enviar dados do profissional:', error);
      }
    }
  };

  return (
    <div className="card add-professional">
      <h5 className="card-header">Adicionar/Atualizar profissional</h5>
      <div className="card-body">
        <form id="add-form" onSubmit={saveProfessional}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              value={professional.name}
              onChange={handleInputChange}
              id="nome"
              name="name"
              required
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Digite o nome"
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefone</label>
            <input
              type="text"
              value={professional.phone}
              onChange={handleInputChange}
              id="phone"
              name="phone"
              required
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              placeholder="Digite o telefone"
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={professional.email}
              onChange={handleInputChange}
              id="email"
              name="email"
              required
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Digite o email"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>


          <button type="submit" className="btn btn-primary btn-add-professional" value="Reset Form" onClick={() => reset()}>
            Salvar
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-add-professional"

          >
            Cancelar
          </button>
          <input type="button" value="Reset Form" onClick={() => resetForm()}/>
        </form>
      </div>
    </div>

  );
};

export default RegisterProfessional;