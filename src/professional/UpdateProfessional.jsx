import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import api from "../services/api";

const UpdateProfessional = () => {

  // const professionalId = Number(1);
  // const { professionalId } = useParams();

  // const  [data, setData] = useState([]);

  // useEffect(() => {
  //   api.get(`/professional/${professionalId}`)
  //     .then((response) => setData(response.data))
  //     .catch((err) => console.error("Ops foi mal" + err));
  // }, [professionalId]);
  // // useEffect(() => {
  // //   api.get("/professional/"[professionalId])
  // //     .then((response) => setData(response.data))
  // //     .catch((err) => console.error("Ops foi mal" + err));
  // // }, [professionalId]);

  // const [professional, setProfessional] = useState({
  //   id: "",
  //   name: "",
  //   phone: "",
  //   email: "",
  // });

  // const [errors, setErrors] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  // });

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setProfessional((prevProfessional) => ({
  //     ...prevProfessional,
  //     [name]: value,
  //   }));
  // };

  // const updateProfessional = async (event) => {
  //   event.preventDefault();

  //   const newErrors = {
  //     name: "",
  //     phone: "",
  //     email: "",
  //   };

  //   if (!professional.name) {
  //     newErrors.name = "O nome é obrigatório.";
  //   }

  //   if (!professional.phone) {
  //     newErrors.phone = "O telefone é obrigatório.";
  //   }

  //   if (!professional.email) {
  //     newErrors.email = "O email é obrigatório.";
  //   }

  //   setErrors(newErrors);

  //   // if (!newErrors.name && !newErrors.phone && !newErrors.email) {
  //   //   try {
  //   //     let id = professional.id
  //   //     const response = await api.put('/professional/'[id], professional);
  //   //     // Aqui você pode tratar a resposta da API, como mostrar uma mensagem de sucesso
  //   //     console.log('Dados do profissional enviados com sucesso!', response.data);
  //   //   } catch (error) {
  //   //     // Aqui você pode tratar um erro caso ocorra
  //   //     console.error('Erro ao enviar dados do profissional:', error);
  //   //   }
  //   // }
    
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   // Aqui você pode fazer a chamada para a API para atualizar os dados do profissional
  //   try {
  //     await api.put(`/professional/${professionalId}`, data);
  //     console.log('Dados do profissional atualizados com sucesso!');
  //   } catch (error) {
  //     console.error('Erro ao atualizar dados do profissional:', error);
  //   }
  // };

  const { professionalId } = useParams();
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    api.get(`/professional/${professionalId}`)
      .then((response) => setData(response.data))
      .catch((err) => console.error("Ops foi mal" + err));
  }, [professionalId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Aqui você pode fazer a chamada para a API para atualizar os dados do profissional
    try {
      await api.put(`/professional/${professionalId}`, data);
      console.log('Dados do profissional atualizados com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar dados do profissional:', error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="card update-professional">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={data.name}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={data.phone}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    // <div className="card add-professional">
    //   <h5 className="card-header">Atualizar profissional</h5>
    //   <div className="card-body">
    //     <form id="add-form" onSubmit={updateProfessional}>
    //       <div className="form-group">
    //         <label htmlFor="name">Nome</label>
    //         <input
    //           type="text"
    //           value={professional.name}
    //           onChange={handleInputChange}
    //           id="nome"
    //           name="name"
    //           required
    //           className={`form-control ${errors.name ? "is-invalid" : ""}`}
    //           placeholder="Digite o nome"
    //         />
    //         {errors.name && <div className="invalid-feedback">{errors.name}</div>}
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="phone">Telefone</label>
    //         <input
    //           type="text"
    //           value={professional.phone}
    //           onChange={handleInputChange}
    //           id="phone"
    //           name="phone"
    //           required
    //           className={`form-control ${errors.phone ? "is-invalid" : ""}`}
    //           placeholder="Digite o telefone"
    //         />
    //         {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="email">Email</label>
    //         <input
    //           type="text"
    //           value={professional.email}
    //           onChange={handleInputChange}
    //           id="email"
    //           name="email"
    //           required
    //           className={`form-control ${errors.email ? "is-invalid" : ""}`}
    //           placeholder="Digite o email"
    //         />
    //         {errors.email && <div className="invalid-feedback">{errors.email}</div>}
    //       </div>


    //       <button type="submit" className="btn btn-primary btn-add-professional">
    //         Salvar
    //       </button>
    //       <button
    //         type="button"
    //         className="btn btn-secondary btn-add-professional"

    //       >
    //         Cancelar
    //       </button>
    //     </form>
    //   </div>
    // </div>

  );
};

export default UpdateProfessional;