import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Components/Layout';
import Dashboard from './Pages/Dashboard';
import Calender from './Pages/Calender';
import InvoiceOverview from './Pages/InvoiceOverview';
import InvoiceDetail from './Pages/InvoiceDetail';
import InvoiceCreate from './Pages/InvoiceCreate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="/kalender" element={<Calender/>}/>
          <Route path="/facturen" element={<InvoiceOverview/>}/>
          <Route path="/facturen/:InvoiceId" element={<InvoiceDetail/>}/>
          <Route path="/facturen/aanmaken/:InvoiceId" element={<InvoiceCreate/>}/>
          <Route path="/facturen/aanmaken" element={<InvoiceCreate/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
