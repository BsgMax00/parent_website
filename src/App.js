import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './Pages/Dashboard';
import Invoice from './Pages/Invoice';
import Layout from './Components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="/facturen" element={<Invoice/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
