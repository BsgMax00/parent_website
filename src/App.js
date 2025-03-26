import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './Pages/Dashboard';
import InvoiceManagment from './Pages/InvoiceManagment';
import Layout from './Components/Layout';
import InvoiceCreate from './Pages/InvoiceCreate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="/facturen" element={<InvoiceManagment/>}/>
          <Route path="/facturen/aanmaken" element={<InvoiceCreate/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
