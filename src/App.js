// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import { Nav } from "react-bootstrap";
// import './App.css';
// import ListProfessional from './professional/ListProfessionals';
// // import RegisterProfessional from './professional/RegisterProfessional';

// // function App() {
// //   return (
// //     <Router>
// //     <Routes>
// //         <Route path="/list-professionals" element={<ListProfessional />} />
// //         <Route path="/register-professional" element={<RegisterProfessional />} />
// //     </Routes>
// //     </Router>

// //   );
// // }
// function App() {

//   return (
//       <Router>
//         <Routes>
//           <Route exact path="/list-professionals" element={<ListProfessional />} />
//           {/* <Route exact path="/register-professional" element={<RegisterProfessional/>}/> */}
//           {/* <Route path="*" element={<NotFound/>}/> */}
//         </Routes>
//       </Router>
//   );
// };

// // function ListProfessional() {
// //   return <h2>ListProfessional</h2>
// // }

// // function RegisterProfessional() {
// //   return <h2>RegisterProfessional</h2>
// // }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ListProfessional from './professional/ListProfessionals';
import RegisterProfessional from './professional/RegisterProfessional';
import UpdateProfessional from './professional/UpdateProfessional';
import ChangePasswordRegister from './professional/ChangePasswordRegister';
import RegisterClient from './professional/RegisterClient';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/list-professionals" element={<ListProfessional />} />
        <Route path="/register-professional" element={<RegisterProfessional />} />
        <Route path="/edit-professional/:professionalId" element={<UpdateProfessional />} />
        <Route path="/change-password" element={<ChangePasswordRegister />} />
        <Route path="/register-client" element={<RegisterClient />} />
      </Routes>
    </Router>
  );
}

export default App;
