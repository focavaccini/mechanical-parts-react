import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import RegisterProfessional from './RegisterProfessional';

function Professional(props) {
  return <ListProfessional />;
}

function ListProfessional() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const goToRegisterProfessional = () => {
    navigate('/register-professional');
  };

  const goToEditProfessional = (professionalId) => {
    console.log(professionalId)
    navigate(`/edit-professional/${professionalId}`);
  };
 
  useEffect(() => {
    api.get("/professional/listAll")
      .then((response) => setData(response.data))
      .catch((err) => console.error("Ops foi mal" + err));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="card list-professional">
          <h5 className="card-header">Lista de Profissionais</h5>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Email</th>
                  <th scope="col">Telefone</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                {data.map(profissional => (
                  <tr key={profissional.id} className="profissional-item">
                    <td>{profissional.id}</td>
                    <td>{profissional.name}</td>
                    <td>{profissional.email}</td>
                    <td>{profissional.phone}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-warning btn-sm"
                        onClick={() => goToEditProfessional(profissional.id)}
                      >
                        Editar
                      </button>
                      {/* <button type="button" className="btn btn-danger btn-sm ml-1" onClick={irParaComponenteDestino}>Deletar</button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProfessional;
