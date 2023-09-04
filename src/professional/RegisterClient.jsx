import React, { useState } from "react";
import validator from 'validator'
import { IMaskInput } from "react-input-mask";
import InputMask from 'react-input-mask';
import api from "../services/api";

const RegisterClient = () => {

  const resetForm = () => {
    reset()
  };

  // const Input = (props) => (
  //   <InputMask mask="dd/mm/yyyy" value={props.value} onChange={props.onChange} />
  // );

  const [client, setclient, reset] = useState({
    name: "",
    phone: "",
    email: "",
    sexo: "",
    birthdate: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    sexo: "",
    birthdate: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setclient((prevclient) => ({
      ...prevclient,
      [name]: value,
    }));
  };

  const validateDate = (value) => {
    
    if (validator.isDate(value)) {
      setErrors('Valid Date :)')
    } else {
      setErrors('Enter Valid Date!')
    }
  }
  const saveclient = async (event) => {
    event.preventDefault();

    const newErrors = {
      name: "",
      phone: "",
      email: "",
      sexo: "",
      birthdate: "",
    };

    if (!client.name) {
      newErrors.name = "O nome é obrigatório.";
    }

    if (!client.phone) {
      newErrors.phone = "O telefone é obrigatório.";
    }

    if (!client.email) {
      newErrors.email = "O email é obrigatório.";
    }
    if (!client.birthdate) {
      newErrors.birthdate = "A data de nascimento é obrigatória.";
    }

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.phone && !newErrors.email) {
      try {
        const response = await api.post('/client', client);
        // Aqui você pode tratar a resposta da API, como mostrar uma mensagem de sucesso
        console.log('Dados do cliente enviados com sucesso!', response.data);
      } catch (error) {
        // Aqui você pode tratar um erro caso ocorra
        console.error('Erro ao enviar dados do cliente:', error);
      }
    }
  };

  return (
    <div className="card add-client">
      <h5 className="card-header">Adicionar/Atualizar cliente</h5>
      <div className="card-body">
        <form id="add-form" onSubmit={saveclient}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              value={client.name}
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
              value={client.phone}
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
              value={client.email}
              onChange={handleInputChange}
              id="email"
              name="email"
              required
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Digite o email"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="sexo">Sexo</label>
            <select
              type="select"
              id="sexo"
              name="sexo"
              required
              className={`form-select ${errors.sexo ? "is-invalid" : ""}`}
            >
              <option value="F">FEMININO</option>
              <option value="M">MASCULINO</option>
              <option value="O">OUTROS</option>
            </select>
            {errors.sexo && <div className="invalid-feedback">{errors.sexo}</div>}
          </div>
          <div className="form-group">
            <label>Data de Nascimento</label>
            <input
              type="text"
              //value={client.birthdate}
              name="birthdate"
              required
              onChange={(e) => validateDate(e.target.value)}
              className={`form-control ${errors.birthdate ? "is-invalid" : ""}`}
              placeholder="DD/MM/AAAA"
            ></input>
            {errors.birthdate && <div className="invalid-feedback">{errors.birthdate}</div>}
          </div>


          {/* <button type="submit" className="btn btn-primary btn-add-client" value="Reset Form" onClick={() => reset()}> */}
          <button type="submit" className="btn btn-primary btn-add-client">
            Salvar
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-add-client"

          >
            Cancelar
          </button>
          {/* <input type="button" value="Reset Form" onClick={() => resetForm()} /> */}
        </form>
      </div>
    </div>

  );
};

export default RegisterClient;