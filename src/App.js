import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { InvoiceProvider } from './Contexts/InvoiceContext';

import Layout from './Components/Layout';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Calender from './Pages/Calender';
import InvoiceOverview from './Pages/InvoiceOverview';
import InvoiceDetail from './Pages/InvoiceDetail';
import InvoiceCreate from './Pages/InvoiceCreate';
import Error from './Pages/Error';

const UnauthenticatedRoute = ({ children }) => {
  if (sessionStorage.getItem("token")) {
    return <Navigate to="/" replace/>
  };

  return children;
};

const AuthenticatedRoute = ({ children }) => {
  if (!sessionStorage.getItem("token")) {
    return <Navigate to="/login" replace/>
  };

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<UnauthenticatedRoute><Login/></UnauthenticatedRoute>}/>
        <Route path="/" element={<AuthenticatedRoute><InvoiceProvider><Layout/></InvoiceProvider></AuthenticatedRoute>}>
          <Route index element={<Dashboard/>}/>
          <Route path="kalender" element={<Calender/>}/>
          <Route path="facturen" element={<InvoiceOverview/>}/>
          <Route path="facturen/:InvoiceId" element={<InvoiceDetail/>}/>
          <Route path="facturen/aanmaken/:InvoiceId" element={<InvoiceCreate/>}/>
          <Route path="facturen/aanmaken" element={<InvoiceCreate/>}/>
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;