import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './Pages/MainPage';
import InvoicePage from './Pages/InvoicePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/facturen" element={<InvoicePage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
