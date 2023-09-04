import React, { useState } from "react";
import api from "../services/api";

const Registerproduct = () => {

  const resetForm = ()  => {
    reset()
  };

  const [product, setproduct, reset] = useState({
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
    setproduct((prevproduct) => ({
      ...prevproduct,
      [name]: value,
    }));
  };

  const saveproduct = async (event) => {
    event.preventDefault();

    const newErrors = {
      name: "",
      phone: "",
      email: "",
    };

    if (!product.name) {
      newErrors.name = "O nome é obrigatório.";
    }

    if (!product.phone) {
      newErrors.phone = "O telefone é obrigatório.";
    }

    if (!product.email) {
      newErrors.email = "O email é obrigatório.";
    }

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.phone && !newErrors.email) {
      try {
        const response = await api.post('/product', product);
        // Aqui você pode tratar a resposta da API, como mostrar uma mensagem de sucesso
        console.log('Dados do produto enviados com sucesso!', response.data);
      } catch (error) {
        // Aqui você pode tratar um erro caso ocorra
        console.error('Erro ao enviar dados do produto:', error);
      }
    }
  };

  return (
    <div className="card add-product">
      <h5 className="card-header">Adicionar/Atualizar produto</h5>
      <div className="card-body">
        <form id="add-form" onSubmit={saveproduct}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              value={product.name}
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
              value={product.phone}
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
              value={product.email}
              onChange={handleInputChange}
              id="email"
              name="email"
              required
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Digite o email"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>


          <button type="submit" className="btn btn-primary btn-add-product" value="Reset Form" onClick={() => reset()}>
            Salvar
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-add-product"

          >
            Cancelar
          </button>
          <input type="button" value="Reset Form" onClick={() => resetForm()}/>
        </form>
      </div>
    </div>

  );
};

export default Registerproduct;